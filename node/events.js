const events = require("events");
const emitter = new events.EventEmitter();

emitter.on("knock", () => console.log("Whos there?"));

emitter.on("knock", () => console.log("Go away!"));

emitter.emit("knock");
