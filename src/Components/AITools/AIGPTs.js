import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/OldManInDingyNoBG.png';
import ChatGPT from '../../Images/AITools/chatgpt.png';
import Agentive from '../../Images/AITools/agentive_ai.png';
import Relevance from '../../Images/AITools/relevance_ai.png';

export default function AIGPTs() {
      
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '19%', 
                      backgroundPosition: 'right top', backgroundRepeat: "no-repeat" }}>
            <div style={{opacity: 1.0 }}>
                <TopBar/>

                <h1>AI GPTs</h1>


                <p>&nbsp;</p>
                <p>
                    <a target="blank" href="https://chatgpt.com/gpts">
                        <img src={ChatGPT} alt="Suno" border="0" width="24" height="24" /></a>
                    &nbsp;&nbsp;
                    <a target="blank" href="https://chatgpt.com/gpts">
                        <b>OpenAI Chat GPT</b></a>
                </p>
                <p>
                    <a target="blank" href="https://agentivehub.com/">
                        <img src={Agentive} alt="Agentive" border="0" width="24" height="24" /></a>
                    &nbsp;&nbsp;
                    <a target="blank" href="https://agentivehub.com/">
                        <b>Agentive AI</b></a>: A super platform for AI Automation Agency Owners
                </p>
                <p>
                    <a target="blank" href="https://relevanceai.com/">
                        <img src={Relevance} alt="Relevance" border="0" width="24" height="24" /></a>
                    &nbsp;&nbsp;
                    <a target="blank" href="https://relevanceai.com/">
                        <b>Relevance AI</b></a>: Build teams of AI Agents that deliver human-quality work
                </p>
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
