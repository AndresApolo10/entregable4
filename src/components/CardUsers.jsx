import axios from 'axios'
import React from 'react'

const CardUsers = ({user, getAllUsers, setUpdateInfo, handleOpenForm, handleOpenFormDelete}) => {

  const deleteUser = () => {
    const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`
    axios.delete(URL)
        .then(res => {
            console.log(res.data)
            getAllUsers()
            handleOpenFormDelete()
        })
        .catch(err => console.log(err))
  }

  const handleUpdateClick = () => {
    handleOpenForm()
    setUpdateInfo(user)
  }

  return (
    <article className='card'>
        <h2 className='card__title'>{user["first_name"]} {user["last_name"]} </h2>
        <hr className='card__hr'/>
        <ul className='card__list'>
            <li className='card__item'>EMAIL <span className='card__span'>{user.email}</span></li>
            <li className='card__item'>PASSWORD <span className='card__span'>{user.password}</span></li>
            <li className='card__item'>BIRTHDAY <span className='card__span'>{user.birthday}</span></li>
        </ul>
        <footer className='card__footer'>
            <button onClick={handleUpdateClick} className='card__btn'>Update</button>
            <button onClick={deleteUser} className='card__btn'>Delete</button>
        </footer >
    </article>
  )
}

export default CardUsers