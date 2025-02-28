import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/OldManInDingy.jpg';

export default function Precence1() {
      
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '15%', 
                      backgroundPosition: 'right top', backgroundRepeat: "no-repeat" }}>
            <div style={{opacity: 1.0 }}>
                <TopBar/>
                <div className='homeTable'>
                    <h1>Presence</h1>
                    <p>&nbsp;</p>
                    <p>Write articals and Post helpful info from Tom English AI:</p>
                    <p>
                    &nbsp;&nbsp;&nbsp;Candlestick Patterns<br />
                    &nbsp;&nbsp;&nbsp;Stock Market<br />
                    &nbsp;&nbsp;&nbsp;ML<br />
                    &nbsp;&nbsp;&nbsp;AI<br />
                    </p>

                    <h2>LinkedIn</h2> 
                    <p>Write articals and Post helpful info from Tom English AI.</p>

                    <p>Join groups.</p>
                    <p>Find events.</p>
                    <p>Associate with like-minded professionals, companies and communities.</p>
                    <p>&nbsp;</p>

                    <h2>X</h2> 
                    <p>Write articals and Post helpful info from Tom English AI.</p>
                    <p>Join groups.</p>
                    <p>Find events.</p>
                    <p>Associate with like-minded professionals, companies and communities.</p>
                    <p>&nbsp;</p>

                    <h2>?? Mobile site</h2> 
                    <p>Write articals and Post helpful info from Tom English AI.</p>
                    <p>Join groups.</p>
                    <p>Find events.</p>
                    <p>Associate with like-minded professionals, companies and communities.</p>
                    <p>&nbsp;</p>

                    <h2>Other</h2> 
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
            </div>
        </div>
    )
}
