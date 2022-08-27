import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import MyForm from './pages/form'

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/form' element={<MyForm/>} />
            </Routes>
        </BrowserRouter>
    )
}