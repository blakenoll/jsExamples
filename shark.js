const readline = require("readline");

let sharkTop = "\\_____)\\_____";
let sharkMiddle = "/--v____ __`<";
let sharkBottom = "        )/    ";

const style = ["background: darkseagreen", "color: powderBlue"].join(";");

// console.log("", sharkTop, "\n", sharkMiddle, "\n", sharkBottom);

// setInterval(() => {
//   sharkTop = " " + sharkTop;
//   sharkMiddle = " " + sharkMiddle;
//   sharkBottom = " " + sharkBottom;
//   readline.clearLine(process.stdout);
//   readline.cursorTo(process.stdout, 0);
//   process.stdout.write(`${sharkTop}\n${sharkMiddle}\n${sharkBottom}`);
// }, 100);

// process.stdout.write(`\n${sharkTop}\n${sharkMiddle}\n${sharkBottom}\n`);
// process.stdout.clearLine();
// process.stdout.cursorTo(0);
// process.stdout.write(`Blake`);

function writeWaitingPercent(p) {
  //readline.clearLine(process.stdout);
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(`waiting ... ${p}%`);
}
let p = 0;
const showProgress = setInterval(() => {
  p += 1;

  writeWaitingPercent(p);
  if (p == 100) {
    clearInterval(showProgress);
  }
}, 100);
