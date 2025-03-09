import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/OldManInDingyNoBG.png';
import dogTrack1 from '../../Images/DogTrack1.jpg';
import dogTrack2 from '../../Images/DogTrack2.png';

export default function HowAIEvolved() {

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '16%', 
                      backgroundPosition: 'right top', backgroundRepeat: "no-repeat" }}>
            <TopBar/>
            <div className='homeTable'>
            <p>&nbsp;</p>
            <h3>35 years ago, my concept of AI was profitable!</h3>
                <p>&nbsp;</p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={dogTrack1} alt="dogTrack1" border="0" width="240" height="150" />&nbsp;
                <img src={dogTrack2} alt="dogTrack2" border="0" width="240" height="150" />
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>Thirty five years ago, I used Fortran to create algorighms for picking dogs at the dog track.</p>
                <p>I created an algorithm rating system. It was, sort of, Ax + By + Cz, <br />
                where x, y and z were individual algorithms to be run on data from the racing book <br />
                and A, B and C were weights from 0.1 to 9.9.</p>
                <p>A, B and C could be complex algorithms where smaller algorithms were combinged.</p>
                <p>The algorithm finder would run through our entire dinner. Yes, computers were that slow! <br />
                But, I found algorithms that worked! </p>
                <p>&nbsp;</p>
                <p>In the end, I needed more data which I could not find.</p>
                <p>Michael Vick came along and race tracks were closed.</p>
                <p>But, I've had AI in my soul ever since!</p>
                <p>Ever read "Think and Grow Rich"?</p>
                <p>Combine that with my 35 year AI passion and you have a slight insite into my mind!</p>
                <p>&nbsp;</p>


                <h3>Beginnings of the Tom English AI Platform</h3>
                <p>&nbsp;</p>
                <p>I completed Microsoft's <b><u>Machine Learning</u></b> trainings, <br />
                learned how to write <b><u>PineScript</u></b> stock chart algorithms 
                on <a target="blank" href="https://www.TradingView.com/"><b>TradingView</b></a> <br />
                and I started my AI company.</p>
                <p>&nbsp;</p>
                <p>Fast forward to today and I'm off and running.</p>
                <p>I built my <b><u>AI platform</u></b> to collect data and learn various technologies to analyze data.</p>
                <p>&nbsp;</p>
                <p>Linear Regression in Machine Learning was my start. It's a good base.<br />
                But, my algorithm experience from 35 years ago tells me to add on to Microsoft's Machine Learning.</p> 
                <p>&nbsp;</p>
                <p>I am adding a rating system to my database ... 
                not for the dog track, for stock analysis!</p>
                <p>&nbsp;</p>

                <h3>AI Tools</h3>
                <p>&nbsp;</p>
                <p>Today's AI tools are fascinating! I am chipping away at the tools required 
                    to create <b><u>AI Agents</u></b> and <b><u>Chatbots</u></b>.</p>
                <p>&nbsp;</p>
                <p>Hi-tech CEOs are NOT kidding ...</p>
                <p>&nbsp;</p>
                <p>&nbsp;&nbsp;&nbsp;The more I learn AI Agent development, <br />
                   &nbsp;&nbsp;&nbsp;the more I know AI will replace many jobs.</p>
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
