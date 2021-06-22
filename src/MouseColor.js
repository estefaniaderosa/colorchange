import React, { useState, useEffect } from 'react'

const MouseColor = () => {

const [color,setColor] = useState('tomato');

useEffect(() => {

    function onMouseMove(event){
        if(event.clientX < window.innerWidth /2){
            setColor('tomato');
        } else{
            setColor('lightpink');
        }
    }

    window.addEventListener('mousemove', onMouseMove);
    console.log('Running Event Listeners...');

    return()=>{ //so it stops listening with the eventlisteners when the color pannel is hidden.
        window.removeEventListener('mousemove', onMouseMove);
        console.log('Cleaning Event Listeners...');
    };
},[]);

    return <div style={{height: '100vh' , width: '100%' , backgroundColor: color}} /> ; 
}

export default MouseColor;

