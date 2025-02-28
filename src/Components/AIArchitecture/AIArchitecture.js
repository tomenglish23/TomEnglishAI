import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/OldManInDingyNoBG.png';

import AIInFinance1    from '../../Images/ArchImages/AIInFinance1.jpg';
import FullStack2   from '../../Images/ArchImages/FullStack2.jpg';
import React1   from '../../Images/ArchImages/React1.jpg';
import Terms_Geek   from '../../Images/ArchImages/Terms_Geek.jpg';
import Terms_Geek2   from '../../Images/ArchImages/Terms_Geek2.jpg';

export default function AIArchitecture() {
      
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '16%', 
                      backgroundPosition: 'right top', backgroundRepeat: "no-repeat" }}>
            <div style={{opacity: 1.0 }}>
                <TopBar/>
                <div className='homeTable'>

                <p> &nbsp; </p>
                <h1>AI Architecture</h1>
                    
                    <h2>Data</h2> 
                    <p> Stock data is input from various financial sites.<br /> 
                        The most convenient to use is TradingView. <br />
                        TradingView has an API that allows specification of the exchange, symbol, <br />
                        timeframe and number of historical candlestick bars. </p>
                        <p> Data can be input for every entity that TradingView accesses. </p>
                        <p> I have chosen to use MySQL as my database, moving away from Microsoft SQL Server.<br /> 
                            I am a Microsoft .NET developer by trade.<br /> 
                            It has been interesting to move away from that platform<br /> 
                            (except for using it for access to Microsoft's ML.NET library).</p>
                        <p> MySQL is a referential database. It is straightforward to add the schemas<br /> 
                            and stored procedures to input and maintain the candlestick data<br /> 
                            for my stocks and crypto. </p>
                        <p> As algorithms & patterns are analyzed,<br /> 
                            they can be entered in the database as pattern entities and,<br /> 
                            as the pattern is found in a time series,<br /> 
                            the algorithm can be referenced to the specific symbol's<br /> 
                            row of data by its datetime column. </p>
                        <p> As efforts such as screen scraping collect data,<br /> 
                            the results can be entered in the database and referenced to the symbol of interest. </p>

                    <h3>Financial APIs</h3> 
                    <p> I have been using the TradingView API with plans to widely implement the Finnhub.io API. </p>
                    <p> In addition to collecting historical data,<br /> 
                        the APIs have been instrumental for getting the latest stock quote<br /> 
                        to set alarms when the price hits a threshold, a pattern is found, etc.<br /> 
                        Implementation is easy using a Windows timer to periodically collect the data and set an alarm.</p>

                    <table>
                        <tbody>
                            <colgroup>
                            </colgroup>
                            <tr>
                                <td colspan="2">&nbsp;&nbsp;&nbsp;<img src={AIInFinance1} alt="AI in Finance" border="0" width="300" height="110" /></td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    I have built an AI platform so I can maintain the data for use with<br /> 
                                    &nbsp;&nbsp;&nbsp;(1) my AI algorithms and<br /> 
                                    &nbsp;&nbsp;&nbsp;(2) the thousands of existing algorithms in TradingView.
                                </td> 
                            </tr>
                            <tr>
                                <td colspan="2">
                                    Pinescript has enabled a wide open world for developers.<br /> 
                                    Realistically, AI algorithms are developed by large groups of people, be it companies or stock communities.
                                </td> 
                            </tr>
                            <tr>
                                <td colspan="2">
                                    I am not looking to re-invent the wheel. I am implementing my personal integrated algorithm approach,<br /> 
                                    which has been successful in the past in a different industry.<br /> 
                                    </td> 
                            </tr>
                            <tr>
                                <td colspan="2">
                                    I sequence through combinations of algorithms, patterns, intermediate results and so on.<br />
                                    For me, it is more successful than just, for example, implementing Machine Learning like Regression patterns.<br /> 
                                    I find those too confining. If a financial sequence occurs to me,<br /> 
                                    it is my specific AI platform that gives me the power to quickly investigate.
                                </td>
                            </tr>
                        </tbody>
                    </table>  

                    <h3>Screen Scraping</h3> 
                    <p>Data can be gathered from many websites. When there is no available API, screen scraping is an option.</p>
                    <p>Screen scraping is a lot of work and, if the page changes, the screen scraper requires an update.</p>
                    <p>Daily, collect data for many categories:<br /><br /> 
                    <div class="div150PL">News:</div> If you pick your sources right, you can perform daily searches for positive and negative news.<br /> 
                    <div class="div150PL">Financial Info:</div> Many major sites present company financial information.<br /> 
                    <div class="div150PL">Rumors:</div> Buy the rumor. Sell the news. <br /> 
                    <div class="div150PL">Events:</div> Earnings Reports, etc. </p>

                    <h2>Data Maintenance with Console Applicationss</h2> 
                    <p> Console apps have less overhead than does a web application.<br /> 
                        Console apps can reference the financial APIs and the MySQL database to maintain the data.<br />
                        Console apps can be scheduled to run at any time of day.</p>
                    <p> That is why you don't see a lot of the platform's functionality on this website.<br />
                    That is, the <b>Tom English AI Control Center</b> does not require a website. </p>
                    <p>Data is accessed by:<br />
                    &nbsp;&nbsp;&nbsp;- the Tom English AI website <br />
                    &nbsp;&nbsp;&nbsp;- the Tom English AI Control Center, which includes console apps <br />
                    &nbsp;&nbsp;&nbsp;- the Tom English AI Microsoft Machine Learning applications.</p>

                    <h2>React Full Stack Application</h2> 

                    <table>
                        <tbody>
                            <colgroup>
                            </colgroup>
                            <tr>
                                <td colspan="2"><strong>Full Stack Applications</strong></td>
                            </tr>
                            <tr>
                                <td colspan="2"><img src={FullStack2} alt="Full Stack" border="0" width="350" height="200" /></td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    We have built a React Full Stack Application that accesses our MySQL database.<br />
                                    The React Full Stack Application is a web application that can be accessed from anywhere.<br />
                                    It is the Tom English AI website.<br />
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    The React application sits atop a node.js server for user login.<br />
                                    The React application sits atop a Python server for data access.<br />
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    * The image requires an update to show the Python server.<br />
                                </td>
                            </tr>
                        </tbody>
                    </table>  

                    <h3>React </h3>

                    <table>
                        <tbody>
                            <colgroup>
                            </colgroup>
                            <tr>
                                <td colspan="2"><strong>React</strong></td>
                            </tr>
                            <tr>
                                <td colspan="2"><img src={React1} alt="React" border="0" width="350" height="200" /></td>
                            </tr>
                        </tbody>
                    </table>  
                    <p> React gives us the opportunity to reach out to the public while still accessing internal servers in node.js and Python. </p>
                    <p> As time permits, dynamic controls will be added to display the interactions of algorithms, candlestick patterns, external resources and more. </p>

                    <h3>Node.js</h3>
                    <p> React uses node.js as its "code behind", to use .NET terminology. It gives the React HTML its dynamic abilities. </p>

                    <h3>Python</h3>
                    <p> Python is the key to our AI world. First, the multitude of Pinescript algoritms <br />
                        are most easily ported to Python allowing us to borrow from TradingView and, <br />
                        algorithm-wise, remain independent from it. </p>
                    <p> Python has access to strong AI &amp; ML libraries. </p>

                    <h2>Machine Learning</h2> 
                    <p> Machine Learning is run in Visual Studio.<br /> 
                        Our VS applications access Microsoft's ML.NET to implement their Machine Learning platform. <br />
                        Our VS applications also access our MySQL database to maintain the data. </p>


                    <h2>Charts and Candlesticks</h2> 
                    <p> Too much to say here! Many pages, on this site, are devoted to these technologies. </p>


                    <h2>Terminology</h2> 
                    <p> <i>Comming soon ...</i> </p>

                    <table>
                        <tbody>
                            <colgroup>
                            </colgroup>
                            <tr>
                                <td><img src={Terms_Geek} alt="Terminology" border="0" width="350" height="200" /></td>
                                <td><img src={Terms_Geek2} alt="Terminology" border="0" width="350" height="200" /></td>
                            </tr>
                        </tbody>
                    </table>  
                    <p> &nbsp; </p>

                    <p> &nbsp; </p>
                    <p> &nbsp; </p>
                    <p> &nbsp; </p>
                    <p> &nbsp; </p>
                    <p> &nbsp; </p>

                </div>

            </div>
        </div>
    )
}
