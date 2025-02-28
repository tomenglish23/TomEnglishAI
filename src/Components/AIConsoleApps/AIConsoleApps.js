import React, {useState} from 'react';
import Axios from 'axios'
import TopBar from '../Menu/TopBar';
import backgroundImage from '../../Images/OldManInDingyNoBG.png';
import TkrBar from '../Helpers/TkrBar';
import '../CSS/styles.css';

//const mysql      = require('mysql');
//const e_intv     = require('./Lib/enumIntv').enumIntv;
const TVDatafeed = require('../AIStocks/TVDatafeed');
//const pdh        = require('../Helpers/PdHelper');
// const sps        = require('./Lib/MySQLSPs');

const pythonServerUrl = 'http://localhost:8765'
const nodeJsServerUrl = 'http://localhost:3002'

const SLEEP_CT = 3;
const RETRIES  = 3;
//let BAR_CT     = 600; // 2+ days
//BAR_CT         = 1000; // 10000

const BASE_URL       = 'tradingview.com';
// const INTV           = "5"; // e_intv.MIN_5;
const USE_TEST_INPUT = false;
const TST_EXCH       = 'BITSTAMP';
const TST_SYMB       = 'XRPUSD';
const GET_ALL        = false;

// const LST_ES1 = [
//   ['NASDAQ', 'AAPL'],
//   ['NASDAQ', 'LAC'],
//   ['NASDAQ', 'QBTS'],
//   ['NASDAQ', 'BBAI']
// ];

const LST_ES = [
  ['BITSTAMP', 'DOGEUSD'],
  ['BITSTAMP', 'XRPUSD'],
  ['NASDAQ', 'AAPL'],
  ['NASDAQ', 'BITF'],
  ['NASDAQ', 'BTBT'],
  ['NASDAQ', 'CLSK'],
  ['NASDAQ', 'HIVE'],
  ['NASDAQ', 'IREN'],
  ['NASDAQ', 'LNZA'],
  ['NASDAQ', 'MARA'],
  ['NASDAQ', 'PLTR'],
  ['NASDAQ', 'QSI'],
  ['NASDAQ', 'TMC']
];

export default function AIConsoleApps() {

    const [exch, setExch] = useState()
    const [tkr, setTkr] = useState()
    const [barCt, setBarCt] = useState()
    const [is5Min, setIs5Min] = useState()
     
    //let USE_TEST_INP = false;
    //let EXCH = 'BITSTAMP';
    //let TKR = 'XRPUSD';
    //et BAR_CT = 10;

    const logger = require('winston');
    logger.level = 'debug';

    function get_tv_stk_hist() {
        try {
            
            // setIs5Min('y');
            // setExch(EXCH);
            // setTkr(TKR);
            // setBarCt(BAR_CT);
            // console.log("Test: ", is5Min, exch, tkr, barCt);
    
            //EXCH, SYMB, BAR_CT = utils.get_parms(USE_TEST_INP, EXCH, SYMB, BAR_CT)
    
            const cmd = 'GET_DATA'; // TODO: cmd_symb not received by the server
            Axios.AxiosHeaders = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
            let is_5Min = is5Min === 'y' ? true : false;
            // setExch(EXCH);
            // setTkr(TKR);
            // setBarCt(BAR_CT);

            console.log("Cmd:", cmd, "is_5Min:", is_5Min, "Exch:", exch, "Tkr:", tkr, "BarCt:", barCt)
            
            Axios.post( pythonServerUrl, { cmd: cmd, is_5Min: is_5Min, exch: exch, tkr: tkr, bar_ct: barCt }).then((data)=>{
                let json_resp = data.data["POST"]; //[{"id":13171,"dt":"2024-12-15 19:00:00","op":2.4475,
                console.log(json_resp);
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
 
    



    
    function sleep(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    function finToDb(p_exch, p_symb, p_intv, p_bar_ct, p_base_url, p_api_id) {
      const exchSymb = `${p_exch}:${p_symb}`;
      const pre = `${exchSymb.padEnd(18)}`;
      const blank18 = ''.padEnd(18);
    
      let dfIn = null;
      let retryCt = RETRIES;
      while (retryCt > 0) {
        let doCont = true;
        try {



            //const tv = new TVDatafeed(logger);
            const tv = new TVDatafeed();
            dfIn = tv.getHist(p_symb, p_exch, p_intv, p_bar_ct);



          if (!dfIn) {
            console.log(`${pre}!!! No data returned.`);
            doCont = false;
          } else {
            doCont = true;
            break;
          }
        } catch (error) {
          console.log(`${pre}${SLEEP_CT} second sleep. !!! Datafeed Exception: ${error}`);
          sleep(SLEEP_CT);
          retryCt -= 1;
          doCont = false;
        }
        if (doCont) {
          const ct = dfIn.open.length;
          const sCtExchSymb = `${ct} ${exchSymb}`;
          console.log(`${blank18}${sCtExchSymb} rows <-from- ${p_base_url}`);


    
          //const df = pdh.stkHistCreateDf(dfIn, ct, p_api_id);


    
          // TODO: Call Axios
          //sps.stkHistInsert(ct, df);
          console.log(`${blank18}${sCtExchSymb} rows   -to-> DB`);
          sleep(SLEEP_CT);
        }
      }
    }

    function getApiId(p_base_url) {
      // TODO: Call Axios
      const _id = 2;
    //   const res = sps.stkApiGetByBaseUrl(p_base_url);
    //   const _id = res && res.length > 0 ? res[0][0] : null;
    //   if (!_id) {
    //     console.log('!!! No data returned from sp_stk_api_GET_byBaseUrl');
    //     process.exit();
    //   }
      return _id;
    }

    function getTVHist() {    
        logger.configure({
            level: 'info',
            transports: [ new logger.transports.Console() ] });
  
      const apiId = getApiId(BASE_URL);
    
      if (GET_ALL) {
        for (const es of LST_ES) {
          finToDb(es[0], es[1], "1", "100", BASE_URL, apiId);
        }
      } else {
        const EXCH = USE_TEST_INPUT ? TST_EXCH : prompt('Enter exchange: ').toUpperCase();
        const SYMB = USE_TEST_INPUT ? TST_SYMB : prompt('Enter ticker: ').toUpperCase();
          finToDb(EXCH, SYMB, "1", "100", BASE_URL, apiId);
      }
    }

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '15%', 
                      backgroundPosition: 'right top', backgroundRepeat: "no-repeat" }}>
            <div style={{opacity: 1.0 }}>
                <TopBar/>
                <div className='homeTable'>
                    <h1><center>Console Apps</center></h1>
                    <h3>Get Stock History &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        ...&nbsp;&nbsp; ConsDbGetHist.py</h3> 
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
                                <td></td>
                            </tr>
                            <tr>
                                <td><button onClick={()=>{onBtnTkrClick()}}>Select Ticker</button></td>
                                <td><select id="ddlTkr" name="ddlTkr" onChange={(e)=>{onDdlTkrChanged(e.target.value)}}></select></td>
                                <td><label>Ticker:</label></td>
                                <td><input id="inTkr" onChange={(e)=>{setTkr(e.target.value)}} type="text" style={{width: '100px'}}/></td>
                                <td></td>
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
                    <pre>
                        &nbsp;
                    </pre>
                    <h3>Fetch TradingView data into the DB &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        ...&nbsp;&nbsp; ConsTvGetHist.py</h3> 
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <pre>
                                        For now, use a Command Window:<br />
                                (envB) C:\B&gt;py constvgethist.py -t AAPL -i 1 -b 100<br />
                                - constvgethist.py AAPL 1 100 NASDAQ<br />  
                                </pre>                                  
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button id="btnGetStkHist" onClick={()=>{getTVHist()}}>Get TV History</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <pre>
                        &nbsp;
                    </pre>
                    <h3>Get the latest TradingView ticker entry &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        ...&nbsp;&nbsp; ConsTvGetOne.py</h3> 
                    <table>
                        <tbody>
                        <tr>
                                <td>
                                    <pre>
                                        For now, use a Command Window:<br />
                                (envB) C:\B&gt;py ConsTvGetOne.py<br />
                                - <br />  
                                </pre>                                  
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <pre>
                        &nbsp;
                    </pre>
                    <h3>Bollinger Band Exercises &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        ...&nbsp;&nbsp; ConsBollBand.py</h3> 
                    <table>
                        <tbody>
                        <tr>
                                <td>
                                    <pre>
                                        For now, use a Command Window:<br />
                                (envB) C:\B&gt;py ConsBollBand.py<br />
                                - <br />  
                                </pre>                                  
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}