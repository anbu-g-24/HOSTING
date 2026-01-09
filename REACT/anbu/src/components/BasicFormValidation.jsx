import React, { useState } from 'react'

function BasicFormValidation() {

    const [formData , setFormData] =useState({
        name:"",
        email:"",
        password:"",
    })


    const handleChange = (e)=>{
        const {name , value} = e.target;

        setFormData({
            ...formData,
            [name]:value
        });
    }


  return (
    <div>

        <from>
            <h2>Basic From Validation</h2>

            <div>
                <input type="text"
                name= "username"
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleChange}
                 />


                 <button type="submit">Submit</button>
            </div>

    
        </from>


    </div>
  )
}

export default BasicFormValidation