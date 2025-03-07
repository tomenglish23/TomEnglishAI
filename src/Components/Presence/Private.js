import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function Private() {

    return (
        <div>
            <TopBar/>
            <center> 
                <p style={{height: '30px'}}></p>
                <p className='h1home'> Tom English AI </p>
                <p style={{height: '50px'}}></p>
            </center> 
            <p><a target="blank" href="/">Home</a></p>
            <p>&nbsp;</p>
            <p><a target="blank" href="\TomEnglishAI\AIArchitecture/Todo">Todo</a></p>
            <p>&nbsp;</p>
            <h2>AI Tools - Extensions and ChatBots</h2>
            <p><a target="blank" href="\TomEnglishAI\AITools\AIToolsAddExtension">AITools Add Extension</a></p>
            <p><a target="blank" href="\TomEnglishAI\AITools\TomEnglishAIChatBot">AITools TomEnglishAI ChatBot</a></p>
            <p><a target="blank" href="\TomEnglishAI\AITools\ChatBots">AITools ChatBots</a></p>
            <p>&nbsp;</p>
            <p><a target="blank" href="\TomEnglishAI\Presence\Presence1">Presence</a></p>
            <p><a target="blank" href="\TomEnglishAI\Presence\Funding">Funding</a></p>
            <p><a target="blank" href="\TomEnglishAI\Presence\VentureCapitalists">Venture Capitalists</a></p>
            <p><a target="blank" href="\TomEnglishAI\Presence\PlansProposalsDecks">Plans Proposals Decks</a></p>
            <p>&nbsp;</p>
            <p><a target="blank" href="\TomEnglishAI\AIConsoleApps\AIConsoleApps">Fix: Console Apps</a></p>
            <p><a target="blank" href="\TomEnglishAI\AIConsoleApps\AIGetStkHist">Fix: Stock History</a></p>
            <p>&nbsp;</p>
            <p><a target="blank" href="\TomEnglishAI\AIStocks\AIStocksAPIs2">Too much: AIStocksAPIs 2</a></p>
            <p>&nbsp;</p>
            <p style={{height: '20px'}}></p>
            <center> 
                <p style={{height: '50px'}}></p>
                <p className='h2home'> <a href="http://www.tomenglishai.com/">www.TomEnglishAI.com</a> </p> 
                <p style={{height: '1px'}}></p>
                <p className='h3home'> Feb  08, 2025 </p> 
            </center> 
        </div>
    )
}

/* 
TomEnglishAI\src:
   Images          - AITools\
                   - ArchImages\
                   - CPs\
                   - Indicator\
   Documentation\
   Components      - App.js
                   - App.test.js
                   - index.js
                   - reportWebVitals.js
                   - setupTests.js
                   - SignIn.js

                   - CSS\

                   - ReactComponents\  - ColorIs.js
                                       - ddlReactSelect.js
                                       - SessionStorage.js

                   - Helpers\          - PdHelper.js
                                       - TkrBar.js
                                       - TkrBar1.js
                                       - utils.js

                   - Menu\             - MMenuSubmenu.js
                                       - TopBar.js

                   - -----------------
                   - TomEnglish\       - About.js
                                       - AWSDictionary.js
                                       - Home.js
                                       - HowAIEvolved.js
                                       - TomEnglishAIResume.js
                                       - Signup.js


                   - AIArchitecture\   - AIArchitecture.js
                                       - AIHowTo.js
                                       - AITechnologies.js
                                       - Todo.js

                   - AIStocks\         - AIStocksCandlesticks.js
                                       - AIStocks5MinCandlesticks.js
                                       - AIStocksAPIs.js
                                       - AIStocksExternalFactors.js
                                       - AIStocksIndexes.js
                                       - AIStocksMachineLearning.js
                                       - AIStocksPrimitiveAlgorithms.js
                                       - AIStocksScreenScrapers.js
                                       - AIStocksTimeFrames.js
                                       - TVDatafeed.js

                   - -----------------
                   - AITools\          - AITools.js
                                       - AIToolsAddExtension.js
                                       - ChatBots.js
                                       - TomEnglishAIChatBot.js

                   - -----------------
                   - AIConsoleApps\    - AIConsoleApps.js
                                       - AIGetStkHist.js

                   - -----------------
                   - Private\
                   - Presence\         - Private.js
                                       - Funding.js
                                       - PlansProposalsDecks.js
                                       - Presence1.js
                                       - VentureCapitalists.js
                                       - BusinessPlan.js


<li><a href="AIStocksCandlesticks">Candlesticks bad</a></li>
<li><a href="AIStocks\AIStocksCandlesticks">Candlesticks bad</a></li>
<li><a href="{publicUrl}\AIStocks\AIStocksCandlesticks">Candlesticks bad</a></li>
<li><a href="\TomEnglishAI\AIStocks\AIStocksCandlesticks">Candlesticks bad</a></li> 


*/
