using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace RESTservice
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class Service1 : IAddService
    {
       public String username(String id)
        {
            int id1 = Int32.Parse(id);
            IDictionary<int, string> numberNames = new Dictionary<int, string>();
            numberNames.Add(1, "Dhoni"); 
            numberNames.Add(2, "Allen");
            numberNames.Add(3, "Carey");
            numberNames.Add(4, "David");
            numberNames.Add(5, "Kane");
            numberNames.Add(6, "Jason");
            numberNames.Add(7, "Maxi");
            numberNames.Add(8, "Smith");
            numberNames.Add(9, "Rashid");
            numberNames.Add(10, "Bairstow");
            numberNames.Add(11, "Faben");
            numberNames.Add(12, "Alex");
            foreach (KeyValuePair<int, string> kvp in numberNames)
            {
                if(id1 == kvp.Key)
                {
                    return "Hello "+kvp.Value;
                }
            }
              //  Console.WriteLine("Key: {0}, Value: {1}", kvp.Key, kvp.Value);
            return "User not found ";
        }


    }
}