import React from 'react'

export const DeleteUserCard = ({Name,Email,Role,_id}) => {

  return (
    <div>
     
     <td>{Name}</td>    
     <td>{Email}</td>    
     <td>{Role}</td>    
     <td>Delete</td>    
   
         
    </div>
  )
}
