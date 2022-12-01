import React from 'react'
import './App.css';
import Preview from './component/preview';

export default function FormInput() {
    const [formData, setFormData] = React.useState(
        [{
            fullname: "",
            title: "",
            address: "",
            phonenumber: "",
            email: "",
            description: ""
        },]
    )
     
 
    const handleChange = (e,index) => {
        const  {name,value} = e.target
        const dataForm = [...formData]
        dataForm[index][name] = value
        setFormData(dataForm)
        console.log("change")
    }
   
    //work experience
    const [expData, setExpData] = React.useState(
        [{
            position: "",
            workdescription: "",
            company: "",
            location: "",
            begin: "",
            last: ""
        },
    ])
     
    const handleWorkDelete = (index) => {
        const dataForm = [...expData]
        dataForm.splice(index,1)
        setExpData(dataForm)
          console.log("delete")
      }
    function handleWorkAdd(){
        setExpData([...expData, {
            position: "",
            workdescription: "",
            company: "",
            location: "",
            begin: "",
            last: "",
        },])
        console.log("add clicked")
    }
    const handleWorkChange = (e,index) => {
        const  {name,value} = e.target
        const dataForm = [...expData]
        dataForm[index][name] = value
        setExpData(dataForm)
        console.log("change")
    }

    //education 
    const [eduData, setEduData] = React.useState(
        [{
            university: "",
            city: "",
            degree: "",
            major: "",
            start: "",
            end: ""
        },       
    ]
    )

    console.log(eduData)
  
    
    const handleEduDelete = (index) => {
      const dataForm = [...eduData]
      dataForm.splice(index,1)
      setEduData(dataForm)
        console.log("delete")
    }
    function handleEduAdd(){
        setEduData([...eduData, {
            university: "",
            city: "",
            degree: "",
            major: "",
            start: "",
            end: ""
        },])
        console.log("add clicked")
    }

    const handleEduChange = (e,index) => {
        const  {name,value} = e.target
        const dataForm = [...eduData]
        dataForm[index][name] = value
        setEduData(dataForm)
        console.log("change")
    }
   

    return (
        <div>
        <div className='formWrapper'>
        <form > 
        <div className='personalTitle'>Personal Information </div>
        {formData.map((singleData,index) => (    
            <div key ={index} className='personal-form' >
            <input 
                type = "text"
                maxLength={50}
                placeholder= "Full Name"
                onChange = { (e) => handleChange(e,index)}
                name = "fullname"
                value = {singleData.fullname}
        
        /> 
          
          <input
              type = "text"
              maxLength={50}
              placeholder= "Title"
              onChange = { (e) => handleChange(e,index)}
              name = "title"
              value = {singleData.title}
        
        />
        
          <input
            type = "text"
                maxLength={50}
            placeholder= "Address"
            onChange = { (e) => handleChange(e,index)}
            name = "address"
            value = {singleData.address}
        
        />
          <input
              type = "tel"
              maxLength={20}
              placeholder= "Phone number"
              onChange = { (e) => handleChange(e,index)}
              name = "phonenumber"
              value = {singleData.phonenumber}
        />
          <input
              type = "text"
                maxLength={50}
              placeholder= "Email"
              onChange = { (e) => handleChange(e,index)}
              name = "email"
              value = {singleData.email}
        
        />
         <input
              type = "text"
                maxLength={500}
              placeholder= "Description"
              onChange = { (e) => handleChange(e,index)}
              name = "description"
              value = {singleData.description}
        
        />    
         </div>
            ))}
         </form>
         <form > 
            <div className='experienceTitle'>Experience </div>
            {expData.map((singleData,index) => (    
                <div key ={index} className='experience-form' >
            <input 
                type = "text"
                maxLength={50}
                placeholder= "Position"
                onChange = { (e) => handleWorkChange(e,index)}
                name = "position"
                value = {singleData.position}
        
        /> 
          <input
              type = "text"
                maxLength={500}
              placeholder= "Work Description"
              onChange = { (e) => handleWorkChange(e,index)}
              name = "workdescription"
              value = {singleData.workdescription}
        
        />    

            <input
              type = "text"
                maxLength={50}
              placeholder= "Company"
              onChange = { (e) => handleWorkChange(e,index)}
              name = "company"
              value = {singleData.company}
        />
          <input
              type = "text"
                maxLength={50}
              placeholder= "Company Location"
              onChange = { (e) => handleWorkChange(e,index)}
              name = "location"
              value = {singleData.location}
        
        />
        
          <input
            type = "text"
                maxLength={8}
            placeholder= "Start-date"
            onChange = { (e) => handleWorkChange(e,index)}
            name = "begin"
            value = {singleData.begin}
        
        />
          <input
              type = "text"
                maxLength={8}
              placeholder= "End-date"
              onChange = { (e) => handleWorkChange(e,index)}
              name = "last"
              value = {singleData.last}
        />
        {expData.length  >1 && <div className='deleteExp' onClick= { () => handleWorkDelete(index)} > 
                    Delete</div>}
         
                    {expData.length -1 === index && expData.length<5 && 
                    <div className='addExp' onClick= {handleWorkAdd}> Add Experience</div> 
                    }
                    </div>
            ))}
        </form>
        
        <form > 
            <div className='educationTitle'>Education </div>
            {eduData.map((singleData,index) => (    
                <div key ={index} className='education-form' >
                    <input 
                        type = "text"
                        maxLength={35}
                        placeholder= "University"
                        onChange = { (e) => handleEduChange(e,index)}
                        name = "university"
                        value = {singleData.university}      
                    /> 
                    <input
                    type = "text"
                    maxLength={50}
                    placeholder= "City"
                    onChange = { (e) => handleEduChange(e,index)}
                    name = "city"
                    value = {singleData.city}
                    />
                    <input
                        type = "text"
                maxLength={30}
                        placeholder= "Degree type"
                        onChange = { (e) => handleEduChange(e,index)}
                        name = "degree"
                        value = {singleData.degree}
                    
                    />
                    <input
                        type = "text"
                        maxLength={20}
                        placeholder= "Major"
                        onChange = { (e) => handleEduChange(e,index)}
                        name = "major"
                        value = {singleData.major}
                    
                    />
                    
                    <input
                        type = "text"
                maxLength={8}
                        placeholder= "From"
                        onChange = { (e) => handleEduChange(e,index)}
                        name = "start"
                        value = {singleData.start}
                    
                    />
                    <input
                        type = "text"
                maxLength={8}
                        placeholder= "To"
                        onChange = { (e) => handleEduChange(e,index)}
                        name = "end"
                        value = {singleData.end}
                    />
                    {eduData.length  >1 && <div className='deleteEdu' onClick= { () => handleEduDelete(index)} > 
                    Delete</div>}
         
                    {eduData.length -1 === index && eduData.length<5 && 
                    <div className='addEdu' onClick= {handleEduAdd}> Add Education</div> 
                    }
                </div>
            ))} 
        </form>
        </div> 
   
            <div>
            
         <Preview 
       
        fullname = {formData.map((singleData,index) => (
                <div key={index}>
                {singleData.fullname && <section>{singleData.fullname} </section>}
                </div>
            )) }
       
        title = {formData.map((singleData,index) => (
            <span key={index}>
            {singleData.title} 
            </span>
        )) }
        address = {formData.map((singleData,index) => (
            <span key={index}>
            {singleData.address && <section>{singleData.address} </section>}
            </span>
        )) }
        phonenumber = {formData.map((singleData,index) => (
            <span key={index}>
            {singleData.phonenumber && <span>{singleData.phonenumber} </span>}
            </span>
        )) }
        email = {formData.map((singleData,index) => (
            <span key={index}>
            {singleData.email && <span>{singleData.email} </span>}
            </span>
        )) }

        description = {formData.map((singleData,index) => (
            <span key={index}>
            {singleData.description && <span>{singleData.description} </span>}
            </span>
        )) }

        //Work props
            
        position = {expData.map((singleData,index) => (
            <span key={index}>
            {singleData.position && <section>{singleData.position} </section>}
            </span>
        )) }
        workdescription = {expData.map((singleData,index) => (
        <span key={index}>
        {singleData.workdescription && <section>{singleData.workdescription} </section>}
        </span>
    )) }
    company = {expData.map((singleData,index) => (
        <span key={index}>
        {singleData.company && <section>{singleData.company} </section>}
        </span>
    )) }
    location = {expData.map((singleData,index) => (
        <span key={index}>
        {singleData.location && <section>, {singleData.location} </section>}
        </span>
    )) }
    begin = {expData.map((singleData,index) => (
        <span key={index}>
        {singleData.begin && <span>From: {singleData.begin}</span>}
        </span>
    )) }
    last = {expData.map((singleData,index) => (
        <span key={index}>
     {singleData.last && <span> - {singleData.last}</span>}
        </span>
    )) }

        //education props
    university = {eduData.map((singleData,index) => (
            <span key={index}>
            {singleData.university && <section>{singleData.university}</section>}
            </span>
        )) }
    city = {eduData.map((singleData,index) => (
        <span key={index}>
        {singleData.city && <section>, {singleData.city} </section>}
        </span>
    )) }
    degree = {eduData.map((singleData,index) => (
        <span key={index}>
        {singleData.degree && <section>Degree: {singleData.degree} </section>}
        </span>
    )) }
    major = {eduData.map((singleData,index) => (
        <span key={index}>
        {singleData.major && <section> Major: {singleData.major} </section>}
        </span>
    )) }
    start = {eduData.map((singleData,index) => (
        <span key={index}>
        {singleData.start && <span> From: {singleData.start} - </span>}
        </span>
    )) }
    end = {eduData.map((singleData,index) => (
        <span key={index}>
        {singleData.end}
        </span>
    )) }

    /> 

        </div>
    </div>
    
    )
 
}
