"use client";
import React,  { useState } from 'react';
import "../form/efom.css";

export default function eform() {
    // const [name, setName] = useState("");

    
  return (
    <div>
    <form className='eForm'>
    <label for="event">Event Name</label>
    <input type="text" id="ename" name="event" placeholder="Event name" />
     
    <label for="date">date</label>
    <input type="date" id="date" name="date" placeholder="date" />
   
    <label for="desc">event description</label>
    <input type="text" id="text" name="text" placeholder="description" />
  

    <label for="event_category">Category</label>
    <select id="event_category" name="event_category">
      <option value="cultural">Cultural</option>
      <option value="technical">Technical</option>
      <option value="sports">Sports</option>
    </select>
    
    <label>event image</label>
    <input type="file" />
    
    <label>event Link</label>
    <input type="url" />
    
    <input type="submit" value="Submit"/>
  </form>
    </div>
  ) }