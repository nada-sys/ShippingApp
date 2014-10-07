using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using System.IO;

namespace MapWebApp.WebServices
{
    public class LogFiles
    {
        private string sLogFormat;
        private string sErrorTime;


        public LogFiles()
        {
            //sLogFormat used to create log files format :
            // dd/mm/yyyy hh:mm:ss AM/PM ==> Log Message
            string currentPageFileName = new FileInfo(HttpContext.Current.Request.Url.LocalPath).Name;

            sLogFormat = DateTime.Now.ToShortDateString().ToString() + " " + DateTime.Now.ToLongTimeString().ToString() + " ==> ";
            sLogFormat += currentPageFileName + " --> ";

            //this variable used to create log filename format "
            //for example filename : ErrorLogYYYYMMDD
            string sYear = DateTime.Now.Year.ToString();
            string sMonth = DateTime.Now.Month.ToString();
            string sDay = DateTime.Now.Day.ToString();
            sErrorTime = "" + sDay + "." + sMonth + "." + sYear + "";
        }

        public void ErrorLog(string sErrMsg, string methodName)
        {
            string sPathName = @"C:\ProgramData\ITS\MAP\Log";
            CheckOrCreateFolder(sPathName);
            StreamWriter sw = new StreamWriter("C:\\ProgramData\\ITS\\MAP\\Log\\" + sErrorTime + ".txt", true);
            sw.WriteLine(sLogFormat + methodName + " | " + sErrMsg);
            sw.Flush();
            sw.Close();
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
    }
}