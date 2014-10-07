using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Runtime.Serialization;
using System.IO;
using System.Xml;
using System.Xml.Linq;

namespace MapWebApp
{
    public partial class Home : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                string savePath = @"C:\ProgramData\ITS\MAP\SaveMap";
                CheckOrCreateFolder(savePath);
                string[] XMLfiles = Directory.GetFiles(savePath, "*.XML");
                foreach (string file in XMLfiles)
                {
                    string ee = (Path.GetFileName(file));
                    MenuItem menuChild = new MenuItem();
                    menuChild.Text = ee;
                    menuChild.ToolTip = ee;

                    Loc_Menu.Items.Add(menuChild);
                }
            }
        }

        public void CheckOrCreateFolder(string path)
        {
            try
            {
                if (!(Directory.Exists(path)))
                {
                    Directory.CreateDirectory(path);
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        string settingsPath = @"C:\ProgramData\ITS\MAP\SETTINGS.xml";
        protected void Loc_Menu_MenuItemClick(object sender, MenuEventArgs e)
        {
            string Refresh = "";
            XElement xelement = XElement.Load(settingsPath);
            var persons = from LOCATIONS in xelement.Elements("SETTING")
                          select LOCATIONS;
            foreach (var urlElement in persons)
            {
                Refresh = urlElement.Element("REFRESH_INTERVEL").Value;
            }
            Response.Redirect("~/GenerateMap.aspx?" + e.Item.Text + "&" + Refresh + "");

        }

    }

}