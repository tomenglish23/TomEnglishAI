import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import ChatGPT from '../../Images/AITools/chatgpt.png';
import Agentive from '../../Images/AITools/agentive_ai.png';
import Relevance from '../../Images/AITools/relevance_ai.png';

export default function AIGPTs() {
      
    const SP = "\u00A0"; // Non-breaking space
    const SP2 = "\u00A0\u00A0"; // Non-breaking space
    const SP3 = "\u00A0\u00A0\u00A0"; // Non-breaking space
    const SP4 = "\u00A0\u00A0\u00A0\u00A0"; // Non-breaking space
    const SP5 = "\u00A0\u00A0\u00A0\u00A0\u00A0"; // Non-breaking space
    const SP6 = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"; // Non-breaking space
    const SPC = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"; // Non-breaking space
    const SPD = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"; // Non-breaking space
    const SPE = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"; // Non-breaking space
    const COL1 = "\u0027"; // Column width for table

  
    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header><h1>AI GPTs</h1></header>            
            <main>
{/*  <p>
    <a target="blank" href="https://chatgpt.com/gpts"><img className="img03232" src={ChatGPT} alt="Suno" /></a>
    {SP2}
    <a target="blank" href="https://chatgpt.com/gpts"><b>OpenAI Chat GPTs: Listed here</b></a>
</p> */}
<p>I mostly use OpenAI's ChatGPT,{SP}
    <a target="blank" href="https://chatgpt.com"><img className="img01717" src={ChatGPT} alt="ChatGPT" /></a>{SP}
    <a target="blank" href="https://chatgpt.com">www.chatgpt.com</a>.{SP2}
    In the dropdown, select <u>ChatGPT 4.o mini</u> or <u>ChatGPT 4.o</u>.</p>
<p>ChatGPT 4.o mini is a free version of ChatGPT 4.o with the same capabilities, but without web search capability.</p>
<p>Although, I usually use the mini version without any noticeable hindrances.</p>

<p>{SP}</p><hr />
<h2><b>How to setup ChatGPT Custom Settings</b></h2>
<p>Login to ChatGPT. I am using ChatGPT 4o. </p>
<p>Click on your personal icon in the top right corner.</p>
<p>Then, click on “Customize ChatGPT”.</p>
<p>Complete the following fields to customize ChatGPT per your prefererences:</p>
<h4>What should ChatGPT call you?</h4>
<p>Tom</p>
<h4>What do you do?</h4>
<p>I am an AI Tools expert who creates tools along with accompanying documentation &amp; how-to videos.</p>
<h4>What traits should ChatGPT have?</h4>
<p><b>Context:</b></p>
<p>You're helping an AI professional who values <u>clarity, practical insight & efficient communication</u>. </p>
<p>ChatGPT: {SP} <u>Act as a thoughtful assistant</u>: offering high-quality <u>responses</u> aligned with the <u>user’s workflow, tone & goals</u>. </p>
<p>Objective: <u>Create custom instructions</u>: {SP3}guiding ChatGPT to <u>respond</u> with greater: <u>personalization, usefulness & context-awareness</u>.</p>
<p><b>Role:</b></p>
<p>Take on the voice of:{SP}<u>an investigative journalist with 20+ years of experience</u>. </p>
<p>You specialize in:{SP3} <u>uncovering how high-performing professionals think, work & communicate</u>. </p>
<p>Your skill lies in: {SP2}asking focused, respectful questions that surface core values, communication style & decision-making habits <br />
{SPE}{SPE}{SP2}then turning that into clear, powerful language.</p>
<p><b>Action:</b></p>
<p>Briefly explain what <u>Custom Instructions</u> are & how they improve ChatGPT.</p>
<p>Ask up to <u>7 targeted questions</u> to understand how the user communicates & works.</p>
<p>Use their answers to write 2 tailored instruction fields:</p>
<p>{SP3}“What would you like ChatGPT to know about you to provide better responses?”</p>
<p>{SP3}“How would you like ChatGPT to respond?”</p>
<p>Return both fields as clearly labeled blocks, <b>ready to paste into ChatGPT’s settings</b>.</p>
<p><b>Format:</b></p>
<p>Include a short intro, 7 questions & 2 polished response blocks. </p>
<p>Each block must be clear, college-level, under 1,500 characters & reflect the user's voice.</p>
<h4>Anything else ChatGPT should know about you?</h4>
<p>I value <u>growing a more in-step relationship with ChatGPT</u> - so I may tackle my problems more efficiently.</p>
<h4>Advanced</h4>
<p><b>ChatGPT capabilities</b></p>
<p>I checked all: Web Search, Code, Canvas, Advanced Voice</p>



<p>{SP}</p>
<p>{SP}</p>
<p>{SP}</p><hr />
<p>{SP}</p><hr />
<h2><b>Some AI Agency links (until I move them)</b></h2>
<p> <a target="blank" href="https://agentivehub.com/"><img className="img01717" src={Agentive} alt="Agentive" /></a>{SP2}
    <a target="blank" href="https://agentivehub.com/"><b>Agentive AI</b></a>
        : A super platform for AI Automation Agency Owners</p>
<p> <a target="blank" href="https://relevanceai.com/"><img className="img01717" src={Relevance} alt="Relevance" /></a>{SP2}
    <a target="blank" href="https://relevanceai.com/"><b>Relevance AI</b></a>
        : Build teams of AI Agents that deliver human-quality work</p>



            </main>
        </div>
    )
}
