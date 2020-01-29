const zlib = require("zlib");
const gzip = zlib.createGzip();
const fs = require("fs");
const inp = fs.createReadStream("composition.js");
const out = fs.createWriteStream("composition.js.gz");

inp
  .pipe(gzip)
  .on("error", () => {
    // handle error
  })
  .pipe(out)
  .on("error", () => {
    // handle error
  });
input = fs.readFileSync("events.js");
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    fs.writeFileSync("./events.js.gz", buffer);
  }
});
