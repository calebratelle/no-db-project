import './InvoiceTable.css';
import React from 'react'
import TableHeader from './TableHeader';
import AddButton from './AddButton';
import TableRow from './TableRow';
import { useState } from 'react';
import axios from 'axios';


export default function InvoiceTable({initialInvoiceList}) {

  const [currentList, setCurrentList]= useState(initialInvoiceList)

  const addRow = async () => {

    let {data} = await axios.post('/addInvoice', {description: 'Description goes here'})
    
    setCurrentList([...currentList, data])

  }

  const deleteRow = async (id) => {

    const {data} = await axios.delete(`/removeInvoice/${id}`)

    if(!data.error){
      const filteredList = currentList.filter(el => el.id !== id)
      setCurrentList(filteredList)
    }
    
  }

  const rows = currentList.map((invoiceItem) => {

    const{id, description, rate, hours} = invoiceItem

    return (
      <TableRow
      key={id}
      id={id}
      initialInvoiceData={{description: description, rate: rate, hours: hours}}
      initialIsEditing={false}
      deleteFunc={() => deleteRow(id)}
      />
    )
  })

  return (
    <div>
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>

          {rows}

        </tbody>
        <tfoot>
          <AddButton addClick={addRow}/>
        </tfoot>
      </table>
    </div>
  )
}