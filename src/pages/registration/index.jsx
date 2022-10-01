import { Button, Box, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addUser } from '../../store/modules/user/userSlice'

export default function Register() {
    const dispatch = useDispatch()
    const repeatPassword = null
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState(null)

    const registration = (event) => {
        event.preventDefault()

        if(repeatPassword === userPassword && userName.length >= 4) {
            dispatch(addUser({
                uid: 1,
                name: userName,
                password: userPassword
            }))
        }
    }
    
    return(
        <>
            <Box component='form' autoComplete='off' onSubmit={registration} sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <TextField variant='standard' required label='Nome:' sx={{margin: '20px'}}>
                    <input
                        type='text'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </TextField>
                <TextField variant='standard' required label='Senha:' type='password' sx={{margin: '20px'}}>
                    <input
                        type='text'
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                </TextField>
                <TextField variant='standard' required label='Repetir senha:' type='password' sx={{margin: '20px'}}>
                    <input
                        type='text'
                        onChange={(e) => (repeatPassword.target.value)}
                    />
                </TextField>
                <Button type='submit' variant='text' sx={{margin: '20px'}}>save</Button>
            </Box>
        </>
    )
}