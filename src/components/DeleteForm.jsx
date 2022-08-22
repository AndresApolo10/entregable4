import React from 'react'
import { useForm } from 'react-hook-form'

const DeleteForm = ({handleOpenFormDelete, handleCloseFormDelete}) => {

    const { register, reset, handleSubmit } = useForm()

    const submit = () => {
        handleOpenFormDelete()
        handleCloseFormDelete()
    }

    return (
        <form onSubmit={handleSubmit(submit)} className='form'>
                <div onClick={handleCloseFormDelete} className='form__equis'>X</div>
                <h2 className='form__title'>User Deleted</h2>
                <p className='form_title-2'>The user has been deleted</p>
                <button onClick={handleCloseFormDelete} className='form__btn'>OK</button>
        </form>
    )
}

export default DeleteForm