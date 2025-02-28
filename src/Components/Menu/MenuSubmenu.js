import React from "react";
import '../CSS/MenuSubmenu.css';

// Path: src\Components\Menu\MenuSubmenu.js

export default function MenuSubmenu() {
 
    /* Need images of each CP */

  return (
<div>
    <ul id="menu">
        <li><a href="\TomEnglishAI\Home"                    >Home</a></li>

        <li><a href="\AIStocks\AIStocksCandlesticks"        >AI Stocks</a> 
            <ul className="sub">
                <li><a href="\AIStocks\AIStocksCandlesticks"        >Candlesticks</a></li>
                <li><a href="\AIStocks\AIStocks5MinCandlesticks"    >5-Min Candlesticks</a></li>
                <li><a href="\AIStocks\AIStocksPrimitiveAlgorithms" >Primitive Algorithms</a></li>
                <li><a href="\AIStocks\AIStocksTimeFrames"          >TimeFrames</a></li>
                <li><a href="\AIStocks\AIStocksMachineLearning"     >Machine Learning</a></li>
            </ul>
        </li>

        <li><a href="\AIStocks\AIStocksExternalFactors"      >External</a> 
            <ul className="sub">
                <li><a href="\AIStocks\AIStocksExternalFactors"     >External Factors</a></li>
                <li><a href="\AIStocks\AIStocksIndexes"             >Indexes</a></li>
                <li><a href="\AIStocks\AIStocksScreenScrapers"      >Screen Scrapers</a></li>
            </ul>
        </li>

        <li><a href="\AIStocks\AIStocksAPIs"                >Console Apps</a> 
            <ul className="sub">
                <li><a href="\AIStocks\AIStocksAPIs"                >Stock APIs</a></li>
            </ul>
        </li>

        <li><a href="\AIArchitecture\AIArchitecture"        >Architecture</a>
            <ul className="sub">
                <li><a href="\AIArchitecture\AIArchitecture"        > Architecture - The Big Picture</a></li>
                <li><a href="\AIArchitecture\AITechnologies"        > Machine Learning Technologies</a></li>
                <li><a href="\AIArchitecture\AIHowTo"               > How To - My Quick Reference</a></li>
            </ul>
        </li>

        <li><a href="\TomEnglishAI\About"                   >About</a>
        <ul className="sub">
                <li><a href="\TomEnglishAI\About"                   > About</a></li>
                <li><a href="\TomEnglishAI\TomEnglishAIResume"      > TomEnglish AI Resume</a></li>
                <li><a href="\TomEnglishAI\HowAIEvolved"            > How AI evolved for me</a></li>
                <li><a href="\TomEnglishAI\BusinessPlan"            > Business Plan</a></li>
                <li><a href="\TomEnglishAI\AWSDictionary"           > AWS Dictionary</a></li>
            </ul>
        </li>

    </ul>
</div>  
    );
}
