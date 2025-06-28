import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

import ChatGPT from '../../Images/AITools/chatgpt.png';
import vo_ai from '../../Images/AITools/v0_ai.png';
import loveable_ai from '../../Images/AITools/loveable_ai.png';
import cursor_ai from '../../Images/AITools/cursor_ai.png';
import cursor_ai_ex from '../../Images/AITools/cursor_ai_ex.png';
import replit_ai from '../../Images/AITools/replit_ai.png';
import notegpt_ai from '../../Images/AITools/notegpt_ai.png';
import Airtable from '../../Images/AITools/airtable_ai.png';
import Make from '../../Images/AITools/make_ai.png';
import vapi_ai from '../../Images/AITools/vapi_ai.png';
import vapi_ex1 from '../../Images/AITools/vapi_ex1.png';

export default function AIBusinessTypes() {
      
    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>AI Business Types</h1>
            </header>            
            <main>
            <h2 style={{backgroundColor:'#ffe4c4', width:'90%', height:'40px', padding:'10px 0px 10px 0px'}}>5 Types of AI Business Specialties</h2>
            <p>&nbsp;</p>

            <p>&nbsp;</p>
            <h3 style={{backgroundColor:'#ffe4c4', width:'90%', padding:'5px 0px 5px 0px'}}>AI Automation</h3>

            <table style={{width:'90%'}}>
                <colgroup><col span="1" style={{width:'1%'}} /><col /></colgroup>
                <tbody>
                <tr>
                    <td>&nbsp;</td>
                    <td style={{backgroundColor:'#fffff4'}}>
                        <h4 style={{backgroundColor:'#4ae28e5b', width:"100%"}}>Overview</h4>
                        <table style={{width:'90%'}}>
                            <colgroup><col /></colgroup>
                            <tbody>
                            <tr>
                                <td>
                                <p>I will document the process here. <br /><br />
                                It will consist of a subset of:<br /><br />
                                &nbsp;&nbsp;&nbsp;ChatGPT, Grok 3, V0, Loveable, Cursor &amp; Replit. <br /><br />
                                Make &amp; Airtable are possibilities, too.</p>

                                </td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom:'27px'}}></td>
                            </tr>  
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td style={{backgroundColor:'#fffff4'}}>
                        <h4 style={{backgroundColor:'#4ae28e5b', width:"100%"}}>Create PRD</h4>
                        <table style={{width:'90%'}}>
                            <colgroup><col span="1" style={{width:'12%'}} /><col span="1" style={{width:'4%'}} /><col /></colgroup>
                            <tbody>
                            <tr>
                                <td><a target="blank" href="https://chat.openai.com/"><b>ChatGPT</b></a></td>
                                <td><img src={ChatGPT} alt="ChatGPT" border="0" width="32" height="32" /></td>
                                <td>ChatGPT</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td style={{paddingBottom:'27px'}}>
                                    </td>
                            </tr>  

                            <tr>
                                <td><a target="blank" href="https://www.airtable.com/"><b>Grok 3</b></a></td>
                                <td><img src={Airtable} alt="Grok 3" border="0" width="32" height="32" /></td>
                                <td>Grok 3</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td style={{paddingBottom:'27px'}}>
                                    </td>
                            </tr>  
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td style={{backgroundColor:'#fffff4'}}>
                        <h4 style={{backgroundColor:'#4ae28e5b', width:"100%"}}>Design the Look</h4>
                        <table style={{width:'90%'}}>
                            <colgroup><col span="1" style={{width:'12%'}} /><col span="1" style={{width:'4%'}} /><col /></colgroup>
                            <tbody>
                            <tr>
                                <td><a target="blank" href="https://v0.dev/"><b>V0</b></a></td>
                                <td><img src={vo_ai} alt="V0" border="0" width="32" height="32" /></td>
                                <td>V0</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td style={{paddingBottom:'27px'}}>
                                    </td>
                            </tr>  
                            </tbody>
                        </table>

                        <h4 style={{backgroundColor:'#4ae28e5b', width:"100%"}}>Build &amp; Deploy</h4>
                        <table style={{width:'90%'}}>
                            <colgroup><col span="1" style={{width:'12%'}} /><col span="1" style={{width:'4%'}} /><col /></colgroup>
                            <tbody>
                            <tr>
                                <td><a target="blank" href="https://lovable.dev/"><b>Loveable</b></a></td>
                                <td><img src={loveable_ai} alt="Loveable" border="0" width="32" height="32" /></td>
                                <td>Loveable</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td style={{paddingBottom:'27px'}}>
                                    </td>
                            </tr>  

                            <tr>
                                <td><a target="blank" href="https://www.cursor.com/"><b>Cursor</b></a></td>
                                <td><img src={cursor_ai} alt="Cursor" border="0" width="32" height="32" /></td>
                                <td>Cursor</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td><img src={cursor_ai_ex} alt="Cursor example" border="0" width="560" height="460" /></td>
                            </tr> 
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td style={{paddingBottom:'27px'}}>Example from the Cursor homepage.</td>
                            </tr>  
                            </tbody>
                        </table>

                        <h4 style={{backgroundColor:'#4ae28e5b', width:"100%"}}>More AI Utilities</h4>
                        <table style={{width:'90%'}}>
                            <colgroup><col span="1" style={{width:'12%'}} /><col span="1" style={{width:'4%'}} /><col /></colgroup>
                            <tbody>
                            <tr>
                                <td><a target="blank" href="https://replit.com/"><b>Replit</b></a></td>
                                <td><img src={replit_ai} alt="Replit" border="0" width="32" height="32" /></td>
                                <td>Replit</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td style={{paddingBottom:'27px'}}>
                                    </td>
                            </tr>  

                                <tr>
                                    <td><a target="blank" href="https://www.airtable.com/"><b>Airtable</b></a></td>
                                    <td><img src={Airtable} alt="Airtable" border="0" width="32" height="32" /></td>
                                    <td>Airtable <div className="boldred">FREE</div></td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>Digital operations for the AI era.</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>Create modern business apps to manage and automate critical processes.</td>
                                </tr>  
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td style={{paddingBottom:'27px'}}>
                                        &lt;=5 Editors, Interface Designer, 100 automation runs. <br />
                                        Unlimited bases (&lt;= 1K records &amp; 1 GB attachments per base).</td>
                                </tr>  

                                <tr>
                                    <td><a target="blank" href="https://www.make.com/"><b>Make</b></a></td>
                                    <td><img src={Make} alt="Make" border="0" width="32" height="32" /></td>
                                    <td>Automation you can see, flex and scale.</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td><div className="boldred">A future AI tool for me! Many of my AI associates use Make.</div></td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>Your audiences want video. Your business needs video. The algorithms demand more and more video.</td>
                                </tr>
                                <tr>
                                    <td style={{paddingBottom:'27px'}}>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>Realize your business&apos;s full potential with Make&apos;s intuitive no-code development platform.</td>
                                </tr>

                                <tr>
                                    <td><a target="blank" href="https://notegpt.io/youtube-transcript-generator"><b>NoteGPT</b></a></td>
                                    <td><img src={notegpt_ai} alt="NoteGPT" border="0" width="32" height="32" /></td>
                                    <td>NoteGPT YouTube Transcript Generator</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td><div className="boldred">FREE - Perfectly, transcribed a 45 minute video for me!</div></td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>Easily convert YouTube videos to text transcripts for free online with NoteGPT.</td>
                                </tr>
                                <tr>
                                    <td style={{paddingBottom:'27px'}}>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>Download or copy the transcripts with timestamps.</td>
                                </tr>

                                </tbody>
                        </table>
                    </td>
                </tr>  
                </tbody>
            </table>

            <p>&nbsp;</p>
                <h3 style={{backgroundColor:'#ffe4c4', width:'90%', padding:'5px 0px 5px 0px', marginTop:'20px'}}>Text-Base Agents</h3>
                <table style={{width:'90%', backgroundColor:'#fffff4'}}>
                <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>
                        
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>ChatGPTs &amp; Assistants API for custom tools &amp; information.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Agentive on top of those.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Open-ended conversations.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Program at the Prompt-level.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{paddingBottom:'27px'}}>Morningside AI, Isaiah Zimmerman at www.beyondtheblock.com, Mark &amp; Taha, Jannis</td>
                        </tr>
                    </tbody>
                </table>

                <p>&nbsp;</p>
                <h3 style={{backgroundColor:'#ffe4c4', width:'90%', padding:'5px 0px 5px 0px', marginTop:'20px'}}>Voice Agents</h3>
                <table style={{width:'90%', backgroundColor:'#fffff4'}}>
                <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>
                        
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Bland.AI, Air AI, Synthflow, Vapi</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td><div className="boldred">A future AI tool for me! Many of my AI associates use Vapi.</div></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{paddingBottom:'27px'}}></td>
                        </tr>

                        <tr>
                            <td><a target="blank" href="https://vapi.ai"><b>Vapi</b></a></td>
                            <td><img src={vapi_ai} alt="NoteGPT" border="0" width="32" height="32" /></td>
                            <td>Voice AI agents for developers</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td><img src={vapi_ex1} alt="Vapi example" border="0" width="600" height="600" /></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{paddingBottom:'27px'}}><div className="boldred">1000 FREE minutes per month.</div></td>
                        </tr>

                    </tbody>
                </table>

                <p>&nbsp;</p>
                <h3 style={{backgroundColor:'#ffe4c4', width:'90%', padding:'5px 0px 5px 0px', marginTop:'20px'}}>Zapier Ecosystem</h3>
                <table style={{width:'90%', backgroundColor:'#fffff4'}}>
                <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>
                        
                    <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>All No Code. Zapier Central.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{paddingBottom:'27px'}}>Integrate AI into: Automations, Chatbots, Data Management, </td>
                        </tr>

                    </tbody>
                </table>

                <p>&nbsp;</p>
                <h3 style={{backgroundColor:'#ffe4c4', width:'90%', padding:'5px 0px 5px 0px', marginTop:'20px'}}>Chatbots</h3>
                <table style={{width:'90%', backgroundColor:'#fffff4'}}>
                <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>
                        
                    <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Chatbots have to be built piece-by-piece with fine control over the flow.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Program the individual flow steps at the Prompt-level.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Link to apps like WhatsApp.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Examples: Booking a table. Reserving, etc.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Brendan Jowett, @Brendanautomation</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{paddingBottom:'27px'}}>Can include buttons, etc.</td>
                        </tr>

                    </tbody>
                </table>
                </main>
        </div>
    )
}