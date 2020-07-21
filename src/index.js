import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
import './index.css';
import Sdata from './Sdata';
// import hacker from './hacker.jpg'

// console.log(Sdata[0].img)

// function ncard(val){
    

// }

ReactDom.render(
    <>
        <h1>Top Netflix Series</h1>
        {/* this is simple function */}
        {/* {Sdata.map(function ncard(val){
            return (
                <div className='apps'>
                <App 
                title={val.title}
                link = {val.link}
                />
                </div>
                    )
        })} */}
        
        {/* this is using fat arrow function */}
        {/* {Sdata.map(function_name(parameter,index,arr) => { */}
        <div className='apps'>
    
        {Sdata.map((val,index,arr) => {
            
            console.log(`array of ${index} is ${arr} and the value is ${val}`)

            return (
                    
                        <App 
                        key = {val.id}
                        img = {val.img}
                        title={val.title}
                        link = {val.link}
                        />
                 
                    )   

        })}
                
        </div>
    </>
    ,document.getElementById('root')
)