import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import AppContext from './contexts/AppContext'
import Home from './pages/Home'
import Contact from './pages/Contact'
import injectContext from './contexts/AppContext'

const App = () => {
    return (
        <>
            {/* <AppContext> */}
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
            {/* </AppContext> */}
        </>
    )
}

export default injectContext(App)