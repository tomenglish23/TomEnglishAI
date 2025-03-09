import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/OldManInDingyNoBG.png';

export default function ChatBots() {
      
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '14%', 
                      backgroundPosition: 'right top', backgroundRepeat: "no-repeat" }}>
            <div style={{opacity: 1.0 }}>
                <TopBar/>

                <h1>ChatBots</h1>


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
                <p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p style={{textAlign:"right"}}>
    <a className='anounderline' target="blank" href="\TomEnglishAI\Presence\Private">&nbsp;</a>&nbsp;</p>

            </div>
        </div>
    )
}
