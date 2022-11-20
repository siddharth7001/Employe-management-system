import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({  employees, selectedEmployes,setEmployees,setIsEditing }){
  
  const id = selectedEmployes.id;
  const [firstName,setFirstName] = useState(selectedEmployes.firstName);
  const [lastName,setLastName] = useState(selectedEmployes.lastName);
  const [email,setEmail] = useState(selectedEmployes.email);
  const [salary,setSalary] = useState(selectedEmployes.salary);
  const [date,setDate] = useState(selectedEmployes.date);

  const handleUdate = e =>{
    e.preventDefault();

    if(!firstName || !lastName || !email || !salary || !date){
     return Swal.fire({
       icon : 'error',
       title: 'Error',
       text: 'All fields are required.',
       showConfirmButton:true
     })
    }
    const employee = {
     id,
     firstName,
     lastName,
     email,
     salary,
     date
    }
    
    for(let i=0; i < employees.length; i++){
      if(employees[i].id === id){
        employees.splice(i,1,employee);
        break;
      }
    }

    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
     icon : 'success',
     title: 'Added',
     text : `${firstName} ${lastName}'s data has been update.`,
     showConfirmButton: false,
     timer : 1500
    });
}

  return (
    <div className='small-container'>
      <form onSubmit={handleUdate}>
        <h1>Edit Employee</h1>
        <label htmlFor='firstName'>First Name</label>
        <input 
              id='firstName'
              type='text'
              name="firstName"
              value={firstName}
              onChange={e=>setFirstName(e.target.value)}
              />
        <label htmlFor='lastName'>Last Name</label>
        <input 
              id='lastName'
              type='text'
              name="lastName"
              value={lastName}
              onChange={e=>setLastName(e.target.value)}
              />
       <label htmlFor='email'> Email</label>
        <input 
              id='email'
              type='email'
              name="email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
         />
       <label htmlFor='salary'> Salary </label>
        <input 
              id='salary'
              type='number'
              name="salary"
              value={salary}
              onChange={e=>setSalary(e.target.value)}
         />
         <label htmlFor='date'> Date </label>
        <input 
              id='date'
              type='date'
              name="date"
              value={date}
              onChange={e=>setDate(e.target.value)}
              />   
              <div style={{marginTop:'30px'}}>
                <input type='submit' value='Add'/>
                <input 
                style={{ marginLeft: '12px'}}
                className='mutted-button'
                type='button'
                value='Cancel'
                onClick={()=>setIsEditing(false)}
                />
                </div>           
        
      </form>
    </div>
  )
}

export default Edit