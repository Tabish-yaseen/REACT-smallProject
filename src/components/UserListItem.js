import React from 'react'
import Card from '../UI/Card'


export default function UserListItem({userName,age,college}) {
  return (
    <Card>
      {`${userName} (${age} years old) ${college}`}
      
      
    </Card>
  )
}
