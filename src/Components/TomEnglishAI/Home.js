import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/OldManInDingy.jpg';

export default function Home() {

    return (
        <div>
            <TopBar/>
            <center>
                <p style={{height: '30px'}}></p>
                <p className='h1home'> Tom English AI </p>
                <p style={{height: '50px'}}></p>
                <p className='h1ahome'> Artificial Intelligence &amp; Machine Learning</p>
                <p className='h1ahome'><br />in the Financial Market </p>
                <p style={{height: '20px'}}></p>
                <img src={backgroundImage} alt="Tom English AI Icon" border="0" width="300" height="350" />
                <p style={{height: '50px'}}></p>
                <p className='h2home'> <a href="http://www.tomenglishai.com/">www.TomEnglishAI.com</a> </p> 
                <p style={{height: '1px'}}></p>
                <p className='h3home'> Feb  08, 2025 </p> 
            </center> 
        </div>
    )
}
