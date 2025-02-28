import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/OldManInDingyNoBG.png';
import clip_image002   from '../../Images/clip_image002.jpg';

import Bullish_Bottom_3InsideUp       from '../../Images/CPs/Bullish_Bottom_3InsideUp.jpg';
import Bullish_Bottom_3LineStrike     from '../../Images/CPs/Bullish_Bottom_3LineStrike.jpg';
import Bullish_Bottom_3OutsideUp      from '../../Images/CPs/Bullish_Bottom_3OutsideUp.jpg';
import Bullish_Bottom_AbandonedBaby   from '../../Images/CPs/Bullish_Bottom_AbandonedBaby.jpg';
import Bullish_Bottom_DragonflyDoji   from '../../Images/CPs/Bullish_Bottom_DragonflyDoji.jpg';

import Bullish_Bottom_Engulfing       from '../../Images/CPs/Bullish_Bottom_Engulfing.jpg';
import Bullish_Bottom_Hammer          from '../../Images/CPs/Bullish_Bottom_Hammer.jpg';
import Bullish_Bottom_Harami          from '../../Images/CPs/Bullish_Bottom_Harami.jpg';
import Bullish_Bottom_InvertedHammer  from '../../Images/CPs/Bullish_Bottom_InvertedHammer.jpg';
import Bullish_Bottom_Kicker          from '../../Images/CPs/Bullish_Bottom_Kicker.jpg';

import Bullish_Bottom_MorningStar     from '../../Images/CPs/Bullish_Bottom_MorningStar.jpg';
import Bullish_Bottom_MorningStar2    from '../../Images/CPs/Bullish_Bottom_MorningStar2.jpg';
import Bullish_Bottom_PiercingLine    from '../../Images/CPs/Bullish_Bottom_PiercingLine.jpg';
import Bullish_Bottom_SpinningTop     from '../../Images/CPs/Bullish_Bottom_SpinningTop.jpg';
import Bullish_Bottom_TweezerBottom   from '../../Images/CPs/Bullish_Bottom_TweezerBottom.jpg';

import Bearish_Top_3InsideDown     from '../../Images/CPs/Bearish_Top_3InsideDown.jpg';
import Bearish_Top_3LineStrike     from '../../Images/CPs/Bearish_Top_3LineStrike.jpg';
import Bearish_Top_3OutsideDown    from '../../Images/CPs/Bearish_Top_3OutsideDown.jpg';
import Bearish_Top_AbandonedBaby   from '../../Images/CPs/Bearish_Top_AbandonedBaby.jpg';
import Bearish_Top_DarkCloudCover  from '../../Images/CPs/Bearish_Top_DarkCloudCover.jpg';

import Bearish_Top_Engulfing       from '../../Images/CPs/Bearish_Top_Engulfing.jpg';
import Bearish_Top_EveningStar     from '../../Images/CPs/Bearish_Top_EveningStar.jpg';
import Bearish_Top_GravestoneDoji  from '../../Images/CPs/Bearish_Top_GravestoneDoji.jpg';
import Bearish_Top_Harami          from '../../Images/CPs/Bearish_Top_Harami.jpg';
import Bearish_Top_Kicker          from '../../Images/CPs/Bearish_Top_Kicker.jpg';

import Bearish_Top_ShootingStar    from '../../Images/CPs/Bearish_Top_ShootingStar.jpg';
import Bearish_Top_SpinningTop     from '../../Images/CPs/Bearish_Top_SpinningTop.jpg';

export default function AIStocksCandlesticks() {
      
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '16%', 
                      backgroundPosition: 'right top', backgroundRepeat: "no-repeat" }}>
            <div style={{opacity: 1.0 }}>
                <TopBar/>
                <div className='homeTable'>
                    <h1>Candlestick Patterns</h1>
                    <p> P = Pattern </p>
                    <p> CP = Candlestick Pattern </p>
                    <p> B = Buy </p>
                    <p> S = Sell </p>

                    
                    <h2>Candlestick Pattern Images</h2> 

                    <h3> Bullish Bottom Patterns </h3>

                    <table style={{width:'95%'}}>
                        <colgroup>
                            <col span="1" style={{width:'33%'}} />
                            <col span="1" style={{width:'33%'}} />
                            <col span="1" style={{width:'33%'}} />
                        </colgroup>
                        <tbody>
                        <tr><td colspan="5"><h4>1 Bar</h4></td></tr>
                        <tr>
                                <td>
                                    <center><p><img src={Bullish_Bottom_DragonflyDoji} alt="Bullish_Bottom_DragonflyDoji" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Dragonfly Doji</strong></p></center>
                                    <center>
                                        <p>Trend reversal: Bearish-to-Bullish.</p>
                                        <p> T-shaped. Almost no upper body &amp; a long shadow.<br /> 
                                            Enter trade long on the break above the candle.
                                        </p>
                                    </center>

                                </td>
                                <td>
                                    <center><p><img src={Bullish_Bottom_Hammer} alt="Bullish_Bottom_Hammer" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Hammer</strong></p></center>
                                </td>
                            </tr>
                            <tr><td colspan="5">&nbsp;</td></tr>
                            <tr>
                                <td>
                                    <center><p><img src={Bullish_Bottom_InvertedHammer} alt="Bullish_Bottom_InvertedHammer" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Inverted Hammer</strong></p></center>
                                </td>
                                <td>
                                    <center><p><img src={Bullish_Bottom_SpinningTop} alt="Bullish_Bottom_SpinningTop" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Spinning Top</strong></p></center>
                                </td>
                                <td></td>
                            </tr>
                            <tr><td colspan="5"><h4>2 Bars</h4></td></tr>
                            <tr>
                                <td>
                                    <center><p><img src={Bullish_Bottom_Engulfing} alt="Bullish_Bottom_Engulfing" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Engulfing</strong></p></center>
                                    <center>
                                    <p>Trend reversal: Bearish-to-Bullish.</p>
                                    <p>Small Bearish, then large Bullish candle.<br /> 
                                       Bullish body engulfs the Bearish body.</p>
                                    </center>
                                </td>
                                <td>
                                    <center><p><img src={Bullish_Bottom_Harami} alt="Bullish_Bottom_Harami" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Harami</strong></p></center>
                                    <center>
                                    <p>Trend reversal: Bearish-to-Bullish.</p>
                                    </center>
                                </td>
                                <td>
                                    <center><p><img src={Bullish_Bottom_PiercingLine} alt="Bullish_Bottom_PiercingLine" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Piercing Line</strong></p></center>
                                </td>
                            </tr>
                            <tr><td colspan="5">&nbsp;</td></tr>
                            <tr>
                                <td>
                                    <center><p><img src={Bullish_Bottom_Kicker} alt="Bullish_Bottom_Kicker" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Kicker</strong></p></center>
                                    <center>
                                    <p>Trend reversal: Bearish-to-Bullish.</p>
                                    <p>Red &amp; green candles with a <b>gap</b> in between.</p>
                                    </center>
                                </td>
                                <td>
                                    <center><p><img src={Bullish_Bottom_TweezerBottom} alt="Bullish_Bottom_TweezerBottom 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Tweezer Bottom</strong></p></center>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr><td colspan="5"><h4>3 Bars</h4></td></tr>
                            <tr>
                                <td>
                                    <center><p><img src={Bullish_Bottom_MorningStar} alt="Bullish_Bottom_MorningStar 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Morning Star</strong></p></center>
                                    <center><p><i>Green middle candlestick.</i></p></center>
                                </td>
                                <td>
                                    <center><p><img src={Bullish_Bottom_MorningStar2} alt="Bullish_Bottom_MorningStar2 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Morning Star</strong></p></center>
                                    <center><p><i>Red middle candlestick.</i></p></center>
                                </td>
                                <td>
                                    <center><p><img src={Bullish_Bottom_AbandonedBaby} alt="Bullish_Bottom_AbandonedBaby 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Abandoned Baby</strong></p></center>
                                </td>
                                <td></td>
                            </tr>
                            <tr><td colspan="5">&nbsp;</td></tr>
                            <tr>
                                <td>
                                    <center><p><img src={Bullish_Bottom_3InsideUp} alt="Bullish_Bottom_3InsideUp 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>3 Inside Up</strong></p></center>
                                    <center>
                                        <p>Trend reversal: Bearish-to-Bullish.</p>
                                        <p>Down trend ends with: 1 red candle.<br />
                                           Up trend begins with: 2 rising green candles.</p>
                                    </center>
                                </td>
                                <td>
                                    <center><p><img src={Bullish_Bottom_3OutsideUp} alt="Bullish_Bottom_3OutsideUp 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>3 Outside Up</strong></p></center>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr><td colspan="5"><h4>4 Bars</h4></td></tr>
                            <tr>
                                <td>
                                    <center><p><img src={Bullish_Bottom_3LineStrike} alt="Bullish_Bottom_3LineStrike 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>3 Line Strike</strong></p></center>
                                    <center>
                                        <p>This Bullish Bottom pattern<br />
                                           <b>does not</b> end with a green candlestick.</p>
                                    </center>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>



                    <h3> Bearish Top Patterns </h3>

                    <table style={{width:'95%'}}>
                        <colgroup>
                            <col span="1" style={{width:'33%'}} />
                            <col span="1" style={{width:'33%'}} />
                            <col span="1" style={{width:'33%'}} />
                        </colgroup>
                        <tbody>
                        <tr><td colspan="5"><h4>1 Bar</h4></td></tr>
                        <tr>
                                <td>
                                    <center><p><img src={Bearish_Top_GravestoneDoji} alt="Bearish_Top_GravestoneDoji 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Gravestone Doji</strong></p></center>
                                </td>
                                <td>
                                    <center><p><img src={Bearish_Top_ShootingStar} alt="Bearish_Top_ShootingStar 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Shooting Star</strong></p></center>
                                </td>
                                <td>
                                    <center><p><img src={Bearish_Top_SpinningTop} alt="Bearish_Top_SpinningTop 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Spinning Top</strong></p></center>
                                </td>
                            </tr>
                            <tr><td colspan="5"><h4>2 Bars</h4></td></tr>
                            <tr>
                                <td>
                                    <center><p><img src={Bearish_Top_DarkCloudCover} alt="Bearish_Top_DarkCloudCover 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Dark Cloud Cover</strong></p></center>
                                </td>
                                <td>
                                    <center><p><img src={Bearish_Top_Engulfing} alt="Bearish_Top_Engulfing 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Engulfing</strong></p></center>
                                </td>
                                <td></td>
                            </tr>
                            <tr><td colspan="5">&nbsp;</td></tr>
                            <tr>
                                <td>
                                    <center><p><img src={Bearish_Top_Harami} alt="Bearish_Top_Harami 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Harami</strong></p></center>
                                </td>
                                <td>
                                    <center><p><img src={Bearish_Top_Kicker} alt="Bearish_Top_Kicker 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Kicker</strong></p></center>
                                </td>
                                <td></td>
                            </tr>
                            <tr><td colspan="5"><h4>3 Bars</h4></td></tr>
                            <tr>
                                <td>
                                    <center><p><img src={Bearish_Top_3InsideDown} alt="Bearish_Top_3InsideDown 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>3 Inside Down</strong></p></center>
                                </td>
                                <td>
                                    <center><p><img src={Bearish_Top_AbandonedBaby} alt="Bearish_Top_AbandonedBaby 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Abandoned Baby</strong></p></center>
                                </td>
                                <td></td>
                            </tr>
                            <tr><td colspan="5">&nbsp;</td></tr>
                            <tr>
                                <td>
                                    <center><p><img src={Bearish_Top_3OutsideDown} alt="Bearish_Top_3OutsideDown 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>3 Outside Down</strong></p></center>
                                </td>
                                <td>
                                    <center><p><img src={Bearish_Top_EveningStar} alt="Bearish_Top_EveningStar 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>Evening Star</strong></p></center>
                                </td>
                                <td></td>
                            </tr>
                            <tr><td colspan="5"><h4>4 Bars</h4></td></tr>
                            <tr>
                                <td>
                                    <center><p><img src={Bearish_Top_3LineStrike} alt="Bearish_Top_3LineStrike 1" border="0" width="30" height="80" /></p></center>
                                    <center><p><strong>3 Line Strike</strong></p></center>
                                    <center>
                                        <p>This Bearish Top pattern that<br />
                                        <b>does not</b> end with a red candlestick.</p>
                                        </center>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>


                    <h2>Comprehensive List</h2> 

                    <h3> Reversal: Bull </h3>

<table style={{width:'100%'}}>
	<colgroup>
		<col span="1" style={{width:'6%'}} />
		<col span="1" style={{width:'17%'}} />
		<col span="1" style={{width:'12%'}} />
		<col span="1" />
	</colgroup>
<tr>
    <td>[B&nbsp;&nbsp;&nbsp;CP]</td>
<td><strong>Bullish Kicker</strong></td>
<td>Bull Trend Rvsl</td>
<td>2 opposite-colored Cs with a gap between them. <br />
    It will turn the bear Trend into a bull price Trend.</td>
</tr>
<tr><td>[ S 3CP]</td>
<td><strong>Evening Doji Star</strong></td>
<td>Bull Trend Rvsl</td>
<td>Series: Bull C, Doji C, bear C. </td>
</tr>
<tr><td>[ &nbsp;&nbsp;&nbsp;CP]</td>
<td><strong>Inverse Head &amp; Shldrs</strong></td>
<td>Bull        Rvsl</td>
<td>Setup shows 3 troughs, with the middle deeper than the others.<br />
    It resembles an upside-down head between 2 shoulders.<br /> 
    This formation consistently predicts powerful upward reversals. </td>
    </tr>
<tr><td>[&nbsp;&nbsp;2CP]</td><td><strong>Matching low</strong></td><td>Bull Trend Rvsl</td>
<td>2 bear Cs w/  same CL price &amp; no C lower side shadows.  </td>
</tr>
<tr><td>[&nbsp;&nbsp;3CP]</td>
<td><strong>3 Stars in the Sud</strong></td>
<td>Bull        Rvsl</td>
<td>3 bear Cs. Each C forms within the range of the previous C.  </td>
</tr>
<tr><td>[B&nbsp;&nbsp;3CP]</td><td><strong>3 White Soldiers</strong></td>
<td>Bull Trend Rvsl</td>
<td>3 bull Cs making higher highs &amp; high lows.<br /> 
    These Cs form in series w/ small wicks &amp; shadows showing huge Seller momentum. </td>
    </tr>
<tr><td>[B&nbsp;&nbsp;7CP]</td>
<td><strong>Tower bottom</strong></td>
<td>Bull Trend Rvsl</td>
<td>2  opposite-color big Cs and 3 to 5 small base Cs.  </td>
</tr>
</table>

<h3> Reversal </h3>

<table>
	<colgroup>
		<col span="1" style={{width:'6%'}} />
		<col span="1" style={{width:'17%'}} />
		<col span="1" style={{width:'13%'}} />
		<col span="1" />
	</colgroup>
<tr>
<td>[ S 3CP]</td>
<td><strong>Deliberation</strong></td>
<td>Trend Rvsl</td>
<td>3 cons bull Cs in a proper sequence. AKA: Stalled [CP]. </td></tr>
<tr>
<td>[ &nbsp;&nbsp;&nbsp;CP]</td>
<td><strong>Dble Top</strong></td>
<td>Rvsl</td><td>When the price reaches a high, pulls back, then rises to the same high again before falling. </td></tr>
<tr>
<td>[ &nbsp;&nbsp;&nbsp;CP]</td>
<td><strong>Head &amp; Shldrs</strong></td>
<td>Rvsl</td><td>Has a peak (the left shoulder), a higher peak (the head), and another peak (the right shoulder). The P is complete when the price falls below the neckline, which connects the lows between the shoulders. Typically seen as a bear signal. </td></tr>
<tr>
<td>[B&nbsp;&nbsp;2CP]</td>
<td><strong>Tweezer Bottom</strong></td>
<td>Rvsl</td><td>2 opposite color Cs and the closing price of the first bear C will be equal to the opening price of the second bull C. </td></tr>
<tr>
<td>[ S 2CP]</td>
<td><strong>Tweezer Top</strong></td>
<td>Rvsl</td>
<td>2 opposite color Cs and the closing price of the first C will be equal to the opening price of the second C. </td></tr>
<tr>
<td>[ &nbsp;&nbsp;&nbsp;CP]</td>
<td><strong>Rising/Falling Wedge</strong></td>
<td>Rvsl</td>
<td>2 converging Trend lines that slope in the same direction. </td></tr>
<tr>
<td>[ &nbsp;&nbsp;&nbsp;CP]</td>
<td><strong>Falling Wedge</strong></td>
<td>Rvsl</td>
<td>2 converging Trend lines that slope in the same direction. <br />
When the price makes lower los &amp; lower hi, <br /> while the hi Trend line is steeper than the lo Trend line. </td></tr>
<tr>
<td>[ &nbsp;&nbsp;&nbsp;CP]</td>
<td><strong>Rising Wedge</strong></td>
<td>Rvsl</td>
<td>When the price makes higher highs and higher lows, while the Trend line connecting the lows is steeper than the Trend line connecting the highs. </td></tr>
<tr>
<td>[ &nbsp;&nbsp;&nbsp;CP]</td>
<td><strong>Gartley</strong></td>
<td>Complex      Rvsl</td>
<td>Several price swings that form a distinct shape. <br />
The P consists of a bull or bear move, <br />
followed by a retracement to a specific level, and then a move in the opposite direction. </td></tr>
</table>

<h3> Continuation: Bull </h3>

<table>
	<colgroup>
		<col span="1" style={{width:'6%'}} />
		<col span="1" style={{width:'19%'}} />
		<col span="1" style={{width:'13%'}} />
		<col span="1" />
	</colgroup>
<tr>
<td>[B&nbsp;&nbsp;5CP]</td>
<td><strong>Bullish Mat hold</strong></td>
<td>Trend Cont</td>
<td>5 Cs &amp; a gap. Shows the previous Trend will continue. </td>
</tr>

<tr>
<td>[ &nbsp;&nbsp;&nbsp;CP]</td>
<td><strong>Cup &amp; Handle</strong></td>
<td>Bull       Cont</td>
<td>In upTrends. Cup-shaped curve, then smaller handle. <br />
The cup curve is formed by a price decline then a price recovery to the previous high. <br />
The handle is a small price dip after the cup is formed, <br />
followed by a breakout above the prev hi. </td>
</tr>

<tr>
<td>[B&nbsp;&nbsp;3CP]</td>
<td><strong>Upside Tasuki Gap</strong></td>
<td>Bull Trend Cont</td>
<td>3 Cs and an upside gap. </td>
</tr>
</table>

<h3> Continuation: Bear </h3>

<table>
	<colgroup>
		<col span="1" style={{width:'6%'}} />
		<col span="1" style={{width:'17%'}} />
		<col span="1" style={{width:'13%'}} />
		<col span="1" />
	</colgroup>
<tr>
<td>[ S 5CP]</td>
<td><strong>Falling 3 methods</strong></td>
<td>Bear  Trend Cont</td>
<td>Previous bear Trend will continue, decreasing the price. </td></tr>
<tr>
<td>[&nbsp;&nbsp;3CP]</td>
<td><strong>Advance block</strong></td>
<td>Bear        Rvsl</td>
<td>It will turn the bull price Trend into a bear Trend. <br />
That's why it will form at the top of the upTrend. </td></tr>
<tr>
<td>[ S  CP</td>
<td><strong> Bear Belt hold</strong></td>
<td>Trend Rvsl</td>
<td>Changes bull price Trend into the bear price Trend. <br />
After the formation of 3 bull Cs, a long bear C forms at the top of the price chart resulting in a price Trend Rvsl. </td></tr>
<tr>
<td>[ S 5CP</td>
<td><strong> Bear Breakaway</strong></td>
<td>Bear       Rvsl</td>
<td>5 Cs and a gap zone.
<br />After forming this CP, a bull Trend will turn into a bear price Trend. </td></tr>
<tr>
<td>[ S 2CP</td>
<td><strong> Matching high</strong></td>
<td>Bear        Rvsl</td>
<td>2 bull Cs with the same
<br />high and no shadows on the upper side. </td></tr>
<tr>
<td>[B&nbsp;&nbsp;3CP]</td>
<td><strong>Morning Doji Star</strong></td>
<td>Rvsl</td>
<td>Bear Trend Rvsl + Bull C. Has: a bear C, a Doji candle &amp; a bull C in a series. </td>
</tr>
<tr>
<td>[ S  CP]</td>
<td><strong>Bear Kicking</strong></td>
<td>Price Trend Rvsl</td>
<td>2 opp-color marubozu Cs with a gap between them. <br />
Mostly forms at the top of the price chart or <br />
Resistance/supply level. </td></tr>
</table>

<h3> Continuation </h3>

<table>
	<colgroup>
		<col span="1" style={{width:'6%'}} />
		<col span="1" style={{width:'17%'}} />
		<col span="1" style={{width:'13%'}} />
		<col span="1" />
	</colgroup>
<tr>
<td>[ &nbsp;&nbsp;&nbsp;CP]</td>
<td><strong>Asc/Desc Triangle</strong></td>

<td>Cont</td>
<td>Occurs when the price forms a horizontal resistance level &amp; an upward sloping support line. 
The Desc Triangle P is the same but inverted, occurring when the price forms a horizontal support level and a downward sloping resistance line. <br />
These Ps are typically seen as bull and bear signals, respectively. </td></tr>
<tr>
<td>[ S 3CP]</td>
<td><strong>Downside Tasuki Gap</strong></td>
<td>Cont</td>
<td>3 Cs w/ a downside gap which forms w/i 2 bear Cs. </td></tr>
<tr>
<td>[ &nbsp;&nbsp;&nbsp;CP]</td>
<td><strong>Rectangle</strong></td>
<td>Cont</td>
<td>When the price moves between a horizontal support and resistance level. <br />
The P is complete when the price </td></tr>
<tr>
<td>[B&nbsp;&nbsp;5CP]</td>
<td><strong>Rising 3 Methods</strong></td>
<td>Cont</td>
<td>Make critical trade mgmt decisions like either holding a specific trade or closing that trade instantly. <br />
Forms during Trending market conditions &amp; means that price will continue. </td></tr>
<tr>
<td>[B&nbsp;&nbsp;&nbsp;CP]</td>
<td><strong>Separating lines</strong></td>
<td>Trend Cont</td>
<td>Bear separating lines. 2 opposite-colored Cs. <br />
The closing of the 1st C will be equal to the opening price of the 2nd C. </td></tr>
<tr>
<td>[ &nbsp;&nbsp;&nbsp;CP]</td>
<td><strong>Symmetrical Triangle</strong></td>
<td>Cont</td>
<td>When the price moves in a series of lower his &amp; higher los, forming a triangle. <br />
Complete when the price breaks out of the triangle. <br />
Can be a bull/bear signal, per breakout direction. </td></tr>
<tr>
<td>[ &nbsp;&nbsp;&nbsp;CP]</td>
<td><strong>Symmetrical Triangle</strong></td>
<td></td>
<td>When price creates a series of lower highs and higher lows, forming converging Trendlines. <br />
Neither bulls nor bears dominate, creating equal chances for upward or downward breakouts from these zones. </td></tr>
</table>





<h2>Patterns to use together for - Bullish predictions</h2>
<p> For bullish predictions, certain candlestick patterns can be especially
        effective when used together. Here are some of the key patterns to consider:</p>
        <p>&nbsp;</p>
        <p> 3 Outside Up:             This  pattern is a strong indicator of a potential
    bullish reversal. It consists of a  small bearish candle, followed by a
    larger bullish candle that engulfs the  first, and a third bullish candle
    that confirms the uptrend.  </p>
    <p>&nbsp;</p>
    <p> Morning Star:             A  classic bullish reversal pattern, the Morning
    Star is a three-candle formation  that starts with a long bearish candle,
    followed by a small-bodied candle  (either bullish or bearish), and ends
    with a long bullish candle. This pattern  signals that the downtrend is
    weakening and an uptrend might be beginning.  </p>
    <p>&nbsp;</p>
    <p> Hammer:                  AKA  T Shaped, the Hammer appears after a
    downtrend. Possible reversal.  </p>
<p> Small  body &amp; long lower shadow.  </p>
<p> Sellers:  tried to push the price down, but </p>
<p> Buyers:   regained control &amp; pushed it up.  </p>
<p> Takuri (Dragonfly Doji):  Possible  Bullish reversal. Long lower shadow
    &amp; little to no upper shadow.  </p>
<p> Suggests:  Sellers pushed the price down, but </p>
<p> Buyers took control by the end of the  trading period.  </p>
<p>&nbsp;</p>
<p> Thrusting Line:           Bullish  continuation pattern. Occurs during a
    downtrend.  </p>
<p> Bearish  C, then Bullish C that opens below the previous close but closes
    within the  body of the previous candle. The price might continue to rise.  </p>
<p> These patterns, in conjunction, signal a Bullish  trend.  </p>
<p> Ex: spotting a Hammer or Dragonfly Doji near  a support level, followed by a
    Morning Star, can give traders increased  confidence in an impending upward
    movement.  </p>
    <p>&nbsp;</p>
    <p> In ML models, these patterns enhance Bullish  predictions.  </p>


<h2> Descending Triangle Form in Candlestick Patterns </h2>
<p> The Descending  Triangle is a bearish continuation pattern that is typically
    formed during a  downtrend, indicating that the price of a security is
    likely to continue to  decline. This pattern is characterized by a series of
    lower highs, creating a  descending trendline, and a relatively flat support
    line at the bottom.  </p>
<h3> Formation  of the Descending Triangle</h3>
<p> The pattern forms  over time as the price makes lower highs. Sellers are
    progressively gaining  control.  </p>
<p> Meanwhile, the  support line at the bottom stays relatively flat. Each time
    the price reaches  this support line, buyers step in to prevent it from
    falling further. However,  with each subsequent high being lower than the
    previous one, it becomes evident  that the buying pressure is weakening
    &amp; sellers are becoming more dominant.  </p>
<h3> Key Features</h3>
<p> <div class="div160">Lower Highs:</div> A  series of peaks that are progressively lower,
    forming the descending trendline.  </p>
<p> <div class="div160">Flat Support Line:</div> A horizontal line that connects the lows,
    indicating a strong level  of support where buying pressure is consistent.  </p>
<p> <div class="div160">Volume:</div> Typically, the volume decreases as the pattern forms, indicating a lack of buying interest.<br />
    <div class="div170"></div>However, a significant increase in volume often accompanies the breakout below the support line.  </p>
<h3> Trading  the Descending Triangle</h3>
<p> Traders often look  for a breakout below the support line to confirm the
    pattern. When the price  breaks through this level, it signals that the
    sellers have overwhelmed the  buyers, and the downtrend is likely to
    continue.  </p>
<h4> _Entry  Point</h4>
<p> Traders typically  enter a short position when the price closes below the
    support line. It's  essential to wait for a clear breakout with increased
    volume to confirm the  pattern's validity.  </p>
<h4> top-Loss  and Take-Profit</h4>
<p> To manage risk,  traders usually place a stop-loss order just above the last
    lower high to  protect against false breakouts. The take-profit target can
    be estimated by  measuring the height of the triangle at its widest part and
    subtracting this  distance from the breakout point.  </p>
<h4> Example</h4>
<p> Consider a stock  that has been in a downtrend. Over the past few weeks, it
    has made lower highs  at $50, $48, and $45, while the price has consistently
    found support at $40.  This forms a descending trendline connecting the
    lower highs and a flat support  line at $40. Once the price breaks below $40
    with increased volume, it confirms  the Descending Triangle, and traders may
    enter a short position, anticipating  further declines.  </p>
<p> The Descending  Triangle is a reliable pattern for traders looking to
    capitalize on continuing  downtrends. By identifying the key features and
    waiting for the breakout  confirmation, traders can enhance their strategy
    and improve their chances of  success in the market.  </p>



<h2> Rectangle Form in Candlestick Patterns</h2>
<p>&nbsp;</p>
<center><img src={clip_image002} alt="Rectangle Form" border="0" width="400" height="250" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</center>
<p>&nbsp;</p>
<center><p>Rectangles formed several times on this chart
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </p></center>
<p>&nbsp;</p>

<p> The Rectangle  pattern, also known as a trading range or consolidation zone,
    is a continuation  pattern that forms when the price of a security moves
    between parallel support  and resistance levels. This pattern indicates a
    period of indecision in the  market, where buyers and sellers are in a state
    of equilibrium, leading to a  horizontal movement of the price.  </p>
<h3> Formation  of the Rectangle Pattern</h3>
<p> The Rectangle  pattern forms when the price repeatedly bounces between a
    horizontal support  line at the bottom and a horizontal resistance line at
    the top. This  back-and-forth movement creates a distinct rectangular shape
    on the chart. The  pattern can occur during both uptrends and downtrends,
    serving as a pause  before the price continues in the original direction.  </p>
<h3> Key  Features</h3>
<p> <div class="div150">Resistance Line:</div> Horizontal line connects highs. Level where selling pressure  overcomes buying pressure.  </p>
<p> <div class="div150">Support Line:</div> Horizontal  line connects lows.  Level where buying
    pressure overcomes selling pressure.  </p>
<p> <div class="div150">Volume:</div>  Typically,  volume decreases during the formation of
    the Rectangle pattern, as the market  consolidates.<br />
    <div class="div160">&nbsp;</div>However, a breakout is
    often accompanied by a significant  increase in volume, confirming the
    continuation of the trend. </p>
<h3> Trading  the Rectangle Pattern</h3>
<p> Traders look for a  breakout from the Rectangle pattern to confirm the
    continuation of the trend.  </p>
<p> The breakout can  occur in either direction, depending on whether the prior
    trend was bullish or  bearish.  </p>
<h4> Entry  Point</h4>
<p> Traders typically  enter a position when the price breaks out of the Rectangle pattern. </p>
<p> <div class="div160">Uptrend  entry:</div>made when price breaks above the  resistance line.  </p>
<p> <div class="div160">Downtrend  entry:</div>made when price breaks below the  support line.  </p>
<h4> Stop-Loss  and Take-Profit</h4>
<p> Bullish  breakout risk management: Place stop-loss  order just below the
    support line.  </p>
<p> Bearish  breakout risk management: Place stop-loss  order just above the
    resistance line.  </p>
<p> Take-profit  target: Measure the Rectangle  height. Project the distance toward the breakout.  </p>
<h4> Example</h4>
<p> The 4-hour chart showed Price uptrend over many weeks. </p>
<p> The <strong>Rectangle Pattern</strong> shows <strong>Support Lines</strong> and <strong>Resistance Lines</strong>. </p>
<p> <div class="div160">Long Position:</div>Enter when price breaks above Resistance <u>with increased volume</u>. Rectangle pattern confirmed.  </p>
<p> <div class="div160">Rectangle pattern:</div>Reliable for trend continuation. </p>
<p> Strategy enhanced: Identify  key features and wait for breakout confirmation. </p>



<h2> TradingView</h2>
<p> The TradingView  community has thousands of "AI" pattern indicators and strategies. Backtesting is  available.  </p>
<p> Some code is not public.  Basic patterns (MACD, RSI, MA, ..) are private.
    Web searchs provide coding  examples.  </p>
<h3> Pinecode</h3>
<p> Investigate ideas in  TradingView by writing pinecode snippets.  </p>
<p> Pinecode can be ported to Python, node.js or C# for fullstack app usage.  </p>
<h3> Vertical  Lines</h3>
<p> Example: Look for end-of-day patterns to evaluate entering a Buy. Then, Sell at market open.</p>
    
<p>Mark <strong>patterns</strong> with colored dashed lines. Thin purple line is <strong>9:30 AM market open</strong>.</p>
<p>&nbsp;</p>
<p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={clip_image002} alt="Vertical Lines" border="0" width="700" height="400" /> </p>

<p>&nbsp;</p>
<p><strong>1. Perform initial research:</strong></p>
<p>&nbsp;&nbsp;&nbsp;<strong>Add visual markers:</strong></p>
<p>
&nbsp;&nbsp;&nbsp;- Investigate patterns. <br />
&nbsp;&nbsp;&nbsp;- Add pattern markers: arrows, rectangles, red X. 
</p>
<p>&nbsp;&nbsp;&nbsp;<strong>Analyze:</strong></p>
<p>&nbsp;&nbsp;&nbsp;Per the upper  graph, the markers indicate a strong downtrend, a weak downtrend and a weak  level.  </p>

<p>&nbsp;</p>
<p><strong>2. Automate vertical pattern-matching  lines:</strong></p>
<p>&nbsp;&nbsp;&nbsp;<strong>Add vertical lines:</strong></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Red:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Strong    downtrend </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Orange:&nbsp;&nbsp;Weak    downtrend </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Purple:&nbsp;&nbsp;Weak    strength below a given threshold </p>
<p>&nbsp;&nbsp;&nbsp;<strong>Three days of potential trades:</strong></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Day 1: No indicators! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Buy! </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Day 2: Weak strength 3 full bars away. &nbsp;Possible Buy. </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Day 3: Weak strength. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No Buy! </p>
<p><strong>3. Always add more analysis:</strong></p>
<p>&nbsp;&nbsp;&nbsp;A full day of wide rectangles may indicate a next-morning price drop.  </p>
<p>&nbsp;&nbsp;&nbsp;Change the time frame. These patterns were run on the 5-minute time frame. </p>
<p>&nbsp;&nbsp;&nbsp;... </p>
<p><strong>Code:</strong></p>
<p>&nbsp;&nbsp;if hour(time, "GMT-0500") == 09 and minute(time, "GMT") == 30 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;line.new(BarIndex, low-ta.tr, BarIndex, high+ta.tr, xloc.bar_index, extend.both, color.purple, line.style_solid, 2) </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;where ta.tr = math.max(high-low, math.abs(high-close[1]), math.abs(low-close[1])) </p>



<h2> Other </h2>
<p> Candlesticks with a long upper shadow and short lower shadow indicate:<br /> &nbsp;&nbsp;&nbsp;Buyers dominated during the first part of the session, bidding  prices higher.</p>
<p> Candlesticks with long lower shadows and short upper shadows indicate:<br /> &nbsp;&nbsp;&nbsp;Sellers dominated during the first part of the session,  driving prices lower.  </p>
<p> Lagging indicator: Candlestick chart Ps reveal how the price behaved in the past, and past performance is not a reliable indicator of future  returns.  </p>
<p> Rising and Falling Wedges:<br />
&nbsp;&nbsp;&nbsp;These formations appear when the price action creates either higher lows or lower highs in a narrowing range.<br /> 
&nbsp;&nbsp;&nbsp;Rising wedges show steeper support than resistance lines.<br /> 
&nbsp;&nbsp;&nbsp;Falling wedges display steeper resistance than support lines.<br />
&nbsp;&nbsp;&nbsp;These powerful setups frequently  predict significant Trend Cont.  </p>
<p> Reversal chart Ps help traders identify major Trend Reversals in market direction.<br />
These setups typically form at Trend exhaustion points, signaling potential dramatic price shifts.<br />
Notable <strong>Breakout Patterns</strong> include: </p> 
<p> &nbsp;&nbsp;&nbsp;Tri star, Descending hawk, Upside tasuki gap </p> 
<p> &nbsp;&nbsp;&nbsp;Two consecutive solid big green candles </p> 
<p> &nbsp;&nbsp;&nbsp;Two consecutive solid big red candles </p> 
<p> &nbsp;&nbsp;&nbsp;Upside Gap Two Crows </p> 
<p> &nbsp;&nbsp;&nbsp;Three consecutive bearish candles </p> 
<p> &nbsp;&nbsp;&nbsp;Three consecutive bullish candles </p> 
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

                </div>
                <TopBar/>
            </div>
        </div>
    )
}
