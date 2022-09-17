import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Register from './pages/registration'
import MyForm from './pages/form'
import Bar from './config/layout'
import Home from './pages/home'

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/registration' element={<Bar component={Register}/>}/>
                <Route path='/form' element={<Bar component={MyForm}/>} />
                <Route path='/' element={<Bar component={Home}/>}/>
            </Routes>
        </BrowserRouter>
    )
}