import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../css-framework'
import styles from './user.module.css'

const UserForm = ({ user, onSave }) => {
  console.log(user)
  const [data, setData] = useState(user)

  useEffect(() => {
    setData(user)
  }, [user])
  
  // const onNameChangeHandler = (e) => {
  //   // console.log(e)
  //   // console.log(e.target)
  //   // console.log(e.target.value)
  //   setData({ ...data, name: e.target.value })
  // }

  // const onUserNameChangeHandler = (e) => {
  //   setData({ ...data, username: e.target.value })
  // }

  const onChangeHandler = (e) => {
    console.log(e.target.name)
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onSubmitHandler = (e)=> {
    e.preventDefault()

    /* Validation */

    onSave(data)
  }
  return (
    <Container>
      <form className={styles['user-form']} onSubmit={onSubmitHandler} noValidate>
        <label htmlFor='name'>Name :</label>
        <input
          type='text'
          id='name'
          name='name'
          value={data.name}
          // onChange={onNameChangeHandler}
          onChange={onChangeHandler}
        />

        <label htmlFor='user-name'>User Name :</label>
        <input
          type='text'
          id='user-name'
          name='username'
          value={data.username}
          // onChange={onUserNameChangeHandler}
          onChange={onChangeHandler}
        />

        <label htmlFor='email'>Email :</label>
        <input
          type='email'
          id='email'
          name='email'
          value={data.email}
          onChange={onChangeHandler}
        />

        <label htmlFor='phone'>Phone :</label>
        <input
          type='text'
          id='phone'
          name='phone'
          value={data.phone}
          onChange={onChangeHandler}
        />

        <div className={styles['form-footer']}>
          <button type='submit' className={styles['save-button']}>
            Save
          </button>
          <Link to='/users' className={styles['cancel-button']}>
            Cancel
          </Link>
        </div>
      </form>
    </Container>
  )
}

export default UserForm
