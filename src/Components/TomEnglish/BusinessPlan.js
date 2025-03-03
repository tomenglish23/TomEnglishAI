import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/OldManInDingyNoBG.png';

export default function BusinessPlan() {

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '16%', 
                      backgroundPosition: 'right top', backgroundRepeat: "no-repeat" }}>
            <TopBar/>
            <div className='homeTable'>
                <h1>Business Plan</h1>
                <p>&nbsp;</p>
                <p>Coming soon. I have loads of info to prepare my business plan. But, it isn't presentable, yet.</p>
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
