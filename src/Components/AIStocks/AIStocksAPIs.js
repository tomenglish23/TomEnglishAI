import React, {useState} from 'react';
import Axios from 'axios';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

//import Select from 'react-select';

//import DDLReactSelect from './ddlReactSelect';
//import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

//import { deserialize } from 'class-transformer';
// function deserialize(jsonString, ClassType) {
//     const jsonObject = JSON.parse(jsonString);
//     return new ClassType(jsonObject.name, jsonObject.age);
// }

export default function AIStocksAPIs() {

    const [exch, setExch] = useState()
    const [tkr, setTkr] = useState()
    const [barCt, setBarCt] = useState()
    const [is5Min, setIs5Min] = useState()

    //const pythonServerUrl = 'http://localhost:8765'
    const nodeJsServerUrl = 'http://localhost:3002'

    const get_tv_stk_hist=()=>{
        // alert('get_tv_stk_hist')
        try {

            const cmd = 'GET_DATA'; // TODO: cmd_symb not received by the server
            /* Axios.AxiosHeaders = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            } */
            let is_5Min = is5Min === 'y' ? true : false;
            console.log("Cmd:", cmd, "is_5Min:", is_5Min, "Exch:", exch, "Tkr:", tkr, "BarCt:", barCt)
            
            /* Axios.post( pythonServerUrl, { cmd: cmd, is_5Min: is_5Min, exch: exch, tkr: tkr, bar_ct: barCt }).then((data)=>{
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
            })  */

        } catch (error) {
            alert('get_tv_stk_hist error: ' + error)            
        }
    }

    const addExch=()=>{
        /* Axios.post(nodeJsServerUrl + 'http://localhost:3002/addStkExchange', { name: exch }).then((data)=>{
            console.log(data)
            if (data.data==='Stock Exchange added') {
                console.log('name: ' + exch)
                document.getElementById("inExch").value = '';
            }
            else {
                alert('Add failed')
            }
            getExchanges()
        }) */
    }

    /* const getExchanges=()=>{
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
    } */

    const addTkr=()=>{
        try {
            /* let ddl1 = document.getElementById("ddlTkr");
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
            });   */             
        } catch (error) {
            alert('addTkr error: ' + error)
            
        }
    };

    /* const getTickers=()=>{
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
    } */

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
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>Stock APIs</h1>
                <p>APIs to retrieve stock data</p>
                <p>&nbsp;</p>
                <center><table>
                    <tbody>
                        <tr><td>Front end: React.js</td></tr>
                        <tr><td>Back end: Node.js and Python</td></tr>
                        <tr><td>Internal communications: Sockets</td></tr>
                        <tr><td>External: TradingView.com and FinnHub.io</td></tr>
                    </tbody>
                </table></center>
            </header>            
            <main>
                    <h2>Python Server Communications</h2> 
                    <p>&nbsp;</p>
                    <p><b><strong><i>&nbsp;&nbsp;&nbsp;&nbsp;
                                  Sorry for the inconvenience ... Except for "Select Exchange", buttons have been disabled.
                                  </i></strong></b></p>
                    <p>&nbsp;</p>
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
                                <td><button 
                                            onClick={()=>{onBtnExchClick()}}
                                            >Select Exchange</button></td>
                                <td><select id="ddlExch" name="ddlExch" 
                                            onChange={(e)=>{onDdlExchChanged(e.target.value)}}
                                            ></select></td>
                                <td><label>Exchange:</label></td>
                                <td><input id="inExch" 
                                           onChange={(e)=>{setExch(e.target.value)}} 
                                           type="text" style={{width: '100px'}} /></td>
                                <td><button 
                                           onClick={()=>{addExch()}}
                                           >Add Exchange</button></td>
                            </tr>
                            <tr>
                                <td><button 
                                        onClick={()=>{onBtnTkrClick()}}
                                        >Select Ticker</button></td>
                                <td><select id="ddlTkr" name="ddlTkr" 
                                            onChange={(e)=>{onDdlTkrChanged(e.target.value)}}
                                            ></select></td>
                                <td><label>Ticker:</label></td>
                                <td><input id="inTkr" 
                                           onChange={(e)=>{setTkr(e.target.value)}} 
                                           type="text" style={{width: '100px'}}/></td>
                                <td><button 
                                           onClick={()=>{addTkr()}} 
                                    >Add Ticker</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><label>Is 5 min:</label></td>
                                <td><input id="inIs5Min" 
                                            onChange={(e)=>{setIs5Min(e.target.value);}} 
                                            type="text" style={{width: '100px'}} /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><label># Bars:</label></td>
                                <td><input id="inBarCt" 
                                           onChange={(e)=>{setBarCt(e.target.value);}} 
                                           type="text" style={{width: '100px'}} /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td colspan="3">
                                    <button id="btnGetStkHist"
                                            onClick={()=>{get_tv_stk_hist()}}
                                            >Get Stock Data History for {tkr}</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </main>
        </div>
    )
}
