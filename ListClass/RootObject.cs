using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MapWebApp.ListClass
{
    public class RootObject
    {
        public int id { get; set; }
        public string name { get; set; }
        public List<Location> locations { get; set; }
    }
    public class Resource
    {
        public int id { get; set; }
        public string name { get; set; }
        public string state { get; set; }
    }

    public class Location
    {
        public int id { get; set; }
        public string name { get; set; }
        public List<Resource> resources { get; set; }
    }
}