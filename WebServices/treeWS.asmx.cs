using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Services;
using Newtonsoft.Json;
using MapWebApp.ListClass;
using System.Net;
using System.IO;
using System.Runtime.Serialization;
using System.Xml;
using System.Xml.Linq;
using System.Drawing;
using System.ComponentModel;

namespace MapWebApp.WebServices
{
    /// <summary>
    /// Summary description for treeWS
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class treeWS : System.Web.Services.WebService
    {
        LogFiles Log = new LogFiles();
        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public lstTreeView[] GetLocations()
        {
            try
            {
                List<lstTreeView> lstPage = new List<lstTreeView>();
                string server = "";

                XElement xelement = XElement.Load(settingsPath);

                var persons = from LOCATIONS in xelement.Elements("SETTING")
                              select LOCATIONS;
                foreach (var urlElement in persons)
                {
                    server = urlElement.Element("SERVER_NAME").Value;
                }

                WebRequest req = WebRequest.Create("http://" + server + "/MyPC/Front.aspx?page=getResourceStatesAPI");
                req.ContentType = "application/json";
                WebResponse resp = req.GetResponse();
                Stream stream = resp.GetResponseStream();
                StreamReader re = new StreamReader(stream);
                String json = re.ReadToEnd();
                var jsonlist = JsonConvert.DeserializeObject<List<RootObject>>(json);

                XmlDocument xmldoc = new XmlDocument();
                XmlDeclaration decl = xmldoc.CreateXmlDeclaration("1.0", "UTF-16", "");
                xmldoc.InsertBefore(decl, xmldoc.DocumentElement);
                XmlElement MAP = xmldoc.CreateElement("MAP");
                xmldoc.AppendChild(MAP);

                for (int i = 0; i < jsonlist.Count; i++)
                {
                    string siteId = jsonlist[i].id.ToString();
                    string siteName = jsonlist[i].name.ToString();
                    lstTreeView treeView = new lstTreeView();
                    treeView.SiteId = siteId;
                    treeView.SiteName = siteName;
                    treeView.Location = new List<LocationsNew>();

                    XmlElement SITE = xmldoc.CreateElement("SITE");
                    XmlElement SITE_ID = xmldoc.CreateElement("SITE_ID");
                    SITE_ID.InnerText = siteId;
                    SITE.AppendChild(SITE_ID);
                    XmlElement SITE_NAME = xmldoc.CreateElement("SITE_NAME");
                    SITE_NAME.InnerText = siteName;
                    SITE.AppendChild(SITE_NAME);
                    MAP.AppendChild(SITE);

                    for (int j = 0; j < jsonlist[i].locations.Count; j++)
                    {
                        string locationId = jsonlist[i].locations[j].id.ToString();
                        string locationName = jsonlist[i].locations[j].name.ToString();
                        LocationsNew loc = new LocationsNew();
                        loc.LocationName = locationName;
                        treeView.Location.Add(new LocationsNew { LocationId = locationId, LocationName = locationName });

                        XmlElement LOCATIONS = xmldoc.CreateElement("LOCATIONS");
                        XmlElement LOCATION_ID = xmldoc.CreateElement("LOCATION_ID");
                        LOCATION_ID.InnerText = locationId;
                        LOCATIONS.AppendChild(LOCATION_ID);

                        XmlElement LOCATION_NAME = xmldoc.CreateElement("LOCATION_NAME");
                        LOCATION_NAME.InnerText = locationName;
                        LOCATIONS.AppendChild(LOCATION_NAME);
                        SITE.AppendChild(LOCATIONS);


                        for (int k = 0; k < jsonlist[i].locations[j].resources.Count; k++)
                        {
                            string resId = jsonlist[i].locations[j].resources[k].id.ToString();
                            string resName = jsonlist[i].locations[j].resources[k].name.ToString();
                            string resState = jsonlist[i].locations[j].resources[k].state.ToString();

                            XmlElement RESOURCES = xmldoc.CreateElement("RESOURCES");
                            XmlElement RESOURCE_ID = xmldoc.CreateElement("RESOURCE_ID");
                            RESOURCE_ID.InnerText = resId;
                            RESOURCES.AppendChild(RESOURCE_ID);

                            XmlElement RESOURCE_NAME = xmldoc.CreateElement("RESOURCE_NAME");
                            RESOURCE_NAME.InnerText = resName;
                            RESOURCES.AppendChild(RESOURCE_NAME);

                            XmlElement RESOURCE_STATE = xmldoc.CreateElement("RESOURCE_STATE");
                            RESOURCE_STATE.InnerText = resState;
                            RESOURCES.AppendChild(RESOURCE_STATE);
                            LOCATIONS.AppendChild(RESOURCES);
                        }
                    }
                    lstPage.Add(treeView);
                }

                string path = @"C:\ProgramData\ITS\MAP";
                CheckOrCreateFolder(path);
                xmldoc.Save(path + "/MAP.xml");
                return lstPage.ToArray();
            }
            catch (Exception ex)
            {
                Log.ErrorLog(ex.Message, "Error");
                return null;
            }
        }
        string mapPath = @"C:\ProgramData\ITS\MAP\MAP.xml";
        int count = 0;

        public void CheckOrCreateFolder(string path)
        {
            try
            {
                if (!(Directory.Exists(path)))
                {
                    Directory.CreateDirectory(path);
                }
            }
            catch (Exception ex)
            {
                Log.ErrorLog(ex.Message, "Error");
                throw;
            }
        }

        string savePath = @"C:\ProgramData\ITS\MAP\SaveMap";
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string[] GetMapNames()
        {
            try
            {
                List<string> mapName = new List<string>();
                string[] XMLfiles = Directory.GetFiles(savePath, "*.XML");
                foreach (string file in XMLfiles)
                {
                    string ee = (Path.GetFileName(file));
                    mapName.Add(ee);
                }

                return mapName.ToArray();
            }
            catch (Exception ex)
            {
                Log.ErrorLog(ex.Message, "Error");
                return null;
            };
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string[] GetServerName()
        {
            try
            {
                List<string> serverName = new List<string>();
                XElement xelement = XElement.Load(settingsPath);
                var persons = from LOCATIONS in xelement.Elements("SETTING")
                              select LOCATIONS;
                foreach (var urlElement in persons)
                {
                    serverName.Add(urlElement.Element("SERVER_NAME").Value);
                    serverName.Add(urlElement.Element("REFRESH_INTERVEL").Value);
                }
                return serverName.ToArray();
            }
            catch (Exception ex)
            {
                Log.ErrorLog(ex.Message, "Error");
                return null;
            }
        }

        [WebMethod]
        public void SaveSettings(string server, string refresh)
        {
            try
            {
                XmlDocument xmldoc = new XmlDocument();
                XmlDeclaration decl = xmldoc.CreateXmlDeclaration("1.0", "UTF-16", "");
                xmldoc.InsertBefore(decl, xmldoc.DocumentElement);
                XmlElement Settings = xmldoc.CreateElement("SETTINGS");
                xmldoc.AppendChild(Settings);

                XmlElement SETTING = xmldoc.CreateElement("SETTING");

                XmlElement SERVER_NAME = xmldoc.CreateElement("SERVER_NAME");
                SERVER_NAME.InnerText = server;
                SETTING.AppendChild(SERVER_NAME);

                XmlElement REFRESH_INTERVEL = xmldoc.CreateElement("REFRESH_INTERVEL");
                REFRESH_INTERVEL.InnerText = refresh;
                SETTING.AppendChild(REFRESH_INTERVEL);

                Settings.AppendChild(SETTING);

                string path = @"C:\ProgramData\ITS\MAP";
                CheckOrCreateFolder(path);
                xmldoc.Save(path + "/SETTINGS.xml");
            }
            catch (Exception ex)
            {
                Log.ErrorLog(ex.Message, "Error");
            }

        }

        [WebMethod]
        public string TestConnection(string server)
        {
            string errorMsg;
            try
            {
                WebRequest req = WebRequest.Create("http://" + server + "/MyPC/Front.aspx?page=getResourceStatesAPI");
                req.ContentType = "application/json";
                WebResponse resp = req.GetResponse();
                errorMsg = "Test Connection Succeeded";
                return errorMsg;
            }
            catch (Exception ex)
            {
                Log.ErrorLog(ex.Message, "Error");
                errorMsg = "Failed";
                return errorMsg;
            }

        }
        string selLocPath = @"C:\ProgramData\ITS\MAP\SELECTED_LOCATIONS.xml";
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void SaveLocations(List<lstsavedLocations> itemsClass)
        {
            XmlDocument xmldoc = new XmlDocument();
            XmlDeclaration decl = xmldoc.CreateXmlDeclaration("1.0", "UTF-16", "");
            xmldoc.InsertBefore(decl, xmldoc.DocumentElement);
            XmlElement SAVED_LOCATIONS = xmldoc.CreateElement("SAVED_LOCATIONS");
            xmldoc.AppendChild(SAVED_LOCATIONS);
            try
            {
                XElement xelement = XElement.Load(selLocPath);
                var persons = from LOCATIONS in xelement.Elements("LOCATIONS")
                              select LOCATIONS;
                foreach (XElement siteDetails in persons)
                {
                    XmlElement SELECTED_LOCATIONS = xmldoc.CreateElement("LOCATIONAME");
                    SELECTED_LOCATIONS.SetAttribute("SITE_NAME", siteDetails.Element("SITE_NAME").Value);
                    SELECTED_LOCATIONS.SetAttribute("siteId", siteDetails.Element("SITE_NAME").Attribute("siteId").Value);
                    SELECTED_LOCATIONS.SetAttribute("LOCATION_NAME", siteDetails.Element("LOCATION_NAME").Value);
                    SELECTED_LOCATIONS.SetAttribute("locationId", siteDetails.Element("LOCATION_NAME").Attribute("locationId").Value);
                    SAVED_LOCATIONS.AppendChild(SELECTED_LOCATIONS);
                }
            }
            catch (Exception ex)
            {
                Log.ErrorLog(ex.Message, "Error");
            }
            finally
            {
                for (int i = 0; i < itemsClass.Count; i++)
                {
                    XmlElement LOCATIONS = xmldoc.CreateElement("LOCATIONS");

                    XmlElement ShapeName = xmldoc.CreateElement("ShapeName");
                    ShapeName.InnerText = itemsClass[i].ShapeName;
                    LOCATIONS.AppendChild(ShapeName);

                    XmlElement ShapeID = xmldoc.CreateElement("ShapeID");
                    ShapeID.InnerText = itemsClass[i].ShapeID;
                    LOCATIONS.AppendChild(ShapeID);

                    XmlElement ControlId = xmldoc.CreateElement("ControlId");
                    ControlId.InnerText = itemsClass[i].ControlId;
                    LOCATIONS.AppendChild(ControlId);

                    XmlElement Transform = xmldoc.CreateElement("Transform");
                    Transform.InnerText = itemsClass[i].Transform;
                    LOCATIONS.AppendChild(Transform);

                    XmlElement LocationName = xmldoc.CreateElement("LocationName");
                    LocationName.InnerText = itemsClass[i].LocationName;
                    LOCATIONS.AppendChild(LocationName);

                    XmlElement src = xmldoc.CreateElement("src");
                    src.InnerText = itemsClass[i].src;
                    LOCATIONS.AppendChild(src);

                    SAVED_LOCATIONS.AppendChild(LOCATIONS);
                }

                string path = @"C:\ProgramData\ITS\MAP\SaveMap";
                CheckOrCreateFolder(path);
                xmldoc.Save(path + "/" + itemsClass[0].MapName + ".xml");
            }

        }

        string openLocPath = @"C:\ProgramData\ITS\MAP\SaveMap";

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public lstSelectedLocations[] ModifyLocations(string mapName)
        {
            try
            {
                List<lstSelectedLocations> lstOpen = new List<lstSelectedLocations>();
                XElement xelement = XElement.Load(openLocPath + "/" + mapName + "");

                var persons = from LOCATIONS in xelement.Elements("LOCATIONAME")
                              select LOCATIONS;
                foreach (XElement siteDetails in persons)
                {
                    lstSelectedLocations modifyLocations = new lstSelectedLocations();
                    modifyLocations.siteId = siteDetails.Attribute("siteId").Value;
                    modifyLocations.siteName = siteDetails.Attribute("SITE_NAME").Value;
                    modifyLocations.locationId = siteDetails.Attribute("locationId").Value;
                    modifyLocations.locationName = siteDetails.Attribute("LOCATION_NAME").Value;
                    lstOpen.Add(modifyLocations);
                }

                return lstOpen.ToArray();
            }
            catch (Exception ex)
            {
                Log.ErrorLog(ex.Message, "Error");
                return null;
            }

        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public lstsavedLocations[] OpenLocations(string mapName)
        {
            try
            {
                List<lstsavedLocations> lstOpen = new List<lstsavedLocations>();
                XElement xelement = XElement.Load(openLocPath + "/" + mapName + "");

                var persons = from LOCATIONS in xelement.Elements("LOCATIONS")
                              select LOCATIONS;
                foreach (XElement siteDetails in persons)
                {
                    lstsavedLocations savedLocations = new lstsavedLocations();

                    savedLocations.ShapeName = siteDetails.Element("ShapeName").Value;
                    savedLocations.ShapeID = siteDetails.Element("ShapeID").Value;
                    savedLocations.ControlId = siteDetails.Element("ControlId").Value;
                    savedLocations.Transform = siteDetails.Element("Transform").Value;
                    savedLocations.LocationName = siteDetails.Element("LocationName").Value;
                    savedLocations.src = siteDetails.Element("src").Value;

                    lstOpen.Add(savedLocations);
                }

                return lstOpen.ToArray();
            }
            catch (Exception ex)
            {
                Log.ErrorLog(ex.Message, "Error");
                return null;
            }

        }

        string settingsPath = @"C:\ProgramData\ITS\MAP\SETTINGS.xml";

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public lstStatus[] GetStatus()
        {
            try
            {
                string server = "";

                XElement xelement = XElement.Load(settingsPath);

                var persons = from LOCATIONS in xelement.Elements("SETTING")
                              select LOCATIONS;
                foreach (var urlElement in persons)
                {
                    server = urlElement.Element("SERVER_NAME").Value;
                }

                WebRequest req = WebRequest.Create("http://" + server + "/MyPC/Front.aspx?page=getResourceStatesAPI");
                req.ContentType = "application/json";
                WebResponse resp = req.GetResponse();
                Stream stream = resp.GetResponseStream();
                StreamReader re = new StreamReader(stream);
                String json = re.ReadToEnd();
                List<lstStatus> lstGetStatus = new List<lstStatus>();
                var jsonlist = JsonConvert.DeserializeObject<List<RootObject>>(json);
                for (int i = 0; i < jsonlist.Count; i++)
                {
                    string siteId = jsonlist[i].id.ToString();
                    string siteName = jsonlist[i].name.ToString();
                    for (int j = 0; j < jsonlist[i].locations.Count; j++)
                    {
                        string locationId = jsonlist[i].locations[j].id.ToString();
                        string locationName = jsonlist[i].locations[j].name.ToString();
                        for (int k = 0; k < jsonlist[i].locations[j].resources.Count; k++)
                        {
                            lstStatus status = new lstStatus();
                            string resId = jsonlist[i].locations[j].resources[k].id.ToString();
                            string resName = jsonlist[i].locations[j].resources[k].name.ToString();
                            string resState = jsonlist[i].locations[j].resources[k].state.ToString();
                            status.ResId = resId;
                            status.ResStatus = resState;
                            lstGetStatus.Add(status);
                        }

                    }
                }

                return lstGetStatus.ToArray();
            }
            catch (Exception ex)
            {
                Log.ErrorLog(ex.Message, "Error");
                return null;
            }

        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public lstResources[] setSelectedLocations(List<lstSelectedLocations> itemsClass)
        {
            try
            {
                List<lstResources> lstRes = new List<lstResources>();

                XmlDocument xmldoc = new XmlDocument();
                XmlDeclaration decl = xmldoc.CreateXmlDeclaration("1.0", "UTF-16", "");
                xmldoc.InsertBefore(decl, xmldoc.DocumentElement);
                XmlElement SELECTED_LOCATIONS = xmldoc.CreateElement("SELECTED_LOCATIONS");
                xmldoc.AppendChild(SELECTED_LOCATIONS);

                XElement xelement = XElement.Load(mapPath);
                for (int i = 0; i < itemsClass.Count; i++)
                {
                    string siteId = itemsClass[i].siteId;
                    string siteName = itemsClass[i].siteName;
                    string locationId = itemsClass[i].locationId;
                    string locationName = itemsClass[i].locationName;

                    XmlElement LOCATIONS = xmldoc.CreateElement("LOCATIONS");
                    XmlElement SITE_NAME = xmldoc.CreateElement("SITE_NAME");
                    SITE_NAME.InnerText = siteName;
                    SITE_NAME.SetAttribute("siteId", siteId);
                    LOCATIONS.AppendChild(SITE_NAME);
                    XmlElement LOCATION_NAME = xmldoc.CreateElement("LOCATION_NAME");
                    LOCATION_NAME.InnerText = locationName;
                    LOCATION_NAME.SetAttribute("locationId", locationId);
                    LOCATIONS.AppendChild(LOCATION_NAME);
                    SELECTED_LOCATIONS.AppendChild(LOCATIONS);

                    var Sites = from SITE in xelement.Elements("SITE")
                                where (string)SITE.Element("SITE_NAME") == "" + siteName + ""
                                select SITE;
                    var Locations = from Loc in Sites.Elements("LOCATIONS")
                                    where (string)Loc.Element("LOCATION_NAME") == "" + locationName + ""
                                    select new
                                    {
                                        LocationName = Loc.Element("LOCATION_NAME").Value,
                                        LocationId = Loc.Element("LOCATION_ID").Value,
                                        Resources = Loc.Descendants("RESOURCES")
                                    };

                    foreach (var loc in Locations)
                    {
                        lstResources Resources = new lstResources();
                        Resources.LocationName = loc.LocationName + "(" + siteName + ")";
                        Resources.LocationId = loc.LocationId;
                        Resources.Resources = new List<ResourcesNew>();
                        foreach (var res in loc.Resources)
                        {
                            Resources.Resources.Add(new ResourcesNew { RES_ID = res.Element("RESOURCE_ID").Value, RES_NAME = res.Element("RESOURCE_NAME").Value.ToString(), RES_STATE = res.Element("RESOURCE_STATE").Value.ToString() });
                        }
                        lstRes.Add(Resources);
                    }
                }

                string path = @"C:\ProgramData\ITS\MAP";
                CheckOrCreateFolder(path);
                xmldoc.Save(path + "/SELECTED_LOCATIONS.xml");
                return lstRes.ToArray();
            }
            catch (Exception ex)
            {
                Log.ErrorLog(ex.Message, "Error");
                return null;
            }
        }

    }
}





