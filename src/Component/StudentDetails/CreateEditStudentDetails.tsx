


import { useState, useEffect } from "react";
// import { Student } from "../models/student.model";
// import {
//   useAddStudentMutation,
//   useGetStudentQuery,
//   useUpdateStudentMutation,
// } from "../features/studentSlice";
import { useNavigate, useParams } from "react-router-dom";
import { StudentDetailInterface } from "../../Models/StudentDetailsModel";
import { useAddStudentsDetailsMutation, useGetStudentDetailsQuery, useUpdateStudentsDetailsMutation } from "../../Slices/studentDetailsSlice";
const CreateEditStudentDetails = () => {
  const [students, setStudents] = useState<StudentDetailInterface>(Object);
  const [editMode, setEditMode] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [addStudent] = useAddStudentsDetailsMutation();
  const [updateStudent] = useUpdateStudentsDetailsMutation();
  const { data } = useGetStudentDetailsQuery(id!);

  useEffect(() => {
    if (id && data) {
      setEditMode(true);
      setStudents({ ...data });
    } else {
      setEditMode(false);
    }
  }, [id, data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudents({ ...students, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editMode) {
      await updateStudent(students);
    } else {
      await addStudent(students);
    }
    navigate("/");
    setEditMode(false);
  };

  return (
    <div className="container mx-auto">
      <h2>{editMode ? "Update Form" : "Create Form"} </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input
            type="text"
            name="studentName"
            className="form-control"
            onChange={handleChange}
            value={students?.studentName || ""}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Student Email</label>
          <input
            type="email"
            name="studentEmail"
            className="form-control"
            onChange={handleChange}
            value={students?.studentEmail || ""}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {editMode ? "Update " : "Add "}
        </button>
      </form>
    </div>
  );
};

export default CreateEditStudentDetails;
