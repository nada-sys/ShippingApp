using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MapWebApp.WebServices
{
    public class lstResources
    {
        public string LocationName { get; set; }
        public string LocationId { get; set; }
        public List<ResourcesNew> Resources { get; set; }
    }

    public class ResourcesNew
    {
        public string RES_ID { get; set; }
        public string RES_NAME { get; set; }
        public string RES_STATE { get; set; }
    }
}