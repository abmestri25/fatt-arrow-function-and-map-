import React from 'react'
import Sdata from './Sdata'
import Card from './Card'

const Netflix = () => {
    return (
        <Card
            key = {Sdata[0].id}
            sname = {Sdata[0].sname}
            img = {Sdata[0].img}
            title={Sdata[0].title}
            link = {Sdata[0].link}
            />
     
        )   
   
}

export default Netflix;