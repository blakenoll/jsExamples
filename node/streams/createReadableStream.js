/**
 * readable streams simply read a stream but do not alter it
 */

const { Readable } = require("stream");

const inStream = new Readable({
  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null); // signals end of stream
    }
  }
});

inStream.currentCharCode = 65;
// process.stdout will call read unitl the stream ends
inStream.pipe(process.stdout);
