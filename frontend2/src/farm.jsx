import React from 'react';
import React_DOM from 'react-dom/client';
const Farm=(props)=>{
    return(
        <div>
            <h1>Animal:{props.animal}</h1>
            <h1>type:{props.type}</h1>
            <h1>crops:{props.crops}</h1>
        </div>
    )
}
export default Farm