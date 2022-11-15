import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Referal from './Referal';
import './SelectProgram.css';



const SelectProgram = () => {
  const [program, setProgram] = useState(0);
  const [showhide, setShowhide] = useState(false);

  const handleChange = (event) => {
    const getProgram = event.target.value;
    console.log(getProgram);
    setShowhide(true);
    setProgram(getProgram);

  };


  return (
    <React.Fragment>
    <Form.Select
     as="select"
     value={program}
     onChange={handleChange}>
      <option>select menu</option>
      <option value="10">Certication for Full Stack Program</option>
      <option value="20">Certification for Business Startegy</option>
      <option value="30">Certication for Digital Marketing</option>
    </Form.Select>
    

        {
          showhide && program === 10? <Referal /> : " "

        }
        {
          showhide  && program === 20 ? <Referal /> : " "

        }
        {
          showhide  && program === 30 ? <Referal /> : " "

        }

        </React.Fragment>


  );
}

export default SelectProgram;
