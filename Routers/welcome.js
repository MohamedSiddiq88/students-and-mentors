import express from "express";
import { addStudentData, addStudentsData, deleteStudentData, getAllStudents, getFilteredStudents, getStudentById, updateStudentData } from "../Controllers/students.js";
import { getMentorById } from "../Controllers/mentors.js";

const router = express.Router();


router.get("/", (req, res) => {
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
          <p>Click <a href="/mentors/all">here</a> to view all Mentors data.</p>
          <p>Click <a href="/students/all">here</a> to view all student data.</p>
          <p>Endpoint to add a mentor: <code>/mentors/add</code></p>
          <p>Endpoint to add a student: <code>/students/add</code></p>
          <p>Endpoint to assign a mentor to students by batch: <code>/students/assign-mentor-by-batch/:mentorId</code></p>
          <p>Endpoint to assign a mentor to a student: <code>/students/assign-mentor/:studentId</code></p>
          <p>Endpoint to show all students for a particular mentor: <code>/students/filtered-by-mentor/:mentorId</code></p>
          <p>Endpoint to show previously assigned mentor for a particular student: <code>/students/previous-mentor/:studentId</code></p>
          <p>Feel free to explore other pages.</p>
        </body>
      </html>
    `;
    res.send(htmlContent);
  });
  

export const welcomeRouter = router;
