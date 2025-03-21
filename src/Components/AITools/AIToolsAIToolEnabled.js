import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

import Claude from '../../Images/AITools/claude_ai.png';
import FeedHive from '../../Images/AITools/FeedHive_ai.png';
import MicrosoftEdge from '../../Images/AITools/MicrosoftEdge_ai.png';
import MicrosoftEdge_Copilot from '../../Images/AITools/MicrosoftEdge_Copilot.png';
import Notion from '../../Images/AITools/notion_ai.png';
import NotionAIEx1a from '../../Images/AITools/Notion_ai_ex1a.png';
import OneNote from '../../Images/AITools/oneNote_ai.png';
import OneNoteEx from '../../Images/AITools/oneNote_ex.png';
import Perplexity from '../../Images/AITools/perplexity_ai.png';
import PopAi from '../../Images/AITools/popai_ai.png';
import n8n_io_ai from '../../Images/AITools/n8n_io_ai.png';
import n8n_io_ai_ex from '../../Images/AITools/n8n_io_ai_ex.png';
import Zapier from '../../Images/AITools/zapier_ai.png';

export default function AIToolsAIToolEnabled() {
      
    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>AI Tools</h1>
            </header>            
            <main>
                <h2>AI-Enabled Tools</h2>
                <p>&nbsp;</p>

                <table style={{width:'70%'}}>
                    <colgroup>
                    <col span="1" style={{width:'10%'}} />
                    <col span="1" style={{width:'30%'}} />
                    <col span="1" style={{width:'30%'}} />
                    <col span="1" style={{width:'30%'}} />
                    <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td></td>
                            <td style={{align:"center"}}>
                                <table>
                                    <tbody>
                                        <tr><td><img src={MicrosoftEdge} alt="OneNote" border="0" width="32" height="32" /></td></tr>
                                        <tr><td><a target="blank" href="https://www.microsoft.com/en-us/edge/?msockid=348cb6b810986ce205a9a44211ea6d18&form=MA13FJ"><b>Microsoft Edge</b></a></td></tr>
                                        <tr><td>Internet Browser</td></tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style={{align:"center"}}>
                                <table>
                                    <tbody>
                                        <tr><td><img src={Notion}                alt="Notion"            border="0" width="32" height="32" /></td></tr>
                                        <tr><td><a target="blank" href="https://www.notion.so/">                                <b>Notion</b></a></td></tr>
                                        <tr><td>Task Management<br />Notes</td></tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style={{align:"center"}}>
                                <table style={{width:'90%'}}>
                                    <tbody>
                                        <tr><td><img src={n8n_io_ai} alt="n8n" border="0" width="32" height="32" /></td></tr>
                                        <tr><td><a target="blank" href="https://www.n8n.io/"><b>n8n</b></a></td></tr>
                                        <tr><td>Workflow Automation</td></tr>
                                    </tbody>
                                </table>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <p>&nbsp;</p>

                <table style={{width:'70%'}}>
                    <colgroup>
                    <col span="1" style={{width:'10%'}} />
                    <col span="1" style={{width:'30%'}} />
                    <col span="1" style={{width:'30%'}} />
                    <col span="1" style={{width:'30%'}} />
                    <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td></td>
                            <td style={{align:"center"}}>
                                <table style={{width:'90%'}}>
                                    <tbody>
                                        <tr><td><img src={Claude}                alt="Claude"            border="0" width="32" height="32" /></td></tr>
                                        <tr><td><a target="blank" href="https://www.anthropic.com/claude">                      <b>Claude</b></a></td></tr>
                                        <tr><td>Reasoning<br />Vision analysis<br />Code generation<br />Multilingual processing</td></tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style={{align:"center"}}>
                                <table style={{width:'90%'}}>
                                    <tbody>
                                        <tr><td><img src={OneNote} alt="OneNote" border="0" width="32" height="32" /></td></tr>
                                        <tr><td><a target="blank" href="https://www.onenote.com/"><b>OneNote</b></a></td></tr>
                                        <tr><td>Organizational</td></tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style={{align:"center"}}>
                                <table style={{width:'90%'}}>
                                    <tbody>
                                        <tr><td><img src={FeedHive} alt="FeedHive" border="0" width="32" height="32" /></td></tr>
                                        <tr><td><a target="blank" href="https://www.FeedHive.com/"><b>FeedHive</b></a></td></tr>
                                        <tr><td>Social media using AI &amp; automation</td></tr>
                                    </tbody>
                                </table>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>



                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h2>AI-Enabled Tools - Details</h2>
                <p>&nbsp;</p>

                <h3>Productivity & Organization Tools</h3>
                <table style={{width:'90%'}}>
                <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>  
                        <tr>
                            <td><a target="blank" href="https://www.n8n.io/"><b>n8n</b></a></td>
                            <td><img src={n8n_io_ai} alt="Notion" border="0" width="32" height="32" /></td>
                            <td>Workflow automation platform for technical teams. Create <b><u>AI Agents</u></b>.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;&nbsp;&nbsp;<img src={n8n_io_ai_ex} alt="n8n" width="560" height="350" border="0" /></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{paddingBottom:'37px'}}><b><u>n8n is like SQL SSIS, but for AI workflow.</u></b></td>
                        </tr>

                        <tr>
                            <td><a target="blank" href="https://www.FeedHive.com/"><b>FeedHive</b></a></td>
                            <td><img src={FeedHive} alt="FeedHive" border="0" width="32" height="32" /></td>
                            <td>Social media using AI &amp; automation.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{paddingBottom:'37px'}}>
                                AI Chat Assistant<br />
                                AI Performance Prediction<br />
                                Inspiration Templates<br />
                                Instagram Grid Preview<br />
                                Publish to Threads<br />
                                Publish LinkedIn Carousels
                            </td>
                        </tr>

                        <tr>
                            <td><a target="blank" href="https://www.notion.so/"><b>Notion</b></a></td>
                            <td><img src={Notion} alt="Notion" border="0" width="32" height="32" /></td>
                            <td>Notion is an all-in-one platform for efficient teamwork with [notes, tasks &amp; project management]. <br />
                                The AI feature, NotionAI, is a great help when working alone.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;&nbsp;&nbsp;<img src={NotionAIEx1a} alt="Notion" border="0" width="550" height="600" /></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{paddingBottom:'37px'}}><b><u>Notion is FREE &amp; better than OneNote. 
                                &nbsp;&nbsp;Porting from OneNote can be tedious, but worth it.</u></b></td>
                        </tr>

                        <tr>
                            <td><a target="blank" href="https://zapier.com/"><b>Zapier</b></a></td>
                            <td><img src={Zapier} alt="Zapier" border="0" width="32" height="32" /></td>
                            <td>Zapier automates workflows by connecting various web applications.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Zapier enables users to create automated workflows, saving time and reducing repetitive tasks across different apps.</td>
                        </tr>
                        
                        <tr>
                            <td><a target="blank" href="https://www.anthropic.com/claude"><b>Claude</b></a></td>
                            <td><img src={Claude} alt="Claude" border="0" width="32" height="32" /></td>
                            <td>Claude is an AI assistant which uses <b>AI models</b>.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Claude provides reliable &amp; contextually-aware responses:</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;&nbsp;&nbsp;- Advanced reasoning: Performs complex cognitive tasks that go beyond <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;simple pattern recognition or text generation<br /><br />

                                &nbsp;&nbsp;&nbsp;- Vision analysis: Transcribe and analyze almost any static image, <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from handwritten notes &amp; graphs to photographs<br /><br />

                                &nbsp;&nbsp;&nbsp;- Code generation: Start creating websites in HTML and CSS,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;turning images into structured JSON data<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or debugging complex code bases<br /><br />

                                &nbsp;&nbsp;&nbsp;- Multilingual processing: Translate between various languages in real-time,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;practice grammar, or create multi-lingual content</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td><b><u>As of March, 2025, Claude's knowledge cutoff is October 2024.</u></b></td>
                        </tr>

                    </tbody>
                </table>

                <h3>Copilot extension-enabled tools</h3>
                <table style={{width:'90%'}}>
                <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td><a target="blank" href="https://www.microsoft.com/en-us/edge/?msockid=348cb6b810986ce205a9a44211ea6d18&form=MA13FJ"><b>Microsoft Edge</b></a></td>
                            <td><img src={MicrosoftEdge} alt="OneNote" border="0" width="32" height="32" /></td>
                            <td>Microsoft Edge is an Internet browser.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Integrate Edge with <b><u>Copilot</u></b> for quick &amp; easy suggestions.<br />
                                Edge will have the Copilot icon along the right scrollbar.<br />
                                Click on it and Copilot opens in a sidebar:</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{padding:'13px 0px 37px 40px'}}>
                                <img src={MicrosoftEdge_Copilot} alt="MicrosoftEdge_Copilot" width="350" height="460" border="0" /></td>
                        </tr>
                        
                        <tr>
                            <td><a target="blank" href="https://www.onenote.com/"><b>OneNote</b></a></td>
                            <td><img src={OneNote} alt="OneNote" border="0" width="32" height="32" /></td>
                            <td>OneNote is great for keeping notebooks to organize your notes.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{padding:'13px 0px 37px 40px'}}>
                                <img src={OneNoteEx} alt="OneNoteEx" width="270" height="420" border="0" /></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{paddingBottom:'37px'}}><b><u>OneNote is FREE. As an example, you might have 10 tabs of 1-15 pages each.</u></b></td>
                        </tr>
                        
                    </tbody>
                </table>

                <h3>Research & Information Retrieval</h3>
                <table style={{width:'90%'}}>
                <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td><a target="blank" href="https://www.perplexity.ai/"><b>Perplexity</b></a></td>
                            <td><img src={Perplexity} alt="Perplexity" border="0" width="32" height="32" /></td>
                            <td>Perplexity is an AI-powered search engine that provides answers to queries.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Perplexity combines information retrieval and conversational AI to deliver concise answers to user questions, enhancing the search experience.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{paddingBottom:'37px'}}><b><u>Perplexity is FREE. Very rich feature set!</u></b></td>
                        </tr>

                        <tr>
                            <td><a target="blank" href="https://www.popai.pro/"><b>PopAi</b></a></td>
                            <td><img src={PopAi} alt="PopAi" border="0" width="32" height="32" /></td>
                            <td>PopAi offers AI solutions for analytics and consumer insights.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>PopAi helps organizations analyze consumer behavior and market trends using advanced AI algorithms.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Categories:<br /><br />
                                &nbsp;&nbsp;&nbsp;- AI ChatPDF<br />
                                &nbsp;&nbsp;&nbsp;- AI Presentation<br />
                                &nbsp;&nbsp;&nbsp;- AI Writer<br />
                                &nbsp;&nbsp;&nbsp;- AI Pitch Decks<br />
                                &nbsp;&nbsp;&nbsp;- AI Paraphraser<br />
                                &nbsp;&nbsp;&nbsp;- AI Image<br />
                                &nbsp;&nbsp;&nbsp;- AI Video</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{paddingBottom:'23px'}}><b><u>FREE: Limited per category</u></b></td>
                        </tr>

                    </tbody>
                </table>
                </main>
        </div>
    )
}