//const readline = require('readline');
//const { exec } = require('child_process');

// function getParms(askForInput, exch, tkr, barCt) {
//   if (askForInput) {
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//     });

//     rl.question('Enter exchange: ', (answer) => {
//       exch = answer.toUpperCase();
//       rl.question('Enter ticker: ', (answer) => {
//         tkr = answer.toUpperCase();
//         rl.question('Enter bar count: ', (answer) => {
//           barCt = parseInt(answer);
//           rl.close();
//         });
//       });
//     });
//   }
//   return [exch, tkr, barCt];
// }

// function setAlarm(interval, freq, duration, repeat) {
//   for (let i = 0; i < repeat; i++) {
//     exec(`powershell -c "[console]::beep(${freq}, ${duration})"`);
//     sleep(interval);
//   }
// }

// function sleep(seconds) {
//   return new Promise(resolve => setTimeout(resolve, seconds * 1000));
// }

// function getExchTkr(askForInput, exch, tkr) {
//   if (askForInput) {
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//     });

//     rl.question('Enter exchange: ', (answer) => {
//       exch = answer.toUpperCase();
//       rl.question('Enter ticker: ', (answer) => {
//         tkr = answer.toUpperCase();
//         rl.close();
//       });
//     });
//   }
//   return [exch, tkr];
// }

// function printRows(dic) {
//   let prevHi = 0;
//   let prevLo = 0;
//   let isFvg = false;
//   const headTailCt = 1000;
//   let isHiLoSmall = false;
//   const ct = dic.length;

//   console.log('');
//   console.log(
//     '  i     id     datetime       op        cl        lo        hi      vol    diff_hi  diff_lo  dir  hilo  fvg'
//   );
//   console.log(
//     '----- ------- ------------ -------- -------- -------- -------- ------- -------- -------- --- ---- ---'
//   );

//   dic.forEach((item, i) => {
//     if (i > ct - headTailCt) {
//       const hiLo = item.HI - item.LO;
//       isHiLoSmall = hiLo < 0.023;
//       const isHlsTxt = isHiLoSmall ? 'thin' : '   ';

//       const isGreen = item.CL > item.OP;
//       const isRed = item.CL < item.OP;
//       isFvg = item.LO > prevHi && isGreen;

//       console.log(
//         `${i.toString().padStart(5)} ${item.ID.toString().padStart(7)} ${item.DT.replace(/-/g, '').replace('202', '2').substring(0, 12)} ${item.OP.toFixed(6).padStart(8)} ${item.CL.toFixed(6).padStart(8)} ${item.LO.toFixed(6).padStart(8)} ${item.HI.toFixed(6).padStart(8)} ${item.VOL.toString().padStart(7)} ${(item.HI - prevHi).toFixed(5).padStart(8)} ${(item.LO - prevLo).toFixed(5).padStart(8)} ${isGreen ? '  ^' : isRed ? 'v  ' : '   '} ${isHlsTxt} ${isFvg ? 'FVG' : '   '}`
//       );
//     }
//     if (i === headTailCt) {
//       console.log('');
//     }
//     prevHi = item.HI;
//     prevLo = item.LO;
//   });

//   console.log(
//     '----- ------- ------------ -------- -------- -------- -------- ------- -------- -------- --- ---- ---'
//   );
//   console.log(
//     '  i     id     datetime       op        cl        lo        hi      vol    diff_hi  diff_lo  dir  hilo  fvg'
//   );
//   console.log(' ');
// }
