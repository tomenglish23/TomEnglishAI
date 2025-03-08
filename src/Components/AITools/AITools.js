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


export default function AITools() {
      
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '14%', 
                      backgroundPosition: 'right top', backgroundRepeat: "no-repeat" }}>
            <div style={{opacity: 1.0 }}>
                <TopBar/>

                <h1>AI Tools by Category</h1>


                <p>&nbsp;</p>
                <h2>Commonly Used</h2>
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
                                        <tr><td><img src={Copilot}               alt="Microsoft Copilot" border="0" width="32" height="32" /></td></tr>
                                        <tr><td><a target="blank" href="https://www.microsoft.com/en-us/microsoft-365/copilot"> <b>Copilot</b></a></td></tr>
                                        <tr><td>Great for Software<br />Productivity tools integration</td></tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style={{align:"center"}}>
                                <table style={{width:'90%'}}>
                                    <tbody>
                                        <tr><td><img src={ChatGPT}               alt="ChatGPT"           border="0" width="32" height="32" /></td></tr>
                                        <tr><td><a target="blank" href="https://chat.openai.com/">                              <b>ChatGPT</b></a></td></tr>
                                        <tr><td>Narrative</td></tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style={{align:"center"}}>
                                <table style={{width:'90%'}}>
                                    <tbody>
                                        <tr><td><img src={MetaAI}                alt="Meta AI"           border="0" width="32" height="32" /></td></tr>
                                        <tr><td><a target="blank" href="https://ai.meta.com/">                                  <b>Meta AI</b></a></td></tr>
                                        <tr><td>Superior Narrative</td></tr>
                                    </tbody>
                                </table>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>



                <p>&nbsp;</p>
                <h2>Tools by Category</h2>

                <h3>Conversational AI</h3>
                <table style={{width:'90%'}}>
                    <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>

                        <tr>
                            <td><a target="blank" href="https://ai.meta.com/"><b>Meta AI</b></a></td>
                            <td><img src={MetaAI} alt="Meta AI" border="0" width="32" height="32" /></td>
                            <td>Meta AI focuses on advancing AI technologies and research at Meta.</td>
                        </tr>
                        <tr>
                        <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Meta AI is dedicated to developing innovative AI solutions that enhance communication and social interaction across its platforms.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{paddingBottom:'23px'}}><b><u>Meta AI is better than ChatGPT for narrative assistance.</u></b></td>
                        </tr>

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

                    </tbody>
                </table>

                <h3>AI for Assistance &amp; Personalization</h3>
                <table style={{width:'90%'}}>
                <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>
                    <tr>
                            <td><a target="blank" href="https://www.microsoft.com/en-us/microsoft-365/copilot"><b>Copilot</b></a></td>
                            <td><img src={Copilot} alt="Microsoft Copilot" border="0" width="32" height="32" /></td>
                            <td>Microsoft <b><u>Copilot</u></b> integrates AI to assist in productivity applications.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Copilot enhances applications like Word, Excel &amp; OneNote by suggesting content and automating repetitive tasks.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td><b><u>I add Copilot to many of my tools. It is my coding assistant!</u></b>.</td>
                        </tr>
                        
                        <tr>
                            <td><a target="blank" href="https://knowji.com/"><b>Knowji</b></a></td>
                            <td><img src={Knowji} alt="Knowji" border="0" width="32" height="32" /></td>
                            <td>Knowji is an AI-powered language learning platform that enhances vocabulary retention.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Knowji uses spaced repetition and interactive exercises to help users effectively learn and remember new words.</td>
                        </tr>

                        <tr>
                            <td><a target="blank" href="https://krisp.ai/"><b>Krisp</b></a></td>
                            <td><img src={Krisp} alt="Krisp" border="0" width="32" height="32" /></td>
                            <td>Krisp removes background noise during calls to enhance audio quality.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Krisp works with any communication app, providing a clear audio experience for both parties in a conversation.</td>
                        </tr>

                        <tr>
                            <td><a target="blank" href="https://soulmachines.com/"><b>Soul Machines</b></a></td>
                            <td><img src={SoulMachines} alt="Soul Machines" border="0" width="32" height="32" /></td>
                            <td>Soul Machines develops AI-driven digital humans for customer interaction.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'23px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Soul Machines creates lifelike avatars that engage with users in a human-like manner across various applications.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{padding:'13px 0px 37px 40px'}}><img src={SoulMachinesEx} alt="Soul Machines" border="0" width="200" height="260" /></td>
                        </tr>

                    </tbody>
                </table>

                <h3>Writing & Content Generation</h3>
                <table style={{width:'90%'}}>
                <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td><a target="blank" href="https://www.grammarly.com/"><b>Grammarly</b></a></td>
                            <td><img src={Grammarly} alt="Grammarly" border="0" width="32" height="32" /></td>
                            <td>Grammarly is an AI writing assistant that helps improve grammar and style.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Grammarly checks for spelling and grammatical errors, and provides suggestions for improving writing clarity and engagement.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{paddingBottom:'23px'}}><b><u>23 FREE suggestions</u></b></td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://www.jasper.ai/"><b>Jasper</b></a></td>
                            <td><img src={Jasper} alt="Jasper" border="0" width="32" height="32" /></td>
                            <td>Jasper is an AI writing assistant designed to help create high-quality content.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Jasper can generate ad copy, blog posts, and social media content based on user prompts and guidelines.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td><b><u>$39+/month</u></b></td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://www.wordtune.com/"><b>Wordtune</b></a></td>
                            <td><img src={Wordtune} alt="Wordtune" border="0" width="32" height="32" /></td>
                            <td>Wordtune is a writing assistant that helps users rephrase and improve text.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Wordtune offers suggestions for rewriting sentences to enhance clarity and impact, aiding users in their writing process.</td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://writesonic.com/"><b>Writesonic</b></a></td>
                            <td><img src={Writesonic} alt="Writesonic" border="0" width="32" height="32" /></td>
                            <td>Writesonic is an AI writing tool that generates marketing content and articles.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Writesonic helps users create a variety of content, from blog posts to ad copy, using templates and AI capabilities.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Development & Programming Tools</h3>
                <table style={{width:'90%'}}>
                <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td><a target="blank" href="https://vuejs.org/"><b>Vue</b></a></td>
                            <td><img src={Vue} alt="Vue" border="0" width="32" height="32" /></td>
                            <td>Vue is a progressive JavaScript framework for building user interfaces.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Vue provides a flexible and performant framework for developing interactive web applications, making it popular among developers.</td>
                        </tr>

                    </tbody>
                </table>

                <h3 style={{backgroundColor: 'coral'}}>Chatbots</h3>
                <table style={{width:'90%'}}>
                    <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td><a target="blank" href="https://chatfuel.com/"><b>Chatfuel</b></a></td>
                            <td><img src={Chatfuel} alt="Chatfuel" border="0" width="32" height="32" /></td>
                            <td>Chatfuel is a no-code <b><u>chatbot</u></b> building platform for: <br />
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
                     </tbody>
                </table>

                <h3 style={{backgroundColor: 'coral'}}>AI Sales-Related</h3>
                <table style={{width:'90%'}}>
                    <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>
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

                        <tr>
                            <td><a target="blank" href="https://secondnature.ai/"><b>SecondNature</b></a></td>
                            <td><img src={SecondNature} alt="SecondNature" border="0" width="32" height="32" /></td>
                            <td>SecondNature provides AI-driven training simulations for sales and customer interactions.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>SecondNature helps organizations train their employees through realistic role-playing scenarios using AI technology.</td>
                        </tr>
 
                    </tbody>
                </table>

                <h3 style={{backgroundColor: 'gold'}}>Music & Art Generation</h3>
                <table style={{width:'90%'}}>
                <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td><a target="blank" href="https://www.aiva.ai/"><b>AIVA</b></a></td>
                            <td><img src={AIVA} alt="AIVA" border="0" width="32" height="32" /></td>
                            <td>AIVA is an AI music composition tool that helps create original music tracks.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>AIVA allows users to compose music in various styles and genres, providing tools for both amateur and professional musicians.</td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://artflow.ai/"><b>Artflow</b></a></td>
                            <td><img src={Artflow} alt="Artflow" border="0" width="32" height="32" /></td>
                            <td>Artflow uses AI to create unique artworks and illustrations based on user input.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Artflow allows users to create and customize artwork by generating images from text descriptions or modifying existing images.</td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://crypko.ai/"><b>Crypko</b></a></td>
                            <td><img src={Crypko} alt="Crypko" border="0" width="32" height="32" /></td>
                            <td>Crypko generates anime-style characters using AI technology.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Crypko allows users to create unique characters for games, animations, and other creative projects, leveraging deep learning techniques.</td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://openai.com/dall-e-3"><b>DALL-E 3</b></a></td>
                            <td><img src={DALL_E3} alt="DALL-E 3" border="0" width="32" height="32" /></td>
                            <td>DALL-E 3 is an AI model that creates images from textual descriptions.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>DALL-E 3 enhances the capabilities of its predecessor by generating more detailed and contextually relevant images from user prompts.</td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://www.midjourney.com/"><b>Midjourney</b></a></td>
                            <td><img src={MidJourney} alt="Midjourney" border="0" width="32" height="32" /></td>
                            <td>Midjourney creates stunning AI-generated images based on text prompts.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Midjourney is known for its artistic style and can produce a wide range of visuals from abstract to realistic images.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td><b><u>$10+/month</u></b></td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://nightcafe.studio/"><b>NightCafe</b></a></td>
                            <td>{<img src={NiteCafe} alt="NightCafe" border="0" width="32" height="32" />}</td>
                            <td>NiteCafe uses AI algorithms to generate unique artworks from text descriptions.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>NightCafe offers various styles and options for users to create visually appealing art pieces with ease.</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{paddingBottom:'23px'}}><b><u>3 FREE uses</u></b></td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>I prompted NightCafe: "Old man sitting in the rear of a dingy with a pipe headed across the bay toward a lighthouse", and it gave me this:</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;&nbsp;&nbsp;<img src={NiteCafeOldManInDingy} alt="NightCafe" border="0" width="300" height="350" /></td>
                        </tr>
                    </tbody>
                </table>


                <h3 style={{backgroundColor: 'gold'}}>AI Tools for Video & Multimedia</h3>
                <table style={{width:'90%'}}>
                <colgroup>
                        <col span="1" style={{width:'12%'}} />
                        <col span="1" style={{width:'4%'}} />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td><a target="blank" href="https://fliki.ai/"><b>Fliki</b></a></td>
                            <td><img src={Fliki} alt="Fliki" border="0" width="32" height="32" /></td>
                            <td>Fliki turns text into videos using AI, making video creation easier.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Fliki allows users to create engaging videos quickly by converting scripts or articles into video format with visuals and voiceovers.</td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://invideo.io/"><b>Invideo</b></a></td>
                            <td><img src={Invideo} alt="Invideo" border="0" width="32" height="32" /></td>
                            <td>Invideo is a video creation tool that uses templates to streamline video production.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Invideo provides users with a wide range of templates for creating professional-quality videos for marketing and social media.</td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://runwayml.com/"><b>Runway</b></a></td>
                            <td><img src={Runway} alt="Runway" border="0" width="32" height="32" /></td>
                            <td>Runway offers AI tools for video editing and creative content creation.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Runway provides innovative editing solutions, including AI-driven features for enhancing videos and imagery.</td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://wonderdynamics.com/"><b>Wonder Dynamics</b></a></td>
                            <td><img src={WonderDynamics} alt="Wonder Dynamics" border="0" width="32" height="32" /></td>
                            <td>Wonder Dynamics combines AI and live-action for creating dynamic content.</td>
                        </tr>
                        <tr>
                            <td style={{paddingBottom:'37px'}}>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Wonder Dynamics provides tools to merge AI-generated characters with live-action footage, enhancing video production quality.</td>
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
