import React from 'react'
import './Card.css'


const Card = (props) => (
        <>
        <div className="card"><img className="card__image" src={props.img} alt="something"/>
            <div className="host">
                {props.sname}
            </div>
            <div className="title">
                {props.title}
            </div> <a className="button" href={props.link} >Watch Now</a>
        </div>
        </>  
)

export default Card;