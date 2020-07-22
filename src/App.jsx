import React from 'react';
import Heading from './Heading';

import './index.css'
import Netflix from './Netflix';
import Amazon from './Amazon';

const favSeries = "Netflix"

// const FavS = () => {
// if(favSeries === "Netflix")
// {
//     return <Netflix/>
// }
// else{
//     return <Amazon/>
// }
// }

 
const App = () => (
    <>
    <Heading/>
    <div className='apps'>
    {/* <FavS/>   */}
    {favSeries === "Amazon" ? <Amazon/> : <Netflix/>}
    </div>        
    </>

)

export default App;