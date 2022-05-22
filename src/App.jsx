import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Work from './components/Work/Work'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'
import Skills from './components/skills/Skills';
const App = () => {
    return (
        <>
            <Home />
            <Navbar />
            <About />
            <Skills />
            <Work />
            <Contact />
            <Footer />
        </>
    )
}
export default App