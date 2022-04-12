import React,{ useState, useContext} from 'react';
import StudentContext from '../useContext/contextAPI';
import "./TagsInput.css";

function TagsInput({id}) {
    const [tagFormData, setTagFormData] = useState("");
    const tagsFunction = useContext(StudentContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(tagFormData, id);
        tagsFunction({id, tag : tagFormData});
        setTagFormData("");
        
    }
  return (
    <div className='TagsInput'>
         <form className='form' onSubmit={handleSubmit}>
         <input className="inputField" type="text" placeholder='Add a tag'
         value={tagFormData} onChange={(e)=> setTagFormData(e.target.value)}/>
         </form>
          
    </div>
  )
}

export default TagsInput;