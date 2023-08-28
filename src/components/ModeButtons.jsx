import React from 'react'

export default function ModeButtons({isEditing, editClick, saveClick, funkyDelete}) {


  return isEditing ? (
    <td>
      <button onClick={saveClick}>Save</button>
    </td>
  ) : (
    <td>
      <button onClick={funkyDelete}>Delete</button>
      <button onClick={editClick}>Edit</button>
    </td>
  )
}
