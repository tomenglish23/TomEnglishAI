import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/OldManInDingyNoBG.png';

export default function AIToolsAddExtension() {
      
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '14%', 
                      backgroundPosition: 'right top', backgroundRepeat: "no-repeat" }}>
            <div style={{opacity: 1.0 }}>
                <TopBar/>

                <h1>AI Tools - Add Extensions</h1>

                <p>&nbsp;</p>
                <h2>H2</h2>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
        </div>
    )
}
