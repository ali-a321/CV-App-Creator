import '../App.css';
import React from 'react';


export default function Preview(props){
    return (
      
        <div className=''>
             
        <div className='previewHeader'> 
        <div className='previewInfo'>  {props.fullname} </div>
        <div className='titleInfo'> {props.title}</div>
         </div>
            
            <div className='infoContainer'> 
                <div className='columnContainer'>
                    <div className='descriptionHeader'>Description
                        <div className='descriptionInput'>  {props.description} </div>
                    </div>
                    
                    <div className='experienceHeader'>Experience
                        <div className='workRole'> {props.position}  </div>
                        <div className='years'> {props.begin}  {props.last}</div>
                        <div className='workDuty'> {props.workdescription} </div>
                        <div className='previousWork'> {props.company} {props.location} </div>                   
                    </div>
                    <div className='educationHeader'>Education
                    <div className='educationInput'> 
                        <div className='universityInfo'> {props.university} {props.city}</div>
                        <div className='degreeInfo'> {props.degree} </div> 
                        <div className='majorInfo'>  {props.major} </div>
                        <div className='duration'> {props.start}  {props.end}</div>
                     </div>
                    </div>

                    </div>
                <div className='personalInfoContainer'>
                    <div className='personalDetails'> 
                    <img src='./default.jpg' alt="person" className='profilePic'  />
                    Personal Details</div>
                    <div className='addressInfo'> {props.address} </div>
                    <div> {props.phonenumber} </div>
                    <div className='emailInfo'> {props.email}</div>
                </div>
            </div>
         
            </div>
    )
}