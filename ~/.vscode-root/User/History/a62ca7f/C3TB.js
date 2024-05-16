import React, { useState } from 'react';

const App = () => {

    const [ temperatureValue, setTemperatureValue ] = useState(10);
    const [ temperatureColor, setTemperatureColor ] = useState('cold');

    return (
        <div className='app-container'>
            <div className='temperature-display-container'>
                <div className='temperature-display'>10°C</div>
            </div>
            <div className='button-container'>
                <button>+</button>
                <button>-</button>
            </div>
        </div>
    );
}

export default App;