import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addUser } from '../store/modules/user/userSlice'


export default function Home() {
    const dispatch = useDispatch()
    const name = ''
    const [userName, setUserName] = useState('')
    const idade = null
    const [userIdade, setUserIdade] = useState(0)

    const cadastro = (event) => {
        event.preventDefault()

        dispatch(addUser({
            uid: 1,
            name: userName,
            idade: userIdade
        }))
    }
    console.log(userName, userIdade)
    return(
        <>
            <h1>home...</h1>
            <form onSubmit={cadastro}>
                <label>Nome:
                    <input 
                    type='text'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                </label>
                <label>Idade:
                    <input
                    type='text' 
                    value={userIdade}
                    onChange={(e) => setUserIdade(e.target.value)}/>
                </label>
                <input type='submit' value='Cadastrar'/>
            </form>
        </>
    )
}