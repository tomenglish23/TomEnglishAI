import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/OldManInDingy.jpg';

export default function Funding() {
      
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '15%', 
                      backgroundPosition: 'right top', backgroundRepeat: "no-repeat" }}>
            <div style={{opacity: 1.0 }}>
                <TopBar/>
                <div className='homeTable'>
                    <h1>Funding</h1>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Venture Capitalists</h2> 
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Meet in Person</h2> 
                    <p>&nbsp;</p>
                    <h2>Sites</h2> 
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Other</h2> 
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
            </div>
        </div>
    )
}
