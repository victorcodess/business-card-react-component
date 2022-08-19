import React from 'react'
import ReactDom from 'react-dom'
import Header from './Components/Header.js'
import About from './Components/About.js'
import Interests from './Components/Interests.js'
import Footer from './Components/Footer.js'

function App() {
    return <div className = "body">
            <div className = "box">
            <Header />
            <About />
            <Interests />
            <Footer />
            </div>
    </div>
}


ReactDom.render(<App/>, document.getElementById('root'))


