import express from "express";
import { addStudentData, addStudentsData, deleteStudentData, getAllStudents, getFilteredStudents, getStudentById, updateStudentData } from "../Controllers/students.js";
import { getMentorById } from "../Controllers/mentors.js";

const router = express.Router();


router.get("/",(req,res)=>{
    const htmlContent = `
    <h1>Welcome to the Students and Mentors Data Portal</h1>
    <p>Click <a href="/mentors/all">here</a> to view all Mentors data.</p>
    <p>Click <a href="/students/all">here</a> to view all student data.</p>
    <p>end point to add mentor</p>
    <p>/mentors/add</p>
    <p>end point to add student</p>
    <p>/students/add</p>
    <p>end point to assign a mentor to students by batch</p>
    <p>/mentors/assign-mentor-by-batch/:mentorId</p>
    <p>end point to assign a mentor to student</p>
    <p>/mentors/assign-mentor/:studentId</p>
    <p>end point to show all students for pertucular mentor</p>
    <p>/students/filtered-by-mentor/:mentorId</p>
    <p>end point to show previiously assigned mentor for a perticular student</p>
    <p>/students/previous-mentor/:studentId</p>
    <p>Feel free to explore other pages.</p>
  `;
  res.send(htmlContent);
})

export const welcomeRouter = router;
