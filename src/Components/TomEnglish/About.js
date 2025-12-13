import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/tom_english_ai_logo.jpeg';

export default function About() {

    return (
        <center>
            <TopBar/>
            <div style={{ backgroundImage: `url(${backgroundImage})`, height: '50vh', width: '50vw',  
                          backgroundSize: 'contain', 
                          backgroundPosition: 'center', 
                          backgroundRepeat: 'no-repeat' }}>
            </div>
        </center>
    )
}
