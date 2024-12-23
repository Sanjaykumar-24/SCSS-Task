import Ember from 'ember';
export default Ember.Controller.extend({
    ZOIcons : [{url:"a"},{url:"a"},{url:"a"},{url:"a"},{url:"a"},{url:"a"},{url:"a", id:"active", src:"/people-logo.svg"},{url:"a"},{url:"a"},{url:"a"},{url:"a"},
               {url:"a"},{url:"a"},{url:"a"},{url:"a"},{url:"a"},{url:"a"},{url:"a"},{url:"a"}],
     peopleIcons : [{title:"Services"},{title:"Home"},{title:"Self-service", id:"active"},{title:"Time Tracker"},{title:"Leave Tracker"},
                    {title:"Attendence"},{title:"Organization"},{title:"Files"},{title:"More"}],
    peopleBottom : [{title:"Report"}],
    options : [{title:"Profile", id:"active"},{title:"Calender"},{title:"Leave Tracker"},{title:"Time Tracker"},
               {title:"Attendence"},{title:"Files"},{title:"Delegation"},{title:"Goals"},{title:"Cases"},
               {title:"Asset",avail:true,count:2},{title:"Benefit",avail:true,count:1},{title:"Company Policy",avail:true,count:0},
               {title:"Exit Deatils",avail:true,count:0},{title:"Traning",avail:true,count:0},{title:"Training Feedback",avail:true,count:0},
               {title:"Training Feedback",avail:true,count:0},{title:"Travel Expense",avail:true,count:1},
               {title:"Travle Request",avail:true,count:2},
    ],
    workTable : [{title : "Department", value:"-"},{title : "Reporting To", value:"-"},{title : "Source of hire", value:"-"},
                 {title : "Seating Location", value:"-"},{title : "Location", value:"-"},{title : "Title", value:"-"},
                 {title : "Date of joining", value:"07-Jul-2004"},{title : "Employee Status", value:"Active"},{title : "Employee Type", value:"-"},
                 {title : "Work phone", value:"-"},{title : "Extension", value:"-"},{title : "Role", value:"Admin"},
                 {title : "Total experience", value:"20 year(s) 4 month(s)"},{title : "Experience", value:"20 year(s) 4 month(s)"}
    ],
    summaryTable : [{title : "Job Description", value:"-"},{title : "Ask me about/Expertise", value:"-"},
                    {title : "About me", value:"-"},{title : "Date of exit", value:"-"},{title : "Gender", value:"-"}
    ],
infoTable: [
    { title: "Employee ID", value: "1" },
    { title: "Last Name", value: "manikandanmg" },
    { title: "Added By", value: "1 - manikandanmg - manikandanmg" },
    { title: "Added Time", value: "02-Mar-2018 02:01 PM" },
    { title: "Onboarding Status", value: "Not Triggered" },
    { title: "First Name", value: "manikandanmg" },
    { title: "Email ID", value: "manikandanmg@pugazhgm.com" },
    { title: "Nick Name", value: "-" },
    { title: "Modified By", value: "1 - manikandanmg - manikandanmg" },
    { title: "Modified Time", value: "13-Dec-2022 07:23 PM" },
],
personalTable: [    
    { title: "Mobile Phone", value: "-" },
    { title: "Other Email", value: "-" },
    { title: "Birth Date", value: "-" },
    { title: "Marital Status", value: "-" },
    { title: "Age", value: "-" },
    { title: "Address", value : "-"}
],
actions: {
    handleScroll(event) {
      const scrollContainer = event.target;
      const targetDiv = scrollContainer.querySelector(".content .people-sub-options");
      const containerTop = scrollContainer.getBoundingClientRect().top;
      const targetTop = targetDiv.getBoundingClientRect().top;
      
      if (targetTop - containerTop <= 45) {
        document.querySelector('.top-scroll').classList.add("scrolled");
      } else {
        document.querySelector('.top-scroll').classList.remove("scrolled");
      }
    },
  }
})