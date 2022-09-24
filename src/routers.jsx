import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Register from './pages/registration'
import MyForm from './pages/form'
import Bar from './config/layout'

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Bar title={'Cadastro'} main={Register}/>}/>
                <Route path='/form' element={<Bar main={MyForm}/>} />
            </Routes>
        </BrowserRouter>
    )
}