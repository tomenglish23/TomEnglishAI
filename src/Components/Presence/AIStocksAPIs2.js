import React, {useState} from 'react';
import Axios from 'axios';
import TopBar from '../Menu/TopBar';
import backgroundImage from '../../Images/tom_english_ai_logo.jpeg';
import '../CSS/styles.css';
import TkrBar from '../Helpers/TkrBar';


//import Select from 'react-select';

//import DDLReactSelect from './ddlReactSelect';
//import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

//import { deserialize } from 'class-transformer';
// function deserialize(jsonString, ClassType) {
//     const jsonObject = JSON.parse(jsonString);
//     return new ClassType(jsonObject.name, jsonObject.age);
// }

export default function AIStocksAPIs2() {

    const [exch, setExch] = useState()
    const [tkr, setTkr] = useState()
    const [barCt, setBarCt] = useState()
    const [is5Min, setIs5Min] = useState()

    const pythonServerUrl = 'http://localhost:8765'
    const nodeJsServerUrl = 'http://localhost:3002'

    const get_tv_stk_hist=()=>{
        // alert('get_tv_stk_hist')
        try {
            const cmd = 'GET_DATA'; // TODO: cmd_symb not received by the server
            Axios.AxiosHeaders = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
            let is_5Min = is5Min === 'y' ? true : false;
            console.log("Cmd:", cmd, "is_5Min:", is_5Min, "Exch:", exch, "Tkr:", tkr, "BarCt:", barCt)
            Axios.post( pythonServerUrl, { cmd: cmd, is_5Min: is_5Min, exch: exch, tkr: tkr, bar_ct: barCt }).then((data)=>{
                let json_resp = data.data["POST"]; //[{"id":13171,"dt":"2024-12-15 19:00:00","op":2.4475,
                //console.log(json_resp);
                //console.log(json_resp[0].OP);
                const obj_tkrbar = json_resp.map(x => new TkrBar(x.ID, x.DT, x.OP, x.HI, x.LO, x.CL, x.VOL));
                //console.log(obj_tkrbar);
                console.log(TkrBar.print_hdr());
                obj_tkrbar.forEach(itm => {
                    console.log(itm.print_row());
                    // console.log("b: ", itm.id, itm.op, itm.hi, itm.lo, itm.cl, itm.vol, itm.dt);
                });
            })
        } catch (error) {
            alert('get_tv_stk_hist error: ' + error)            
        }
    }

    const addExch=()=>{
        Axios.post(nodeJsServerUrl + 'http://localhost:3002/addStkExchange', { name: exch }).then((data)=>{
            console.log(data)
            if (data.data==='Stock Exchange added') {
                console.log('name: ' + exch)
                document.getElementById("inExch").value = '';
            }
            else {
                alert('Add failed')
            }
            getExchanges()
        })
    }

    const getExchanges=()=>{
        alert("getExchanges");
        Axios.post(nodeJsServerUrl + 'http://localhost:3002/getStkExchanges', { }).then((data)=>{
            if (data === undefined) {
                alert('Data is undefined')
            }
            else {
                let lstExchange = ''
                for (let i = 0; i < data.data.length; i++) {
                    lstExchange += data.data[i].id + ':' + data.data[i].name + ', '
                }
                document.getElementById("lblExchanges").innerHTML = 'Exchanges: ' + lstExchange;
            }
        })
    }

    const addTkr=()=>{
        try {
            let ddl1 = document.getElementById("ddlTkr");
            let tkr_id = ddl1.options[ddl1.selectedIndex].value;

            Axios.post(nodeJsServerUrl + 'http://localhost:3002/addStkSymbol', { ticker: tkr, exchange_id: tkr_id }).then((data)=>{
                console.log(data)
                if (data.data==='Stock ticker added') {
                    console.log('name: ' + tkr)
                    document.getElementById("inTkr").innerHTML = '';
                }
                else {
                    alert('Add failed')
                    alert(data.data)
                }
                getTickers()
            }).catch((err)=>{
                console.log(err)    
                alert('addTkr error cautght')
                alert(err)
            });               
        } catch (error) {
            alert('addTkr error: ' + error)
            
        }
    };

    const getTickers=()=>{
        //let ddl1 = document.getElementById("ddlExch");
        //let exch_id = ddl1.options[ddl1.selectedIndex].value;

        //let url = nodeJsServerUrl + '/getTickers';
        //alert('url: ' + url);
        // Axios.post(pythonServerUrl + '/getTickers', { EXCHID: exch_id }).then((data)=>{
        //     if (data === undefined) {
        //         alert('Data is undefined')
        //     }
        //     else {
        //         let lstTickers = ''
        //         for (let i = 0; i < data.data.length; i++) {
        //             lstTickers += data.data[i].ticker + ':' + data.data[i].name + ', '
        //         }
        //         document.getElementById("lblTickers").innerHTML = 'Exch:Ticker: ' + lstTickers;
        //     }
        // })
    }

    const loadDdlTkr=()=>{
        let ddl1 = document.getElementById("ddlExch");
        let exch_id = ddl1.options[ddl1.selectedIndex].value;

        let url = nodeJsServerUrl + '/getTickers';
        Axios.post(url, { EXCHID: exch_id }).then((data)=>{
            if (data === undefined) {
                alert('Data is undefined')
            }
            else {
                let ddlTkr = document.getElementById("ddlTkr");
                ddlTkr.innerHTML = '';
                for (let i = 0; i < data.data.length; i++) {
                    let option = new Option(data.data[i].TKR, data.data[i].ID);
                    ddlTkr.appendChild(option);
                }
            }
        })
    }

    function onBtnExchClick() {
        const exchanges = [ 
            { name: "NYSE",     value: "52" },
            { name: "NASDAQ",   value: "53" },
            { name: "BITSTAMP", value: "54" } 
        ];

        let ddl1 = document.getElementById("ddlExch");
        ddl1.innerHTML = '';
        exchanges.forEach(exchange => {
            let option = new Option(exchange.name, exchange.value);
            ddl1.appendChild(option);
        });
    }

    function onDdlExchChanged(value) {
        //let thisName = "onDdlExchChanged";
        let thisEl = "ddlExch";
        let effectedEl = "inExch";
        let ddl1 = document.getElementById(thisEl);
        //let selVal = ddl1.options[ddl1.selectedIndex].value;
        let selText = ddl1.options[ddl1.selectedIndex].text;
        let inEl = document.getElementById(effectedEl);
        inEl.value = selText;
        setExch(selText);
        loadDdlTkr();
   }
   
    function onBtnTkrClick() {
        loadDdlTkr();
    }
 
    function onDdlTkrChanged(value) {
        //let thisName = "onDdlTkrChanged";
        let thisEl = "ddlTkr";
        let effectedEl = "inTkr";
        let ddl1 = document.getElementById(thisEl);
        //let selVal = ddl1.options[ddl1.selectedIndex].value;
        let selText = ddl1.options[ddl1.selectedIndex].text;
        let inEl = document.getElementById(effectedEl);
        inEl.value = selText;
        setTkr(selText);
    }
      
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '22%', 
                      backgroundPosition: 'right top', backgroundRepeat: "no-repeat" }}>
            <div style={{opacity: 1.0 }}>
                <TopBar/>
                <div className='homeTable'>
                    <h1>APIs</h1>
                    <h2>Comm w server</h2> 
                    <table>
                        <tbody>
                            <tr>
                                <th width="150px"></th>
                                <th width="150px"></th>
                                <th width="100px"></th>
                                <th width="170px"></th>
                                <th width="180px"></th>
                            </tr>
                            <tr>
                                <td><button onClick={()=>{onBtnExchClick()}}>Select Exchange</button></td>
                                <td><select id="ddlExch" name="ddlExch" onChange={(e)=>{onDdlExchChanged(e.target.value)}}></select></td>
                                <td><label>Exchange:</label></td>
                                <td><input id="inExch" onChange={(e)=>{setExch(e.target.value)}} type="text" style={{width: '100px'}} /></td>
                                <td><button onClick={()=>{addExch()}}>Add Exchange</button></td>
                            </tr>
                            <tr>
                                <td><button onClick={()=>{onBtnTkrClick()}}>Select Ticker</button></td>
                                <td><select id="ddlTkr" name="ddlTkr" onChange={(e)=>{onDdlTkrChanged(e.target.value)}}></select></td>
                                <td><label>Ticker:</label></td>
                                <td><input id="inTkr" onChange={(e)=>{setTkr(e.target.value)}} type="text" style={{width: '100px'}}/></td>
                                <td><button onClick={()=>{addTkr()}}>Add Ticker</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><label>Is 5 min:</label></td>
                                <td><input id="inIs5Min" onChange={(e)=>{setIs5Min(e.target.value);}} type="text" style={{width: '100px'}} /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><label># Bars:</label></td>
                                <td><input id="inBarCt"onChange={(e)=>{setBarCt(e.target.value);}} type="text" style={{width: '100px'}} /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td colspan="3">
                                    <button id="btnGetStkHist"
                                    onClick={()=>{get_tv_stk_hist()}}>Get Stock Data History for {tkr}</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <label>Response:</label><br/>
                        <label id="retKeys"></label><br/>
                        <label id="retData"></label><br/>
                        <label>:End response</label>
                    </div> <br/>

                    <br/><br/>
                    <h2 >VTNews.ai</h2>
                    <table>
                        <colgroup>
                            <col span="1" style={{width:'18%'}} />
                            <col span="1" style={{width:'60%'}} />
                            <col span="1" style={{width:'22%'}} />
                        </colgroup>

                        <tr><td colSpan='3'>Using the VTNews.ai Timelines tab for inspiration. &nbsp;&nbsp;50 Machine Learning Engineers!</td></tr>
                    </table>
                    
                    <h2>FinnHub:</h2>
                    <table>
                        <colgroup>
                            <col span="1" style={{width:'18%'}} />
                            <col span="1" style={{width:'47%'}} />
                            <col span="1" style={{width:'33%'}} />
                        </colgroup>
                        <tr><td className='tdb'>API:</td>
                            <td className='tdb'>api.finnhub.io</td>
                            <td className='tdb'>Plan required.</td>
                        </tr>
                    </table>

                    <h2>polygon.io:</h2>
                    <table>
                        <colgroup>
                            <col span="1" style={{width:'18%'}} />
                            <col span="1" style={{width:'47%'}} />
                            <col span="1" style={{width:'33%'}} />
                        </colgroup>
                        <tr><td className='tdb'>API:</td>
                            <td className='tdb'>api.polygon.io</td>
                            <td className='tdb'>A lot of projects here.</td>
                        </tr>
                    </table>

                    <h2>Screen Scraping</h2>
                    <table>
                        <colgroup>
                            <col span="1" style={{width:'18%'}} />
                            <col span="1" style={{width:'60%'}} />
                            <col span="1" style={{width:'22%'}} />
                        </colgroup>
                        <tr><td colSpan='3'>Found some examples. Page parsing is troublesome.</td></tr>
                    </table>

                    <br/><h2>Stock Market</h2>
                    <table><colgroup><col span="1" style={{width:'18%'}} />
                                    <col span="1" style={{width:'60%'}} />
                                    <col span="1" style={{width:'22%'}} /></colgroup>

                                    <pre>
    <b>C:\A\R\Py_DataReader: py PyGoogleAPIReader.py </b><br />
    Company:  AAPL <br />
    fvurl:  http://finance.google.com/finance/info?client=ig&q=AAPL <br />
    asdf <br />
    Value: Error 404 (Not Found)!!
    </pre>
    <pre>
    <b>C:\A\R\Py_DataReader: py ExA.py</b> <br />
    Symbol:  AAPL <br />
    Current Quote: 'c': 222.91, 'd': -3, 'dp': -1.328, 'h': 225.35, 'l': 220.27, 'o': 220.965, 'pc': 225.91, 't': 1730577600 <br />
    Company Profile: 'country': 'US', 'currency': 'USD', 'estimateCurrency': 'USD', 'exchange': 'NASDAQ NMS - GLOBAL MARKET',  <br />
    'finnhubIndustry': 'Technology', 'ipo': '1980-12-12',  <br />
    'logo': 'https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AAPL.png',  <br />
    'marketCapitalization': 3389154.170916351, 'name': 'Apple Inc', 'phone': '14089961010',  <br />
    'shareOutstanding': 15204.14, 'ticker': 'AAPL',  <br />
    'weburl': 'https://www.apple.com/' <br />
    <br />
    === BEG get_news <br />
    Error fetching news: Error 422: "error":"Wrong date format. Please use 2022-01-15 format for from and to params." <br />
    <br />
    === BEG get_stock_symbols <br />
    Error fetching stock symbols: Error 422: "error":"Missing parameter exchange" <br /> <br />
    </pre>

    <pre>
    <b>C:\A\R\Py_DataReader: py GetMarketData.py coinmarketcap bitcoin 5M </b><br />
    Ct: 4 <br />
    bitcoin, 5m <br />
    <br />
    --- resp.data.id  <br />
    ---'id': 1, 'name': 'Bitcoin', 'symbol': 'BTC', 'slug': 'bitcoin', <br />
    'num_market_pairs': 11793, 'date_added': '2010-07-13T00:00:00.000Z',  <br />
    'tags': <br />
        'mineable', 'pow', 'sha-256', 'store-of-value', 'state-channel', 'coinbase-ventures-portfolio',  <br />
        'three-arrows-capital-portfolio', 'polychain-capital-portfolio', 'binance-labs-portfolio',  <br />
        'blockchain-capital-portfolio', 'boostvc-portfolio', 'cms-holdings-portfolio', 'dcg-portfolio',  <br />
        'dragonfly-capital-portfolio', 'electric-capital-portfolio', 'fabric-ventures-portfolio',  <br />
        'framework-ventures-portfolio', 'galaxy-digital-portfolio', 'huobi-capital-portfolio',  <br />
        'alameda-research-portfolio', 'a16z-portfolio', '1confirmation-portfolio', 'winklevoss-capital-portfolio',  <br />
        'usv-portfolio', 'placeholder-ventures-portfolio', 'pantera-capital-portfolio', 'multicoin-capital-portfolio',  <br />
        'paradigm-portfolio', 'bitcoin-ecosystem', 'ftx-bankruptcy-estate'], 'max_supply': 21000000,  <br />
        'circulating_supply': 19777275,  <br />
        'total_supply': 19777275, 'is_active': 1, 'infinite_supply': False, 'platform': None, 'cmc_rank': 1,  <br />
        'is_fiat': 0, 'self_reported_circulating_supply': None, 'self_reported_market_cap': None,  <br />
        'tvl_ratio': None, 'last_updated': '2024-11-03T21:20:00.000Z',  <br />
        'quote': 'USD': 'price': 69072.88640896493, 'volume_24h': 32582997945.14586, 'volume_change_24h': 69.262,  <br />
        'percent_change_1h': 0.77940034, 'percent_change_24h': -0.54424669, 'percent_change_7d': 2.01784155,  <br />
        'percent_change_30d': 10.6588651, 'percent_change_60d': 19.08424329, 'percent_change_90d': 25.38614978,  <br />
        'market_cap': 1366073469553.8618, 'market_cap_dominance': 59.4255, 'fully_diluted_market_cap': 1450530614588.26,  <br />
        'tvl': None, 'last_updated': '2024-11-03T21:20:00.000Z' <br />
        <br />
    24-11-03 21:20:00 bitcoin [BTC]  Price:        69072.88640896493 <br />
                                    % Chg_1h:         0.77940034 <br />
                                    % Chg_1D:        -0.54424669 <br />
                                    % Chg_1W:         2.01784155 <br />
                                    % Chg_1M:         10.6588651 <br />
                                    % Chg_2M:         19.08424329 <br />
    Traceback (most recent call last): <br />
    File "C:\A\R\Py_DataReader\GetMarketData.py", line 128, in module <br />
        time.sleep(60) <br />
    KeyboardInterrupt <br />
    ^C <br /> 
    </pre>
                    </table>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>

                </div>
            </div>
        </div>
    )
}
