import React from "react";
import '../CSS/MenuSubmenu.css';

// Path: src\Components\Menu\MenuSubmenu.js

export default function MenuSubmenu() {
 
    /* Need images of each CP */

    // const publicUrl = process.env.PUBLIC_URL;

  return (
<div>
    <ul id="menu">
        <li><a href="\TomEnglishAI\TomEnglish\Home"                      >Home</a></li>
        <li><a href="\TomEnglishAI\AIConsultant\AIConsultant"            >AI Consultant</a>
            <ul className="sub">
                <li>&nbsp;</li>
                <li><a href="\TomEnglishAI\AIConsultant\AIConsultant"              >AI Consultant</a></li>
                <li>&nbsp;</li>
                <li><a href="\TomEnglishAI\AIConsultant\AIGPTs"                    >AI GPTs     </a></li>
                <li><a href="\TomEnglishAI\AIConsultant\Prompts"                   >AI GPTs   - Prompt Engineering</a></li>
                <li><a href="\TomEnglishAI\AIConsultant\AICustomGPTs"              >AI GPTs   - Custom GPTs</a></li>
                <li>&nbsp;</li>
                <li><a href="\TomEnglishAI\AIConsultant\AIChatbots"                >AI Bots   - Chatbots</a></li>
                <li>&nbsp;</li>
                <li><a href="\TomEnglishAI\AIConsultant\AIAgents"                  >AI Agents   </a></li>
                <li><a href="\TomEnglishAI\AIConsultant\AIVoiceAgents"             >AI Agents - Voice Agents</a></li>
                <li><a href="\TomEnglishAI\AIConsultant\N8N"                       >AI Workflows - N8N</a></li>
                <li><a href="\TomEnglishAI\AIConsultant\Make"                      >AI Workflows - Make</a></li>
                <li><a href="\TomEnglishAI\AIConsultant\Telegram"                  >AI Workflows - Telegram</a></li>
                <li>&nbsp;</li>
                <li><a href="\TomEnglishAI\AIConsultant\AIWebsite"                 >AI Website Tools </a></li>
                <li><a href="\TomEnglishAI\AIConsultant\AIWebsiteHTTrack"          >AI Website Tools - HTTrack</a></li>
                <li><a href="\TomEnglishAI\AIConsultant\AIWebsiteHuggingFace"      >AI Website Tools - HuggingFace</a></li>
                <li>&nbsp;</li>
                <li><a href="\TomEnglishAI\AIVideos\AIVideos"                      >Videos </a></li>
                <li><a href="\TomEnglishAI\AIVideos\AIVideoCapCut"                 >Videos - IDE: CapCut</a></li>
                <li><a href="\TomEnglishAI\AIVideos\AIVideoClipchamp"              >Videos - IDE: Clipchamp</a></li>
                <li><a href="\TomEnglishAI\AIVideos\FFmpeg"                        >Videos - Cmd Line: FFmpeg  </a></li>
                <li><a href="\TomEnglishAI\AIVideos\FFmpegImagesAdd"               >Videos - Cmd Line: FFmpeg: Images: Add</a></li>
                <li><a href="\TomEnglishAI\AIVideos\FFmpegImagesExtract"           >Videos - Cmd Line: FFmpeg: Images: Extract</a></li>
                <li><a href="\TomEnglishAI\AIVideos\FFmpegImagesTransitions"       >Videos - Cmd Line: FFmpeg: Images: Transistions</a></li>
                <li><a href="\TomEnglishAI\AIVideos\FFmpegSoundtracksAdd"          >Videos - Cmd Line: FFmpeg: Soundtracks: Add</a></li>
                <li><a href="\TomEnglishAI\AIVideos\FFmpegSoundtracksRemove"       >Videos - Cmd Line: FFmpeg: Soundtracks: Add</a></li>
                <li><a href="\TomEnglishAI\AIVideos\FFmpegTextAddCaptions"         >Videos - Cmd Line: FFmpeg: Text: Add Captions</a></li>
                <li><a href="\TomEnglishAI\AIVideos\FFmpegTextTTS"                 >Videos - Cmd Line: FFmpeg: Text: TTS</a></li>
                <li><a href="\TomEnglishAI\AIVideos\FFmpegTextVideoInside"         >Videos - Cmd Line: FFmpeg: Text: Video Inside</a></li>
                <li>&nbsp;</li>
                <li><a href="\TomEnglishAI\AIConsultant\AIStocksMachineLearning"   >Machine Learning - Microsoft Example</a></li>
                <li><a href="\TomEnglishAI\AIConsultant\AITechnologies"            >Machine Learning - Technology List</a></li>
                <li>&nbsp;</li>
                <li><a href="\TomEnglishAI\TomEnglish\About"                       >About     </a></li>
                <li><a href="\TomEnglishAI\TomEnglish\TomEnglishAIResume"          >About     - Tom English Resume</a></li>
                <li><a href="\TomEnglishAI\TomEnglish\HowAIEvolved"                >About     - How AI evolved for me</a></li>
                <li>&nbsp;</li>
                <li><a href="\TomEnglishAI\AIArchitecture\AIArchitecture"          >Knowledge - Architecture: The Big Picture</a></li>
                <li><a href="\TomEnglishAI\AIArchitecture\AIHowTo"                 >Knowledge - Quick Reference</a></li>
                <li><a href="\TomEnglishAI\TomEnglish\AWSDictionary"               >Knowledge - AWS Dictionary</a></li>
            </ul>
        </li>
        <li><a href="\TomEnglishAI\AITools\AITools"                      >AI Tools</a>
            <ul className="sub">
                <li>&nbsp;</li>
                <li><a href="\TomEnglishAI\AITools\AITools"                        >AI Tools by Category</a></li>
                <li><a href="\TomEnglishAI\AITools\AIToolsAIToolEnabled"           >AI-Enabled Tools</a></li>
                <li><a href="\TomEnglishAI\AITools\AIBusinessTypes"                >AI Business Types</a></li>
            </ul>
        </li>
        <li><a href="\TomEnglishAI\AIStocks\AIStocksCandlesticks"        >Stocks</a> 
            <ul className="sub">
                <li>&nbsp;</li>
                <li><a href="\TomEnglishAI\AIStocks\AIStocksCandlesticks"          >Stocks - On Chart: Candlesticks</a></li>
                <li><a href="\TomEnglishAI\AIStocks\AIStocks5MinCandlesticks"      >Stocks - On Chart: 5-Min Candlesticks</a></li>
                <li><a href="\TomEnglishAI\AIStocks\AIStocksPrimitiveAlgorithms"   >Stocks - On Chart: Primitive Algorithms</a></li>
                <li><a href="\TomEnglishAI\AIStocks\AIStocksTimeFrames"            >Stocks - On Chart: TimeFrames</a></li>
                <li>&nbsp;</li>
                <li><a href="\TomEnglishAI\AIStocks\AIStocksExternalFactors"       >Stocks - External: External Factors</a></li>
                <li><a href="\TomEnglishAI\AIStocks\AIStocksIndexes"               >Stocks - External: Indexes</a></li>
                <li><a href="\TomEnglishAI\AIStocks\AIStocksScreenScrapers"        >Stocks - External: Screen Scrapers</a></li>
                <li>&nbsp;</li>
                <li><a href="\TomEnglishAI\AIStocks\AIStocksAPIs"                  >Stocks - Console Apps: Stock APIs</a></li>
            </ul>
        </li>
    </ul>
</div>  
    );
}
