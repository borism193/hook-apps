import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'

export const SimpleForm = () => {
    
    
    const {formState, oninputChange, onResetForm} = useForm(
    {
        username: '',
        email: '',
        password: ''
    })

    const {username,email,password} = formState

    
    return (
    <>  
    <h1>formulario simple</h1>
    <hr />
     
     <input type="text"
     className='form-control'
     placeholder='username'
     name='username'
     value={username}
     onChange={oninputChange}
     />

<input type="email"
     className='form-control mt-2'
     placeholder='email@example.com'
     name='email'
     value={email}
     onChange={oninputChange}
     />
     <input type="password"
     className='form-control mt-2'
     placeholder='contrasena'
     name='password'
     value={password}
     onChange={oninputChange}
     />
    <button onClick={onResetForm} className='btn btn-primary mt-2'>Borrar</button>
    
    </>

  )
}
