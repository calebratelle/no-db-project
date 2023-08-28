import React from 'react'
import ModeButtons from './ModeButtons.jsx';
import Description from './Description.jsx';
import Hours from './Hours.jsx';
import Rate from './Rate.jsx';
import formatCurrency from '../utils/formatCurrency.js';
import { useState } from 'react';
import axios from 'axios';


export default function TableRow({initialInvoiceData, initialIsEditing, deleteFunc, id}) {

  const [editMode, setIsEditing] = useState(initialIsEditing)
  const [description, setDescription] = useState(initialInvoiceData.description)
  const [rate, setRate] = useState(initialInvoiceData.rate)
  const [hours, setHours] = useState(initialInvoiceData.hours)

  const changeEditMode = () => setIsEditing(true)
  const changeNormalMode = async () => {

    let bodyObj = {
      description: description,
      rate: rate,
      hours: hours
    }

    const {data} = await axios.put(`/editInvoice/${id}`, bodyObj)

    if(!data.error){
      setIsEditing(false)
    }else{
      alert('Something broke, try again!')
    }
    
    
  }

  

  return (
    <tr>
    <ModeButtons 
    isEditing={editMode} 
    editClick={changeEditMode} 
    saveClick={changeNormalMode}
    funkyDelete={deleteFunc}/>

    <Description 
    isEditing={editMode} 
    value={description} 
    onValueChange={setDescription}/>

    <Rate 
    isEditing={editMode} 
    value ={rate} 
    onValueChange={setRate}/>

    <Hours 
    isEditing={editMode} 
    value={hours} 
    onValueChange={setHours}/>

    <td>{formatCurrency(rate * hours)}</td>
  </tr>
  )
  }
