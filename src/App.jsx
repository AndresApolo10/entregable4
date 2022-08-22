import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardUsers from './components/CardUsers'
import DeleteForm from './components/DeleteForm'
import UsersForm from './components/UsersForm'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isFormOpenDelete, setIsFormOpenDelete] = useState(false)

  const getAllUsers = () => {
    const URL = 'https://users-crud1.herokuapp.com/users/'
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err.response.data))
    console.log(users);
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const handleOpenForm = () => setIsFormOpen(true)

  const handleCloseForm = () => setIsFormOpen(false)

  const handleOpenFormDelete = () => setIsFormOpenDelete(true)

  const handleCloseFormDelete = () => setIsFormOpenDelete(false)

  return (
    <div className="App">
      <div className='app__nav'>
        <h1 className='app__title'>Users</h1>
        <button className='app__btn' onClick={handleOpenForm}>+ Create New User</button>
      </div>
      <div className={isFormOpen ? 'form-container' : 'form-none'}>
        <UsersForm
          getAllUsers={getAllUsers}
          updateInfo={updateInfo}
          setUpdateInfo={setUpdateInfo}
          handleCloseForm={handleCloseForm}
        />
      </div>
      <div className='card__container'>
        {
          users?.map(user => (
            <CardUsers
              key={user.id}
              user={user}
              getAllUsers={getAllUsers}
              setUpdateInfo={setUpdateInfo}
              handleOpenForm={handleOpenForm}
              handleOpenFormDelete={handleOpenFormDelete}
            />
          ))
        }
      </div>
      <div className={isFormOpenDelete ? 'form-container' : 'form-none'}>
        <DeleteForm 
        handleOpenFormDelete={handleOpenFormDelete}
        handleCloseFormDelete={handleCloseFormDelete}
        />
      </div>
    </div>
  )
}

export default App
