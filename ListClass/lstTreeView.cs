using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MapWebApp.ListClass
{
    public class lstTreeView
    {
        public string SiteId { get; set; }
        public string SiteName { get; set; }
        public List<LocationsNew> Location { get; set; }
    }

    public class LocationsNew
    {
        public string LocationId { get; set; }
        public string LocationName { get; set; }

    }
}