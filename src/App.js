import React, { useState } from 'react';
import MouseColor from './MouseColor';

const App = () => {
     
    const [show, setShow] = useState(true);

    return (
        <div>
            <button onClick={()=> setShow(!show)}>Show - &hearts; - Hide </button>
            {show ? <MouseColor /> : null }   
        </div>
    );
}

export default App;
