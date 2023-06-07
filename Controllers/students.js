import { ObjectId } from "bson";
import { client } from "../db.js";

export function getAllStudents(req) {
    return client
        .db("student-and-mentors")
        .collection("students")
        .find(req.query)
        .toArray();
}

export function getStudentById(id) {
    return client
        .db("student-and-mentors")
        .collection("students")
        .findOne({ _id: new ObjectId(id) });
}

export function addStudentData(data) {
    return client
        .db("student-and-mentors")
        .collection("students")
        .insertOne(data);
}

Certainly! Here's the modified code to insert multiple student data using insertMany instead of insertOne:

javascript

router.post("/add", async (req, res) => {
  try {
    const newStudents = req.body;
    if (!newStudents || !Array.isArray(newStudents)) {
      return res.status(400).send({ data: "No student details provided" });
    }
    const result = await addStudentsData(newStudents);
    res.status(200).send({ data: { result: result, message: "New students added successfully" } });
  } catch (error) {
    res.status(500).send({ data: "Internal server error" });
  }
});

export function addStudentsData(data) {
  return client
    .db("student-and-mentors")
    .collection("students")
    .insertMany(data);
}

In the modified code, the addStudentData function is replaced with addStudentsData, which accepts an array of student objects (data) and uses the insertMany method to insert multiple documents into the MongoDB collection.

Now, you can send an array of student objects in the request body to the /add endpoint, and it will insert all the students into the database.

Please let me know if you have any further questions!


export function updateStudentData(id, updatedData) {
    return client
        .db("student-and-mentors")
        .collection("students")
        .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: updatedData });
}



export function deleteStudentData(id) {
    return client
        .db("student-and-mentors")
        .collection("students")
        .deleteOne({ _id: new ObjectId(id) });
}
