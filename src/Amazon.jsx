import React from 'react'
import Sdata from './Sdata'
import Card from './Card'

const Amazon = () => {
    return (
        <Card
            key = {Sdata[4].id}
            sname = {Sdata[4].sname}
            img = {Sdata[4].img}
            title={Sdata[4].title}
            link = {Sdata[4].link}
            />
     
        )   
   
}

export default Amazon;