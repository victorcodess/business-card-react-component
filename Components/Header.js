import React from 'react'
import ReactDom from 'react-dom'

export default function Header() {
    return <div className = "header"> 
            <img src = "https://user-images.githubusercontent.com/84178696/185516271-5b12aabc-eff9-4615-8507-52c87562ea35.png" /> 
            <h1>Victor Williams</h1>
            <h3>Frontend Developer</h3>   
            <a href="mailto:victor.williams@stu.cu.edu.ng"><p>victor.williams@stu.cu.edu.ng</p></a>
            
            <div className="btn">
            <a href="https://github.com/victorcodess"><button className="btn github"><i className="fa fa-github-square" aria-hidden="true"></i> GitHub</button></a>
            <a href="https://www.linkedin.com/in/victor-williams-chukwudi/"><button className="btn linkedin"><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</button></a>
            </div>
            
            </div>
}