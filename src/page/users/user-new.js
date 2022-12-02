import axios from 'axios'
import React from 'react'
import { BasePage } from '../../components/base-page'
import UserForm from './user-form'
import * as constants from './contants'
import { useNavigate } from 'react-router-dom'

const UserNewPage = () => {
  const navigate = useNavigate()

  const user = {
    name: '',
    username: '',
    email: '',
    phone: '',
  }

  const newUser = (user) => {
    console.log(user)
    axios.post(constants.BASE_URL + '/users', user).then((res) => {
      console.log(res.data)
      navigate('/users')
    })
  }

  return (
    <BasePage title={'Add New User'}>
      <UserForm user={user} onSave={newUser} />
    </BasePage>
  )
}

export default UserNewPage
