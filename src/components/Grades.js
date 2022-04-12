import React from 'react'
import {v4 as uuid} from "uuid";

function Grades({data, idx}) {
  return (
    <div>
        <small key={uuid()}>
          Test {idx+1} : {data}%
          </small>
    </div>
  )
}

export default Grades;