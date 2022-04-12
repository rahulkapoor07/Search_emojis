import React from 'react'
import "./StudentsList.css";
import {v4 as uuid} from "uuid";
import StudentProfile from "./StudentProfile"

function StudentsList({studentsData, formSearchData, tagSearchFormData}) {
  return (
    <div className='StudentsList'>
      {studentsData && studentsData.filter(data => {
        if(formSearchData === "") {
          return data;
        }else if(`${data.firstName} ${data.lastName}`.toLowerCase().includes(formSearchData.toLowerCase())){
          return data;
        }else{
          return null;
        }
      }).filter(data =>{
        if(tagSearchFormData === ""){
          return data;
        }else if(data.tags.includes(tagSearchFormData)){
          return data;
        }else{
          return null;
        }
        
      })
        .map(student => (
        <div className="student" key={uuid()}>
          <StudentProfile company={student.company} email={student.email} firstName={student.firstName}
          lastName={student.lastName} grades={student.grades} pic={student.pic} skill={student.skill}
          id={student.id} tags={student.tags}/>
      </div>
      ))}
    </div>
  )
}

export default StudentsList;