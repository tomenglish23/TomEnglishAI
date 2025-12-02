import React from "react";
import '../CSS/MenuSubmenu.css';

// Path: src\Components\Menu\MenuSubmenu.js

export default function MenuSubmenu() {
 
    /* Need images of each CP */

    // const publicUrl = process.env.PUBLIC_URL;
    const SP = "\u00A0"; // Non-breaking space
    // const DO = "x"; // Placeholder for TODO items

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
                        <li style={{width: '100px'}}><a href="\TomEnglish\Home">Home</a></li>
                    </td>
                    <td style={{paddingTop: 10}}>
                        <li style={{width: '150px'}}><a href="\AIVideos\TEAIVideoMaker">TEAIVideoMaker</a>
                        </li>
                    </td>
                    <td style={{paddingTop: 10}}>
                        <li style={{width: '150px'}}><a href="\AIVideos\TEAIMP3Maker">TEAIMP3Maker</a>
                        </li>
                    </td>
                    <td style={{paddingTop: 10}}>
                        <li style={{width: '150px'}}><a href="\AIConsultant\TEAIChatbot">TEAIChatbot</a>
                        </li>
                    </td>
                    <td style={{paddingTop: 10}}>
                        <li style={{width: '150px'}}><a href="\AIConsultant\AIConsultant">AI Consultant</a>
                            <ul className="sub">
                                <li><div className="li_spacery">AI Consultant</div></li>
                                <li><a href="\AIConsultant\AIConsultant">{SP}AI Consultant{SP}</a></li>
                                <li><a href="\AIConsultant\AICustomGPTs">{SP}AI Consultant: {SP}Custom GPTs{SP}</a></li>
                                <li><div className="li_spacery">Videos</div></li>
                                <li><a href="\AIVideos\AIVideos">{SP}Videos: Fun Tools{SP}</a></li>
                                <li><a href="\AIVideos\AIVideoCapCut">{SP}Videos: IDE: {SP}CapCut{SP}</a></li>
                                <li><a href="\AIVideos\AIVideoClipchamp">{SP}Videos: IDE: {SP}Clipchamp{SP}</a></li>
                                <li><div className="li_spacery">FFmpeg</div></li>
                                <li><a href="\AIVideos\FFmpeg">{SP}Videos: FFMPEG{SP}</a></li>
                                <li><a href="\AIVideos\FFmpegImagesAdd">{SP}Videos: FFMPEG: Images: {SP}Add{SP}</a></li>
                                <li><a href="\AIVideos\FFmpegTextTTS">{SP}Videos: FFMPEG: Text: {SP}{SP}{SP}TTS{SP}</a></li>
                                <li><div className="li_spacery">GPTs and Prompts</div></li>
                                <li><a href="\AIConsultant\AIGPTs">{SP}AI GPTs{SP}</a></li>
                                <li><a href="\AIConsultant\Prompts">{SP}Replit Voice Agent Prompts {SP}</a></li>
                                <li><div className="li_spacery">N8N and Telegram: No Docs</div></li>
                                {/* <li><a href="\AIConsultant\N8N">{DO}AI Agents: Workflows: N8N{SP}</a></li> */}
                                <li><a href="\AIConsultant\Telegram">{SP}AI Agents: Workflows: Telegram{SP}</a></li>
                                <li><div className="li_spacery">Microsoft Machine Learning</div></li>
                                <li><a href="\AIConsultant\AIStocksMachineLearning">{SP}ML: Linear Regression {SP}</a></li>
                                <li><a href="\AIConsultant\AITechnologies">{SP}ML: Technology List{SP}</a></li>
                                <li><div className="li_spacerw">Stock Architecture</div></li>
                                <li><a href="\AIArchitecture\AIArchitecture">
                                    {SP}Stock Software Architecture{SP}</a></li>
                                <li><div className="li_spacerw">Stock APIs</div></li>
                                <li><a href="\AIStocks\AIStocksAPIs">
                                    {SP}Console Apps: Stock APIs{SP}</a></li>
                                <li><div className="li_spacerw">Stocks - Candles</div></li>
                                <li><a href="\AIStocks\AIStocksCandlesticks">
                                    {SP}On Chart: Candlesticks{SP}</a></li>
                                <li><a href="\AIStocks\AIStocks5MinCandlesticks">
                                    {SP}On Chart: 5-Min Candlesticks{SP}</a></li>
                                <li><a href="\AIStocks\AIStocksPrimitiveAlgorithms">
                                    {SP}On Chart: Primitive Algorithms{SP}</a></li>
                                <li><a href="\AIStocks\AIStocksTimeFrames">
                                    {SP}On Chart: TimeFrames{SP}</a></li>
                                <li><div className="li_spacerw">Stocks - External</div></li>
                                <li><a href="\AIStocks\AIStocksExternalFactors">
                                    {SP}External: External Factors{SP}</a></li>
                                <li><a href="\AIStocks\AIStocksIndexes">
                                    {SP}External: Indexes{SP}</a></li>
                                <li><a href="\AIStocks\AIStocksScreenScrapers">
                                    {SP}External: Screen Scrapers{SP}</a></li>
                                <li><div className="li_spacery">About</div></li>                                
                                <li><a href="\TomEnglish\About">
                                    {SP}About{SP}</a></li>
                                <li><a href="\TomEnglish\TomEnglishAIResume">
                                    {SP}About: Tom English Resume{SP}</a></li>
                                <li><a href="\TomEnglish\HowAIEvolved">
                                    {SP}About: How AI evolved for me{SP}</a></li>
                                <li><div className="li_spacery">Knowledge</div></li>
                                <li><a href="\AIArchitecture\AIHowTo">
                                    {SP}Knowledge: Quick Reference{SP}</a></li>
                                <li><a href="\TomEnglish\AWSDictionary">
                                    {SP}Knowledge: AWS Dictionary{SP}</a></li>
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
