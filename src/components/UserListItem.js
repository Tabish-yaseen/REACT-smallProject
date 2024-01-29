import React from 'react'
import Card from '../UI/Card'


export default function UserListItem({userName,age}) {
  return (
    <Card>
      {`${userName} (${age} years old)`}
      
    </Card>
  )
}
