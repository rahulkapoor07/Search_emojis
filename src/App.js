import React,{useEffect, useState} from "react"
import Student_API from "./API/api";
import './App.css';
import StudentsList from "./components/StudentsList";
import StudentContext from "./useContext/contextAPI";

function App() {
  const [studentsData, setStudentsData] = useState(null);
  const [formSearchData, setFormSearchData] = useState("");
  const [tagSearchFormData, setTagSearchFormData] = useState("");

  useEffect(()=>{
    async function studentApi(){
      const response = await Student_API.fetchData();
      const finalData = response.students.map(student => {
        student.tags = [];
        return student;
      })
      setStudentsData(finalData);
    }
    studentApi();
  },[]);

  const tagsFunction = (data)=> {
    setStudentsData(students => {
      return [...students.map(student => {
        if(student.id === data.id){
          student.tags.push(data.tag);
          return student;
        }else{
          return student;
        }
      })];
    })
  }

  return (
    <StudentContext.Provider value={tagsFunction}>
    <div className="App">
      <input className="inputField" type="text" placeholder='Search by name'
        name="name" value={formSearchData} onChange={(e)=> (setFormSearchData(e.target.value))}/>

      <hr/>
      <input className="inputField" type="text" placeholder='Search by tag'
        name="tag" value={tagSearchFormData} onChange={(e)=> (setTagSearchFormData(e.target.value))}/>
      <hr/>
      <StudentsList studentsData = {studentsData} formSearchData={formSearchData} 
      tagSearchFormData={tagSearchFormData}/>
    </div>
    </StudentContext.Provider>
  );
}

export default App;
