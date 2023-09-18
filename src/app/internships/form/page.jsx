"use client";
import React,  { useState } from 'react';
import "../form/iform.css";

export default function eform() {
    // const [name, setName] = useState("");

    
  return (
    <div>
    <form className='iForm'>
    <label for="post">Post Name</label>
    <input type="text" id="pname" name="post" placeholder="Post name" />
     
    
   
    <label for="company">company_name</label>
    <input type="text" id="text" name="text" placeholder="company_name" />
  
    <label for="valid date">date</label>
    <input type="date" id="vdate" name="vdate" placeholder="valid_date" />

    
    <label for="JD">Job Description</label>
    <input type="text" id="text" name="text" placeholder="job_desciption" />
    
    
    
    <label>job Link</label>
    <input type="url" />
    
    <input type="submit" value="Submit"/>
  </form>
    </div>
  ) }