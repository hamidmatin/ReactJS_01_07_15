import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BasePage } from '../../components/base-page'
import UserForm from './user-form'
import * as constants from './contants'
import { useParams, useNavigate } from 'react-router-dom'

const UserEditPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  })

  const updateUser = (user) => {
    console.log(user)
    axios.put(constants.BASE_URL + '/users/' + id, user).then((res) => {
      console.log(res.data)
      /*
        navigate(delta) =>
          delta => positive or negative integer
            positive => forward
            negative => back

           navigate(-1)

        navigate(to)
          to => url
      */
      // navigate(-1)
      navigate('/users')
    })
  }

  useEffect(() => {
    axios.get(constants.BASE_URL + '/users/' + id).then((res) => {
      setUser(res.data)
    })
  }, [id])

  return (
    <BasePage title={'Edit User'}>
      <UserForm user={user} onSave={updateUser} />
    </BasePage>
  )
}

export default UserEditPage
