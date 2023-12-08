import React from 'react'
import { useGetStudentsDetailsQuery } from '../../Slices/studentDetailsSlice'
import { StudentDetailInterface } from '../../Models/StudentDetailsModel';
import { NavLink } from 'react-router-dom';
const StudentDetailsShow = () => {
    // const { data } = useGetStudentsDetailsQuery()
    const {
        data: students,
        isSuccess,
        isError,
        isLoading,
    } = useGetStudentsDetailsQuery();
    console.log(students)
    const deleteHandler = (id: string) => {
        console.log(id)
    }

    return (
        <div>
            <div className="container mx-auto">
                <h2>Read Operation</h2>
                <div className="row">
                    {isLoading && <span>Loading..</span>}
                    {isError && <span>Something went wrong</span>}
                    {isSuccess && students?.map((student: StudentDetailInterface) => (
                        <div className="col-3" key={student?.id}>
                            <div className="card" style={{ "width": "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{student?.studentEmail}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{student?.studentName}</h6>
                                    <button className="btn btn-danger" onClick={() => deleteHandler(student?.id)}>Delete</button> &nbsp;
                                    <button className="btn btn-primary" onClick={() => deleteHandler(student?.id)}>Edit</button>

                                    {/* <NavLink to={`edit/${student?.id}`} className="btn btn-primary">Edit</NavLink> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StudentDetailsShow