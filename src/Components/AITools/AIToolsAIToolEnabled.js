import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/OldManInDingyNoBG.png';

import AIVA from '../../Images/AITools/aiva_ai.png';
import Artflow from '../../Images/AITools/artflow_ai.png';
//import BRIA from '../../Images/AITools/bria_ai.png';
import ChatGPT from '../../Images/AITools/chatgpt.png';
import Chatfuel from '../../Images/AITools/chatfuel_ai.png';
import Claude from '../../Images/AITools/claude_ai.png';
import Conversica from '../../Images/AITools/conversica_ai.png';
import Crypko from '../../Images/AITools/crypko_ai.png';
import DALL_E3 from '../../Images/AITools/dall_e_3_ai.png';
import Excel from '../../Images/AITools/Excel_ai.png';
import Fliki from '../../Images/AITools/fliki_ai.png';
//import Gemini from '../../Images/AITools/gemini_ai.png';
//import GoogleAI from '../../Images/AITools/google_ai.png';
// import GoogleGemini from '../../Images/AITools/google-gemini.png';
import Grammarly from '../../Images/AITools/grammarly_ai.png';
//import HeyGen from '../../Images/AITools/heygen_ai.png';
import Invideo from '../../Images/AITools/invideo_ai.png';
import Jasper from '../../Images/AITools/jasper_ai.png';
import Knowji from '../../Images/AITools/knowji_ai.png';
import Krisp from '../../Images/AITools/krisp_ai.png';
import Copilot from '../../Images/AITools/copilot_ai.png';
import MicrosoftEdge from '../../Images/AITools/MicrosoftEdge_ai.png';
import MicrosoftEdge_Copilot from '../../Images/AITools/MicrosoftEdge_Copilot.png';
import MidJourney from '../../Images/AITools/Midjourney_ai.png';
import NiteCafe from '../../Images/AITools/nitecafe_ai.png';
import NiteCafeOldManInDingy from '../../Images/AITools/OldManInADingyNightCafe.jpg';
import Notion from '../../Images/AITools/notion_ai.png';
//import Numerous from '../../Images/AITools/numerous_ai.png';
//import OpenAIPlayground from '../../Images/AITools/openai-playground_ai.png';
//import OtterAI from '../../Images/AITools/otter-ai_ai.png';
import OneNote from '../../Images/AITools/oneNote_ai.png';
import OneNoteEx from '../../Images/AITools/oneNote_ex.png';
import Perplexity from '../../Images/AITools/perplexity_ai.png';
import PopAi from '../../Images/AITools/popai_ai.png';
//import Quill from '../../Images/AITools/quill_ai.png';
import Runway from '../../Images/AITools/runway_ai.png';
import SecondNature from '../../Images/AITools/secondnature_ai.png';
import SoulMachines from '../../Images/AITools/soul_machines_ai.png';
import SoulMachinesEx from '../../Images/AITools/soul_machines_ex.png';
import Vue from '../../Images/AITools/vue_ai.png';
import WonderDynamics from '../../Images/AITools/wonderdynamics_ai.png';
import Wordtune from '../../Images/AITools/wordtune_ai.png';
import Writesonic from '../../Images/AITools/writesonic_ai.png';
import Zapier from '../../Images/AITools/zapier_ai.png';
import MetaAI from '../../Images/AITools/meta_ai.png';


export default function AIToolsAIToolEnabled() {
      
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '14%', 
                      backgroundPosition: 'right top', backgroundRepeat: "no-repeat" }}>
            <div style={{opacity: 1.0 }}>
                <TopBar/>

                <h1>AI Tools</h1>

                <p>&nbsp;</p>
                <h2>Copilot-Enabled Tools</h2>
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
                                        <tr><td><img src={Excel} alt="Excel" border="0" width="32" height="32" /></td></tr>
                                        <tr><td><a target="blank" href="https://www.microsoft.com/en-us/microsoft-365/excel/"><b>Excel</b></a></td></tr>
                                        <tr><td>Data</td></tr>
                                    </tbody>
                                </table>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>



                <p>&nbsp;</p>
                <h2>Copilot-Enabled Tools - Details</h2>

                <h3>Chatbots & Conversational AI</h3>

                <table style={{width:'90%'}}>
                    <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td><a target="blank" href="https://chat.openai.com/"><b>ChatGPT</b></a></td>
                            <td><img src={ChatGPT} alt="ChatGPT" border="0" width="32" height="32" /></td>
                            <td>ChatGPT is an AI language model that can engage in conversations and answer questions.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>ChatGPT can be used for various applications including customer support, content creation, and educational purposes.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{paddingBottom:'23px'}}><b><u>~50 FREE uses. I have 23 remaining.</u></b></td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://chatfuel.com/"><b>Chatfuel</b></a></td>
                            <td><img src={Chatfuel} alt="Chatfuel" border="0" width="32" height="32" /></td>
                            <td>Chatfuel is a no-code chatbot building platform for: <br />
                                &nbsp;&nbsp;&nbsp;- Facebook Messenger <br />
                                &nbsp;&nbsp;&nbsp;- Instagram <br />
                                &nbsp;&nbsp;&nbsp;- WhatsApp <br />
                                &nbsp;&nbsp;&nbsp;- web widgets</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td><b>Chatbots</b>  are created &amp; managed for automating social media <b>customer interactions</b>.</td>
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
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
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
                            <td><a target="blank" href="https://www.conversica.com/"><b>Conversica</b></a></td>
                            <td><img src={Conversica} alt="Conversica" border="0" width="32" height="32" /></td>
                            <td>Conversica provides AI-driven sales assistants that engage leads via email.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Conversica automates follow-ups with potential customers, helping sales teams increase engagement and conversions.</td>
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

                <h3>Productivity & Organization Tools</h3>
                <table style={{width:'90%'}}>
                <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td><a target="blank" href="https://www.notion.so/"><b>Notion</b></a></td>
                            <td><img src={Notion} alt="Notion" border="0" width="32" height="32" /></td>
                            <td>Notion is an all-in-one workspace for notes, tasks, and project management.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Notion combines note-taking, task management &amp; collaboration features into 1 platform, allowing teams to work efficiently.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{paddingBottom:'23px'}}><b><u>Notion is FREE &amp; better than OneNote. <br />
                                                               If you have used OneNote for years, <br />
                                                               porting to Notion can be tedious.</u></b></td>
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
                            <td style={{padding:'13px 0px 37px 40px'}}><img src={MicrosoftEdge_Copilot} alt="MicrosoftEdge_Copilot" border="0" width="320" height="400" /></td>
                        </tr>
                        
                        <tr>
                            <td><a target="blank" href="https://www.onenote.com/"><b>OneNote</b></a></td>
                            <td><img src={OneNote} alt="OneNote" border="0" width="32" height="32" /></td>
                            <td>OneNote is great for keeping notebooks to organize your notes.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td><b><u>OneNote is FREE. As an example, you might have 10 tabs of 1-15 pages each.</u></b></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{padding:'13px 0px 37px 40px'}}><img src={OneNoteEx} alt="OneNoteEx" border="0" width="270" height="400" /></td>
                        </tr>
                        
                    </tbody>
                </table>
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
