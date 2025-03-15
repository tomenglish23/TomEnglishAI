import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/OldManInDingy.jpg';

export default function About() {

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', width: '100vw',  
                      backgroundSize: 'contain', 
                      backgroundPosition: 'center', 
                      backgroundRepeat: 'no-repeat' }}>
            <TopBar/>
        </div>
    )
}
