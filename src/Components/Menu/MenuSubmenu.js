import React from "react";
import '../CSS/MenuSubmenu.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Path: src\Components\Menu\MenuSubmenu.js

export default function MenuSubmenu() {
 
    /* Need images of each CP */

    const publicUrl = process.env.PUBLIC_URL;

  return (
<div>
    <ul id="menu">
        <li><a style={{backgroundColor:"darkgoldenrod"}} href="\TomEnglishAI\TomEnglish\Home"                      >Home</a></li>

        <li><a style={{backgroundColor:"darkmagenta"}} href="\TomEnglishAI\AIStocks\AIStocksCandlesticks"        >AI Stocks - On Chart</a> 
            <ul className="sub">
                <li><a href="\TomEnglishAI\AIStocks\AIStocksCandlesticks"        >Candlesticks</a></li>
                <li><a href="\TomEnglishAI\AIStocks\AIStocks5MinCandlesticks"    >5-Min Candlesticks</a></li>
                <li><a href="\TomEnglishAI\AIStocks\AIStocksPrimitiveAlgorithms" >Primitive Algorithms</a></li>
                <li><a href="\TomEnglishAI\AIStocks\AIStocksTimeFrames"          >TimeFrames</a></li>
            </ul>
        </li>
                
        <li><a style={{backgroundColor:"darkmagenta"}} href="\TomEnglishAI\AIStocks\AIStocksExternalFactors"      >AI Stocks - External</a> 
            <ul className="sub">
                <li><a href="\TomEnglishAI\AIStocks\AIStocksExternalFactors"     >External Factors</a></li>
                <li><a href="\TomEnglishAI\AIStocks\AIStocksIndexes"             >Indexes</a></li>
                <li><a href="\TomEnglishAI\AIStocks\AIStocksScreenScrapers"      >Screen Scrapers</a></li>
            </ul>
        </li>

        <li><a style={{backgroundColor:"darkmagenta"}} href="\TomEnglishAI\AIArchitecture\AIArchitecture"        >AI Platform Architecture</a>
            <ul className="sub">
                <li><a href="\TomEnglishAI\AIArchitecture\AIArchitecture"        > Architecture - The Big Picture</a></li>
                <li><a href="\TomEnglishAI\AIStocks\AIStocksMachineLearning"     > Machine Learning - Microsoft Example</a></li>
                <li><a href="\TomEnglishAI\AIArchitecture\AITechnologies"        > Machine Learning - Technology List</a></li>
                <li><a href="\TomEnglishAI\AIArchitecture\AIHowTo"               > How To - My Quick Reference</a></li>
                <li><a href="\TomEnglishAI\AIStocks\AIStocksAPIs"                > Console Apps - Stock APIs</a></li>
            </ul>
        </li>

        <li><a href="\TomEnglishAI\AITools\AITools"                     >AI Tools</a>
            <ul className="sub">
            <li><a href="\TomEnglishAI\AITools\AITools"                     >AI Tools by Category</a></li>
            <li><a href="\TomEnglishAI\AITools\AIToolsAIToolEnabled"        >AI-Enabled Tools</a></li>
            <li><a href="\TomEnglishAI\AITools\TomEnglishAIChatBot"         >Tom English AI ChatBots</a></li>
            </ul>
        </li>

        <li><a style={{backgroundColor:"darkgoldenrod"}} href="\TomEnglishAI\TomEnglish\About"                   >About</a>
        <ul className="sub">
                <li><a href="\TomEnglishAI\TomEnglish\About"                     > About</a></li>
                <li><a href="\TomEnglishAI\TomEnglish\TomEnglishAIResume"        > TomEnglish AI Resume</a></li>
                <li><a href="\TomEnglishAI\TomEnglish\HowAIEvolved"              > How AI evolved for me</a></li>
                <li><a href="\TomEnglishAI\TomEnglish\AWSDictionary"             > AWS Dictionary</a></li>
            </ul>
        </li>

    </ul>
</div>  
    );
}
