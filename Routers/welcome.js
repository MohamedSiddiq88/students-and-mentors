import express from "express";
import { addStudentData, addStudentsData, deleteStudentData, getAllStudents, getFilteredStudents, getStudentById, updateStudentData } from "../Controllers/students.js";
import { getMentorById } from "../Controllers/mentors.js";

const router = express.Router();


router.get("/",(req,res)=>{
    const htmlContent = `
    <h1>Welcome to the Students and Mentors Data Portal</h1>
    <p>Click <a href="/students/all">here</a> to view all student data.</p>
    <p>Feel free to explore other pages.</p>
  `;
  res.send(htmlContent);
})

export const welcomeRouter = router;
