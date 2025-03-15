import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function AIStocks5MinCandlesticks() {
      
    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>5-Min Timeframe Candlestick Patterns<br />&nbsp;&nbsp;&nbsp; Bullish Results</h1>
                <p></p>
            </header>            
            <main>
                    <p> P = Pattern </p>
                    <p> CP = Candlestick Pattern </p>
                    <p> B = Buy </p>
                    <p> S = Sell </p>

                    <h2>Bullish Candlestick Patterns</h2> 
                    <table style={{width:'100%'}}>
                        <tbody>
                            <colgroup>
                                <col span="1" style={{width:'25%'}} />
                                <col span="1" />
                            </colgroup>
                            <tr><td><strong>Hammer:</strong></td><td>A Bullish reversal pattern with a small body at the upper end of the trading range and a long lower wick. </td></tr>
                            <tr><td><strong>Bullish Engulfing:</strong></td><td>A small bearish candle is followed by a large Bullish candle that engulfs the previous candle.</td></tr>
                            <tr><td><strong>Piercing Line:</strong></td><td>A Bullish candle closes above the midpoint of the previous bearish candle.</td></tr>
                            <tr><td><strong>Bullish Harami:</strong></td><td>A small Bullish candle is contained within a larger bearish candle.</td></tr>
                            <tr><td><strong>Inverted Hammer:</strong></td><td>A small body at the lower end of the trading range and a long upper wick.</td></tr>
                            <tr><td><strong>Shooting Star:</strong></td><td>A small body at the upper end of the trading range and a long lower wick, opposite of the inverted hammer.</td></tr>
                            <tr><td><strong>Bullish Kicker:</strong></td><td>A strong Bullish candle that opens on or near the low and closes on or near the high. </td></tr>
                            <tr><td><strong>Bullish Counterattack:</strong></td><td>A bearish candle is followed by a Bullish candle that closes above the midpoint of the previous candle. </td></tr>
                            <tr><td><strong>Three White Soldiers:</strong></td><td>Three consecutive Bullish candles, each closing higher than the previous one. </td></tr>
                            <tr><td><strong>Bullish Tri-Star:</strong></td><td>Three consecutive doji candles, followed by a Bullish candle. </td></tr>
                        </tbody>
                    </table>
                    <h2>Continuation Patterns</h2>
                    <table style={{width:'100%'}}>
                        <tbody>
                            <colgroup>
                                <col span="1" style={{width:'25%'}} />
                                <col span="1" />
                            </colgroup>
                            <tr><td><strong>Ascending Triangle:</strong></td><td>The price makes higher lows and the same highs, forming an ascending triangle. </td></tr>
                            <tr><td><strong>Bull Flag:</strong></td><td>The price consolidates after a strong Bullish move, forming a flag shape. </td></tr>
                            <tr><td><strong>Rising Wedge:</strong></td><td>The price makes higher highs and higher lows, forming a rising wedge shape. </td></tr>
                        </tbody>
                    </table>

                    <h2>Reversal Patterns</h2>
                    <table style={{width:'100%'}}>
                        <tbody>
                            <colgroup>
                                <col span="1" style={{width:'25%'}} />
                                <col span="1" />
                            </colgroup>
                            <tr><td><strong>Head and Shoulders Bottom:</strong></td><td>The price forms a head and shoulders shape, with the head being the lowest point. </td></tr>
                            <tr><td><strong>Double Bottom:</strong></td><td>The price makes two consecutive lows, with a small bounce in between. </td></tr>
                            <tr><td><strong>Triple Bottom:</strong></td><td>The price makes three consecutive lows, with small bounces in between. </td></tr>
                            <tr><td><strong>Bullish Pennant:</strong></td><td>The price consolidates after a strong Bullish move, forming a pennant shape. </td></tr>
                            <tr><td><strong>Falling Wedge:</strong></td><td>The price makes lower highs and lower lows, forming a falling wedge shape. </td></tr>
                            <tr><td><strong>Bullish Rectangle:</strong></td><td>The price consolidates within a rectangular shape, with equal highs and lows. </td></tr>
                            <tr><td><strong>Inverse Cup and Handle:</strong></td><td>The price forms an inverse cup shape, followed by a handle. </td></tr>
                        </tbody>
                    </table>
                </main>
        </div>
    )
}
