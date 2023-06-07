import express from "express";
import { addStudentData, addStudentsData, deleteStudentData, getAllStudents, getFilteredStudents, getStudentById, updateStudentData } from "../Controllers/students.js";
import { getMentorById } from "../Controllers/mentors.js";

const router = express.Router();


router.get("/", (req, res) => {
    const endpoints = [
      {
        label: "View all Mentors data",
        endpoint: "/mentors/all",
      },
      {
        label: "View all student data",
        endpoint: "/students/all",
      },
      {
        label: "Endpoint to add a mentor",
        endpoint: "/mentors/add",
      },
      {
        label: "Endpoint to add a student",
        endpoint: "/students/add",
      },
      {
        label: "Endpoint to assign a mentor to students by batch",
        endpoint: "/students/assign-mentor-by-batch/:mentorId",
      },
      {
        label: "Endpoint to assign a mentor to a student",
        endpoint: "/students/assign-mentor/:studentId",
      },
      {
        label: "Endpoint to show all students for a particular mentor",
        endpoint: "/students/filtered-by-mentor/:mentorId",
      },
      {
        label: "Endpoint to show previously assigned mentor for a particular student",
        endpoint: "/students/previous-mentor/:studentId",
      },
    ];
  
    const htmlContent = `
      <html>
        <head>
          <style>
           body {
                font-family: Arial, sans-serif;
                padding: 20px;
              }
              
              h1 {
                color: #333;
              }
              
              p {
                margin-bottom: 10px;
              }
              
              a {
                color: #007bff;
                text-decoration: none;
              }
              
              a:hover {
                text-decoration: underline;
              }
  
          </style>
        </head>
        <body>
          <h1>Welcome to the Students and Mentors Data Portal</h1>
          
          ${endpoints
            .map(
              (endpoint) => `
              <p>
                ${endpoint.label}: 
                <code>${endpoint.endpoint}</code>
                <button class="copyButton" data-endpoint="${endpoint.endpoint}">Copy</button>
              </p>
            `
            )
            .join("")}
          
          <p>Feel free to explore other pages.</p>
          
          <script>
            // Copy URL
            const copyButtons = document.querySelectorAll(".copyButton");
            copyButtons.forEach((button) => {
              button.addEventListener("click", () => {
                const endpoint = button.getAttribute("data-endpoint");
                const url = window.location.origin + endpoint;
                navigator.clipboard.writeText(url).then(() => {
                  alert("URL copied to clipboard!");
                });
              });
            });
          </script>
        </body>
      </html>
    `;
    res.send(htmlContent);
  });
  
  

export const welcomeRouter = router;
