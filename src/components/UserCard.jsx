import React from 'react'

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpen }) => {

    const handleDelete = () => {
        deleteUserById(user.id)
    }

    const handleUpdate = () => {
        setUpdateInfo(user)
        handleOpen()
    }

    return (
        <article className='user__container'>
            <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>
            <ul className='user__list'>
                <li className='user__item'><span className='user__sapan'>Email: </span>{user.email}</li>
                <li className='user__item'><span className='user__sapan'>Birthday: </span>{user.birthday}</li>
            </ul>
            <div className='btn__container'>
            <button className='btn__delete' onClick={handleDelete}>Delete</button>
            <button className='btn__update' onClick={handleUpdate}>Update</button>
            </div>
        </article>
    )
}

export default UserCard