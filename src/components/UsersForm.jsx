import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValue = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: ''
}

const UsersForm = ({ getAllUsers, updateInfo, setUpdateInfo, handleCloseForm }) => {

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])

    const createUser = data => {
        const URL = 'https://users-crud1.herokuapp.com/users/'
        axios.post(URL, data)
            .then(res => {
                console.log(res.data)
                getAllUsers()
            })
            .catch(err => console.log(err))
    }

    const updateUser = data => {
        const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
        axios.put(URL, data)
            .then(res => {
                console.log(res.data)
                getAllUsers()
            })
            .catch(err => console.log(err))
    }

    const { register, reset, handleSubmit } = useForm()

    const submit = data => {
        if(updateInfo){
            updateUser(data)
            setUpdateInfo()  
        } else{
            createUser(data)   
        }
        reset(defaultValue)
        handleCloseForm()
    }

    return (
        <form onSubmit={handleSubmit(submit)} className='form'>
            <div onClick={handleCloseForm} className='form__equis'>X</div>
            <h2 className='form__title'>{updateInfo ? 'Update User' : 'Create New User'}</h2>
            <ul className='form__list'>
                <li className='form__item'>
                    <label htmlFor="fisrtName">First Name</label>
                    <br />
                    <input {...register("first_name")} type="text" id='firstName' />
                </li>
                <li className='form__item'>
                    <label htmlFor="lastName">Last Name</label>
                    <br />
                    <input {...register("last_name")} type="text" id='lastName' />
                </li>
                <li className='form__item'>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input {...register("email")} type="text" id='email' />
                </li>
                <li className='form__item'>
                    <label htmlFor="pass">Password</label>
                    <br />
                    <input {...register("password")} type="password" id='pass' />
                </li>
                <li className='form__item'>
                    <label htmlFor="birthday">Birthday</label>
                    <br />
                    <input {...register("birthday")} type="date" id='birthday' />
                </li>
            </ul>
            <button className='form__btn'>{updateInfo ? 'Update User' : 'Add New User'}</button>
        </form>
    )
}

export default UsersForm