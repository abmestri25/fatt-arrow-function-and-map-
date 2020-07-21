import React from 'react'
import './App.css'


function App(props){
    return (
        <>
        
        <div className="card">
         
            <img className="card__image" src={props.img} alt="something"/>
        
            <div className="title">
                {props.title}
            </div>
            
            <a className="button" href={props.link} >Watch Now</a>
        </div>


        </>
  
    )
}

export default App;