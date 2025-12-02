import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/tom_english_ai_logo.jpeg';

export default function Homecopy() {

    const videoStyle     = { verticalAlign: 'top', display: 'block', margin: 0 };

    return (
        <div>
            <TopBar/>
            <center>
                <p style={{height: '20px'}}></p>
                <p className='h1home'> Tom English AI </p>
                <p className='h5home'>Senior .NET & Azure Engineer • AI Systems Builder</p>
                <p className='h5home'>Building tools that automate, scale & deliver</p>

                <p style={{height: '20px'}}></p>

                <p class="h1ahome"><b>What I Build</b></p>

                <p class="h5home" style={{width: '70%'}}>
                I build automation systems & AI-driven tools end-to-end — using PowerShell, FFmpeg,
                OpenAI, C# & Azure — so ideas move from concept to production-ready workflows without friction.
                </p>

                <p class="h5home">
                <b>My approach is simple: build the automation first so every idea can scale.</b>
                </p>

                                <p style={{height: '20px'}}></p>

                <p class="h1ahome"><b>TEAI Tools</b></p>
                <center>
                    <table style={{width: '70%'}}>
                      <colgroup>
                        <col style={{ width: '170px' }} />
                        <col />
                        </colgroup>
                        <tbody>
                            <tr><td className='h5home'>TEAIVideoMaker:</td><td className='h5home'>PowerShell + OpenAI + FFmpeg pipeline for rapid video creation</td></tr>
                            <tr><td className='h5home'>TEAIMP3Maker:</td><td className='h5home'>Fast TTS production & duration-aligned audio for prototypes</td></tr>
                            <tr><td className='h5home'>TEAIChatbot:</td><td className='h5home'>In-design flow-controlled automation architecture for turning social engagement into guided journeys (described in the whitepaper below).</td></tr>
                        </tbody>
                    </table>
                </center>
                <p style={{height: '30px'}}></p>

                <p className='hbhome'></p>
                    <table>
                        <tbody>
                            <tr><td><center><b><div className="h1ahome">Distributed Chatbot Platform Architecture</div></b></center></td></tr>
                            <tr><td><center><b><div className='h5home'>Ingest • Process • Respond </div></b></center></td></tr>
                        </tbody>
                    </table>
                    <p style={{height: '1px'}}></p>
                    <p><a href="/TEAIChatbot Distributed Platform Architecture Tom English AI 251123.pdf" download>
                        <div style={{fontSize: '18px', color:'blue' }}>Download the PDF Whitepaper</div>
                    </a></p>
                    <video width="730" height="460" controls style={videoStyle}>
                        <source src={process.env.PUBLIC_URL + "/Videos/TEAIChatbotLI01.mp4"} type="video/mp4" />
                    </video>
                <p style={{height: '5px'}}></p>
                <p className='h2home'> Video by&nbsp;<a href="../AIVideos/AIVideoTEAIVideoMaker">
                    <span style={{fontSize: '18px', color:'blue' }}>TEAIVideoMaker</span></a></p>
               

                <p style={{height: '20px'}}></p>

                <center>
                    <td>
                        <tbody>
                            <tr><td className='h5home'><b>Contact</b></td></tr>
                            <tr><td className='h5home'>tomenglishai.com</td></tr>
                            <tr><td className='h5home'><a href="mailto:jobsearch@tomenglishai.com">jobsearch@tomenglishai.com</a></td></tr>
                            <tr><td className='h5home'>LinkedIn.com/in/tomenglishai</td></tr>
                        </tbody>
                    </td>
                </center>

                <p style={{height: '40px'}}></p>

            </center> 
        </div>
    )
}
