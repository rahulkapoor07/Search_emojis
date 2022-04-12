import React, { useState,useRef } from 'react'
import {v4 as uuid} from "uuid";
import Grades from './Grades';
import "./StudentProfile.css"
import { FaPlus,FaMinus } from "react-icons/fa";
import TagsInput from './TagsInput';

function StudentProfile({company,email,firstName,lastName,grades,pic,skill,id, tags}) {
  const imagRef = useRef();
  const [showGrades, setShowGrades] = useState(false);
  
    const handleClick = ()=>{
        setShowGrades(!showGrades);
        imagRef.current.classList.toggle("added-grades");

    }
  return (
    <div className='StudentProfile'>
        <div className="image">
            <img ref={imagRef} src={pic} alt="pic"/>
        </div>

        <div className="details">
          <h2>{firstName} {lastName}</h2>
          <small>Email: {email}</small>
          <small>Company: {company}</small>
          <small>Skill: {skill}</small>
          <small>Average: {(grades.reduce((acc, curr)=>{ 
            return acc + +curr},0))/grades.length}%
            </small>
          

            <div className='grades'>
          {showGrades && grades.map((data,idx) => (<Grades key={uuid()} data={data} idx={idx}/>
          ))}
          </div>

          <div className='tags-input'>
          <div>{tags.map(tag => (
            <span key={uuid()}>{tag}</span>
          ))}</div>
            <TagsInput id={id}/>
          </div>

            <hr className='hr'/>
        </div>

        <div className='btn'>
          {showGrades ? <button onClick={handleClick}><FaMinus size="2rem" color='grey'/></button> :
          <button onClick={handleClick}><FaPlus size="2rem" color='grey'/></button>}
            
        </div>
    </div>
  )
}

export default StudentProfile;