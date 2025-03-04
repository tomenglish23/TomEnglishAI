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
