const { spawn } = require("child_process");
const os = require("os");

const ls = spawn("ls", ["-lh", "/Users/blakenoll"]);

ls.stdout.on("data", data => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", data => {
  console.log(`stderr: ${data}`);
});

ls.on("close", code => {
  console.log(`child process exited with code ${code}`);
});

console.log("Architecture:", os.arch());
console.log("Number of CPUs:", os.cpus().length / 2);
console.log("Free Memory:", (os.freemem() / 1073741824).toFixed(2), "GB");
console.log("OS Platform:", os.platform());
