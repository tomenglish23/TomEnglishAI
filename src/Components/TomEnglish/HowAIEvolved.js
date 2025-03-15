import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import dogTrack1 from '../../Images/DogTrack1.jpg';
import dogTrack2 from '../../Images/DogTrack2.png';
import SSIS from '../../Images/SSIS.png';
import ASRVoicemail from '../../Images/ASRVoicemail.png';
import TERMINATOR from '../../Images/terminator2.png';

export default function HowAIEvolved() {

    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>How AI Evolved for Me</h1>
                <p></p>
            </header>            
            <main>
            <h3>35 Years Ago ... My Concept of AI was Profitable!</h3>
                <p>&nbsp;</p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={dogTrack1} alt="dogTrack1" border="0" width="240" height="150" />&nbsp;
                <img src={dogTrack2} alt="dogTrack2" border="0" width="240" height="150" />
                <p>&nbsp;</p>
                <p>Thirty five years ago, I used Fortran to create algorighms for picking dogs at the dog track.</p>
                <p>I created an algorithm rating system. It was, sort of, Ax + By + Cz, <br />
                where x, y and z were individual algorithms to be run on data from the racing book <br />
                and A, B and C were weights from 0.1 to 9.9.</p>
                <p>A, B and C could be complex algorithms where smaller algorithms were combinged.</p>
                <p>The algorithm finder would run through our entire dinner. Yes, computers were that slow! <br />
                But, I found algorithms that worked! </p>
                <p><br />In the end, I needed more data which I could not find. Michael Vick came along &amp; race tracks were closed.</p>
                <p>But, I've had AI in my soul ever since!</p>
                <p>Ever read "Think and Grow Rich"? Combine that with my 35 year AI passion &amp; you have a slight insite into my mind!</p>
                <p>&nbsp;</p>


                <h3>Integrated Automatic Speech Recognition into Voicemail</h3>
                <p>In the 1990's, I was a voicemail company's the Lead Engineer 
                    to integrate speech recognition into their system. </p>                
                <center>
                    <p><img src={ASRVoicemail} alt="ASRVoicemail" border="0" width="300" height="200" /></p>
                </center>

                <p>&nbsp;</p>
                <h3>Decyphered the Google Search Algorithm</h3>
                <p>In 2000, I started teaching Argentine tango and wanted a way to successfully advertise. <br />
                I experimented on Google, Netscape &amp; Yahoo and, in short time, decyphered their search engines!!!</p>

                <p className='standout'>This was ground-breaking! I owned Google, Netscape &amp; Yahoo searches!</p>

                <p>I started a business called <u>TownHelp.com</u> serving all towns in Massachusetts. <br />
                    Each town had business categories like Plumbing, Restaurants, etc. </p>
                <p className='standout'>
                    I created a local database of <u>Massachusetts towns</u> &amp; <u>local business categories</u>.</p>
                    <p className='standout'>
                    Self-taught, I auto-generated 300,000+ town-based business category webpages<br /> 
                    using ONLY 3 pages of code: a home page, a town page &amp; a category page. <br />
                    Microsoft .NET dynamic routing was not widely used in the engineering world.</p>
                    <p className='standout'>80% of 300,000 webpages appeared 
                        in the TOP 3 of Internet search results!</p>
                    <p>I was ahead of my time as this was before iPhones &amp; social media.<br />
                    Mom-and-pop businesses had no clue what I was presenting to them. <br />
                I didn't have a good business head and, sadly, the business failed.</p>
                <p><br />How does this relate to AI? <br />
                ... I guess it doesn't except to say that my head has always been filled with great ideas. </p>
                <p>Read on ... I have discovered the power of AI Agents and I don't plan on missing out on this opportunity!</p>
                <p>&nbsp;</p>

                <h3>Beginnings of the Tom English AI Platform</h3>
                <p>I completed Microsoft's <b><u>Machine Learning</u></b> trainings, <br />
                learned how to write <b><u>PineScript</u></b> stock chart algorithms 
                on <a target="blank" href="https://www.TradingView.com/"><b>TradingView</b></a> <br />
                and I started my AI company.</p>
                <p>Fast forward to today and I'm off and running.</p>
                <p>I built my <b><u>AI platform</u></b> to collect data and learn various technologies to analyze data.</p>
                <p>Linear Regression in Machine Learning was my start. It's a good base.<br />
                But, my algorithm experience from 35 years ago tells me to add on to Microsoft's Machine Learning.</p> 
                <p>I am adding a rating system to my database ... 
                not for the dog track, for stock analysis!</p>
                <p>&nbsp;</p>

                <h3>AI Tools</h3>
                <p>I am creating <b><u>AI Agents</u></b> &amp; <b><u>Chatbots</u></b>.</p>

                <p>Today's <b>No Coding</b> techniques are similar to data flows I created as a SQL Developer.</p>
                <center>
                    <p><br /><img src={SSIS} alt="SSIS" border="0" width="520" height="350" /></p>
                    <p><b>SSIS for ETL (Extract, Transform, Load) data flows</b></p>
                </center>
                <p>&nbsp;</p>

                <h3>The Future is Here!</h3>
                <p>Hi-tech CEOs are NOT kidding ...</p>
                <p><br />&nbsp;&nbsp;&nbsp;The more I learn AI Agent development, the more I know AI will replace jobs.<br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Even more ... AI Agents will quickly replace cell phones. <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We will speak to our own personal AI Agent <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;which will perdict what we need before we even think of it!</p>
                <p>&nbsp;</p>
                <p><b><u>The Terminator</u></b> comes to mind.</p>
                <center>
                    <p><img src={TERMINATOR} alt="TERMINATOR" border="0" width="250" height="300" /></p>
                </center>
                </main>
        </div>
    )
}
