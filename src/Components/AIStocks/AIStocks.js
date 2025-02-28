import {React} from 'react';
import TopBar from '../Menu/TopBar';

export default function AIStocks() {

    const pages = require.context('./', true, /\.js$/).keys().map(file => file.replace('./', '').replace('.js', ''));

    return (
        <div>
            <TopBar/>
            <div className='homeTable'>
                <h1>Stocks, Candlesticks, Patterns, Algorithms &amp; Other Factors</h1>
                <ul>
                    {pages.map((page, index) => (
                        <li key={index}>{page}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
