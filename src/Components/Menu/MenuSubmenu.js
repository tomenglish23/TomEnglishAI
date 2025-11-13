import React from "react";
import '../CSS/MenuSubmenu.css';

// Path: src\Components\Menu\MenuSubmenu.js

export default function MenuSubmenu() {
 
    /* Need images of each CP */

    // const publicUrl = process.env.PUBLIC_URL;
    const SP = "\u00A0"; // Non-breaking space
    const DO = "x"; // Placeholder for TODO items

  return (
<div>
    <ul id="menu" className='blockmenu'>
        <table className='blockmenu'>
            <colgroup>
                <col span="1" />
                <col span="1" />
                <col span="1" />
                <col span="1" />
                <col span="1"  />
            </colgroup>
            <tbody>
                <tr>
                    <td style={{paddingTop: 10}}>
                        <li><a href="\TomEnglishAI\AIConsultant\AIChatbots">CHATBOTS</a>
                            <ul className="sub">
                                <li><div className="li_spacer"></div></li>
                                <li><a href="\TomEnglishAI\AIConsultant\AIChatbots">{SP}AI Bots: Chatbots{SP}</a></li>
                                <li><div className="li_spacer"></div></li>
                            </ul>
                        </li>
                    </td>
                    <td style={{paddingTop: 10}}>
                        <li><a href="\TomEnglishAI\AIVideos\AIVideoTEAIVideoMaker">VIDEOS</a>
                            <ul className="sub">
                                <li><div className="li_spacer"></div></li>
                                <li><a href="\TomEnglishAI\AIVideos\AIVideoTEAIVideoMaker">{SP}Videos: Tom English AI: {SP}TEAIVideoMaker{SP}</a></li>
                                <li><div className="li_spacer"></div></li>
                                <li><a href="\TomEnglishAI\AIVideos\AIVideos">{SP}Videos: Fun Tools{SP}</a></li>
                                <li><a href="\TomEnglishAI\AIVideos\AIVideoCapCut">{SP}Videos: IDE: {SP}{SP}{SP}CapCut{SP}</a></li>
                                <li><a href="\TomEnglishAI\AIVideos\AIVideoClipchamp">{SP}Videos: IDE: {SP}{SP}{SP}Clipchamp{SP}</a></li>

                                <li><div className="li_spacer"></div></li>
                                <li><a href="\TomEnglishAI\AIVideos\FFmpeg">{SP}Videos: FFMPEG{SP}</a></li>
                                <li><a href="\TomEnglishAI\AIVideos\FFmpegImagesAdd">{SP}Videos: FFMPEG: Images: {SP}{SP}{SP}{SP}{SP}{SP}Add{SP}</a></li>
                                <li><a href="\TomEnglishAI\AIVideos\FFmpegTextTTS">{SP}Videos: FFMPEG: Text: {SP}{SP}{SP}{SP}{SP}{SP}{SP}{SP}TTS{SP}</a></li>

                                <li><div className="li_spacer"></div></li>
                            </ul>
                        </li>
                    </td>
                    <td style={{paddingTop: 10}}>
                        <li><a href="\TomEnglishAI\AIConsultant\AIConsultant">AI Consultant</a>
                            <ul className="sub">
                                <li><div className="li_spacer"></div></li>
                                <li><a href="\TomEnglishAI\AIConsultant\AIConsultant">{SP}AI Consultant{SP}</a></li>
                                <li><a href="\TomEnglishAI\AIConsultant\AICustomGPTs">{SP}AI Consultant: {SP}Custom GPTs{SP}</a></li>
                                <li><div className="li_spacer"></div></li>
                            </ul>
                        </li>
                    </td>
                    <td style={{paddingTop: 10}}>
                        <li><a href="\TomEnglishAI\AIConsultant\AIGPTs">GPTs &amp; Agents</a>
                            <ul className="sub">
                                <li><div className="li_spacer"></div></li>
                                <li><a href="\TomEnglishAI\AIConsultant\AIGPTs">{SP}AI GPTs{SP}</a></li>
                                <li><a href="\TomEnglishAI\AIConsultant\Prompts">{SP}AI GPTs: Prompts for a Replit Voice Agent {SP}</a></li>
                                <li><div className="li_spacer"></div></li>
                                <li><a href="\TomEnglishAI\AIConsultant\N8N">{DO}AI Agents: Workflows: N8N{SP}</a></li>
                                <li><a href="\TomEnglishAI\AIConsultant\Telegram">{SP}AI Agents: Workflows: Telegram{SP}</a></li>
                                <li><div className="li_spacer"></div></li>
                            </ul>
                        </li>
                    </td>
                    <td style={{paddingTop: 10}}>
                        <li><a href="\TomEnglishAI\AIConsultant\AIStocksMachineLearning">ML</a>
                            <ul className="sub">
                                <li><div className="li_spacer"></div></li>
                                <li><a href="\TomEnglishAI\AIConsultant\AIStocksMachineLearning">{SP}Machine Learning: Linear Regression Example{SP}</a></li>
                                <li><a href="\TomEnglishAI\AIConsultant\AITechnologies">{SP}Machine Learning: Technology List{SP}</a></li>

                                <li><div className="li_spacer"></div></li>
                            </ul>
                        </li>
                    </td>
                    <td style={{paddingTop: 10}}>
                        <li><a href="\TomEnglishAI\TomEnglish\About">About</a>
                            <ul className="sub">
                                <li><div className="li_spacer"></div></li>
                                <li><a href="\TomEnglishAI\TomEnglish\Home">
                                    {SP}Home{SP}</a></li>
                                <li><div className="li_spacer"></div></li>
                                <li><a href="\TomEnglishAI\TomEnglish\About">
                                    {SP}About{SP}</a></li>
                                <li><a href="\TomEnglishAI\TomEnglish\TomEnglishAIResume">
                                    {SP}About: Tom English Resume{SP}</a></li>
                                <li><a href="\TomEnglishAI\TomEnglish\HowAIEvolved">
                                    {SP}About: How AI evolved for me{SP}</a></li>
                                <li><div className="li_spacer"></div></li>
                            </ul>
                        </li>
                    </td>
                    <td style={{paddingTop: 10}}>
                        <li><a href="\TomEnglishAI\AIArchitecture\AIHowTo">FAQs</a>
                            <ul className="sub">
                                <li><div className="li_spacer"></div></li>
                                <li><a href="\TomEnglishAI\AIArchitecture\AIHowTo">
                                    {SP}Knowledge: Quick Reference{SP}</a></li>
                                <li><a href="\TomEnglishAI\TomEnglish\AWSDictionary">
                                    {SP}Knowledge: AWS Dictionary{SP}</a></li>
                                <li><div className="li_spacer"></div></li>
                            </ul>
                        </li>
                    </td>
                    <td style={{paddingTop: 10}}>
                        <li><a href="\TomEnglishAI\AIStocks\AIStocksCandlesticks">Stocks</a> 
                            <ul className="sub">

                                <li><div className="li_spacer"></div></li>
                                <li><a href="\TomEnglishAI\AIArchitecture\AIArchitecture">
                                    {SP}Stock Software Architecture{SP}</a></li>
                                <li><a href="\TomEnglishAI\AIStocks\AIStocksAPIs">
                                    {SP}Console Apps: Stock APIs{SP}</a></li>

                                <li><div className="li_spacer"></div></li>
                                <li><a href="\TomEnglishAI\AIStocks\AIStocksCandlesticks">
                                    {SP}On Chart: Candlesticks{SP}</a></li>
                                <li><a href="\TomEnglishAI\AIStocks\AIStocks5MinCandlesticks">
                                    {SP}On Chart: 5-Min Candlesticks{SP}</a></li>
                                <li><a href="\TomEnglishAI\AIStocks\AIStocksPrimitiveAlgorithms">
                                    {SP}On Chart: Primitive Algorithms{SP}</a></li>
                                <li><a href="\TomEnglishAI\AIStocks\AIStocksTimeFrames">
                                    {SP}On Chart: TimeFrames{SP}</a></li>

                                <li><div className="li_spacer"></div></li>
                                <li><a href="\TomEnglishAI\AIStocks\AIStocksExternalFactors">
                                    {SP}External: External Factors{SP}</a></li>
                                <li><a href="\TomEnglishAI\AIStocks\AIStocksIndexes">
                                    {SP}External: Indexes{SP}</a></li>
                                <li><a href="\TomEnglishAI\AIStocks\AIStocksScreenScrapers">
                                    {SP}External: Screen Scrapers{SP}</a></li>

                                <li><div className="li_spacer"></div></li>
                            </ul>
                        </li>
                    </td>
                </tr>
            </tbody>
        </table>
    </ul>
</div>  
    );
}
