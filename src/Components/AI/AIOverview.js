import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function AIOverview() {

    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>AI Overview</h1>
                <p>Learn as I go ...</p>
            </header>            
            <main>

{/* =============================================================================== */}
<h1 className="bTopBlue">TEAI AI Solutions</h1>
<p>TEAI is my personal AI lab where I build tools to solve real problems.</p>
<p>Current projects:</p>
<ul>
    <li>Project 1: AI-powered chatbot</li>
    <li>Project 2: Automated content generation</li>
    <li>Project 3: Data analysis and visualization</li>
</ul>

{/* =============================================================================== */}
<h1 className="bTopBlue">AI In General</h1>
<p>Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans.</p>
<p>Key areas of AI include:</p>
<ul>
    <li>Machine Learning (ML)</li>
    <li>Natural Language Processing (NLP)</li>
    <li>Computer Vision</li>
    <li>Robotics</li>
    <li>Expert Systems</li>
</ul>
                


{/* =============================================================================== */}
<h1 className="bTopBlue">Definitions</h1>



          </main>
        </div>
    )
}
