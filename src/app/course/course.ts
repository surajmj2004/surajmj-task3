import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {

  course=[
    {
      id:1,
      title:"Web Technologies",
      description: "Covers the tools and technologies used to build and manage modern web applications.",
      image:"https://media.licdn.com/dms/image/v2/D5612AQG5Q4_R4UezJQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1701969411132?e=2147483647&v=beta&t=Swdi0NxKANtpPd-db_kWP9mniYOk2Dn46J9y2Ai_I24" 
    },
    
     {
      id:2,
      title: "PHP",
      description:"A server-side scripting language used to develop dynamic and database-driven websites.",
      image:"https://www.bocasay.com/wp-content/uploads/2024/01/Charting-the-Progression-of-the-PHP-Programming-Language-1024x1024.jpg" 
    },

     {
      id: 3,
      title:"C & C++<",
      description:"Fundamental programming languages used for system software and application development.",
      image: "https://cdn.thenewstack.io/media/2025/01/34e3b0e3-c-introduction.jpg"
    },
    {
      id:4,
      title:"Java",
      description:"An object-oriented language widely used for building enterprise and mobile applications.",
      image:"https://t4.ftcdn.net/jpg/02/92/83/57/360_F_292835773_oImixQGFKLpOPnjfsbesHyqdjOk5hsxL.jpg"
    },
     {
      id:5,
      title:"Java Script",
      description:"A scripting language used to make websites interactive and dynamic.",
      image:"https://dac.digital/wp-content/uploads/2023/12/when_did_java_become_popular-optimized.jpeg"
    },
    {
      id:6,
      title:"Artificial Intelligence",
      description:"Study how machines learn, analyze data, and make intelligent decisions.",
      image:"https://img.freepik.com/free-vector/hand-drawn-flat-desig-npl-illustration_23-2149243385.jpg?semt=ais_hybrid&w=740&q=80"
    },
     {
      id:7,
      title:"HTML & CSS",
      description:"Core technologies used to create and design modern, responsive web pages.",
      image:"https://img.freepik.com/free-psd/3d-rendered-html-file-icon_84443-57041.jpg?semt=ais_hybrid&w=740&q=80"
    },
     {
      id:8,
      title:"Python",
      description:"An easy and versatile programming language used for web development, automation, and data analysis.",
      image:"https://media.istockphoto.com/id/1319504081/vector/python-programming-language-on-technological-background-with-code-elements.jpg?s=612x612&w=0&k=20&c=YTnWCmwg_6LeXoHSk2a5enkWFX9tXbFlyrrZGCoNJjw="
    },
     {
      id:9,
      title:"Linux",
      description:"Learn basic commands, file management, and system administration in a powerful open-source operating system.",
      image:"https://thumbs.dreamstime.com/b/bash-language-runs-top-kernel-whether-s-linux-unix-which-functions-as-translator-user-227629700.jpg"
    }

  ]
}

