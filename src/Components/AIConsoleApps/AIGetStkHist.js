import React, {useState} from 'react';
import Axios from 'axios';
import TopBar from '../Menu/TopBar';
import backgroundImage from '../../Images/tom_english_ai_logo.jpeg';
import TkrBar from '../Helpers/TkrBar';
import '../CSS/styles.css';

//import Select from 'react-select';

//import DDLReactSelect from './ddlReactSelect';
//import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

//import { deserialize } from 'class-transformer';
// function deserialize(jsonString, ClassType) {
//     const jsonObject = JSON.parse(jsonString);
//     return new ClassType(jsonObject.name, jsonObject.age);
// }

export default function AIGetStkHist() {

    const [exch, setExch] = useState()
    const [tkr, setTkr] = useState()
    const [barCt, setBarCt] = useState()
    const [is5Min, setIs5Min] = useState()
    const [pyServerPrint, setPyServerPrint] = useState()
    //let tkr = '';
    const pythonServerUrl = 'http://localhost:8765'
    const nodeJsServerUrl = 'http://localhost:3002'

    const togglePyServerPrint=()=>{
        try {
            let pyServerPrint1 = 'PyServer Print: Off';
            let btn = document.getElementById("btnPyServerPrint");
            if (btn.innerHTML === 'PyServer Print: On') {
                pyServerPrint1 = 'PyServer Print: Off';
            } else {
                pyServerPrint1 = 'PyServer Print: On';
            }
            setPyServerPrint(pyServerPrint1);
            btn.innerHTML = pyServerPrint1;
        } catch (error) {
            alert('togglePyServerPrint error: ' + error)            
        }
    }

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
            Axios.post( pythonServerUrl, { cmd: cmd, is_5Min: is_5Min, exch: exch, tkr: tkr, bar_ct: barCt, pyServerPrint: pyServerPrint }).then((data)=>{
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
                    if (i === 0) {
                        console.log("i = 0");
                        let tkr_val = data.data[i].TKR;
                        console.log(tkr_val);
                        setTkr(tkr_val);
                        console.log(tkr);
                        let inE2 = document.getElementById("inTkr");
                        inE2.value = tkr_val;
                    }
                }
                // console.log("tkr: ", tkr)
                // let inE2 = document.getElementById("inTkr");
                // inE2.value = tkr;
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
        let inE1 = document.getElementById("inExch");
        inE1.value = exchanges[0].name;
        //let ddlE2 = document.getElementById("ddlTkr");

        console.log("inE2: ");

        let inTkr = document.getElementById("inTkr");
        if (inTkr.value) {
            console.log("inTkr: ", inTkr.value);
            //tkr = inTkr.value;
            //setTkr(inTkr.value);
            console.log("tkr: ", tkr);
            inTkr.innerHTML = tkr;
        }
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
        getTickers();
   }
   
    function onBtnTkrClick() {
        getTickers();
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
        //tkr = selText;
        //setTkr(selText);
    }
      
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '22%', 
                      backgroundPosition: 'right top', backgroundRepeat: "no-repeat" }}>
            <div style={{opacity: 1.0 }}>
                <TopBar/>
                <div className='homeTable'>
                    <h1>Get Stock History</h1>
                    <h2>Comm w server</h2> 
                    <table>
                        <tbody>
                            <tr>
                                <th width="150px"></th>
                                <th width="150px"></th>
                                <th width="100px"></th>
                                <th width="180px"></th>
                                <th width="180px"></th>
                            </tr>
                            <tr>
                                <td><button onClick={()=>{onBtnExchClick()}}>Select Exchange</button></td>
                                <td><select id="ddlExch" name="ddlExch" 
                                     onChange={(e)=>{onDdlExchChanged(e.target.value)}}></select></td>
                                <td><label>Exchange:</label></td>
                                <td><input id="inExch" 
                                     onChange={(e)=>{setExch(e.target.value)}} type="text" style={{width: '100px'}} /></td>
                                <td><button onClick={()=>{addExch()}}>Add Exchange</button></td>
                            </tr>
                            <tr>
                                <td><button onClick={()=>{onBtnTkrClick()}}>Select Ticker</button></td>
                                <td><select id="ddlTkr" name="ddlTkr" 
                                     onChange={(e)=>{onDdlTkrChanged(e.target.value)}}></select></td>
                                <td><label>Ticker:</label></td>
                                <td><input id="inTkr" 
                                     onChange={(e)=>{setTkr(e.target.value)}} type="text" style={{width: '100px'}}/></td>
                                <td><button onClick={()=>{addTkr()}}>Add Ticker</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><label>Is 5 min:</label></td>
                                <td><input id="inIs5Min" 
                                     onChange={(e)=>{setIs5Min(e.target.value);}} type="text" style={{width: '100px'}} /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><label># Bars:</label></td>
                                <td><input id="inBarCt" 
                                     onChange={(e)=>{setBarCt(e.target.value);}} type="text" style={{width: '100px'}} /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td colspan="2">
                                    <button id="btnGetStkHist"
                                    onClick={()=>{get_tv_stk_hist()}}>Get History for {tkr}</button>
                                </td>
                                <td>
                                    <button id="btnPyServerPrint" 
                                    onClick={()=>{togglePyServerPrint()}}>PyServer Print: Off</button>&nbsp;
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

                </div>
            </div>
        </div>
    )
}
