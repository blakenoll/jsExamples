function surfer() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("🏄🏼‍♂️");
    }, 2000);
  });
}

async function shaka() {
  const msg = await surfer();
  console.log("🤙🏼  ", msg);
}

shaka();

// Promise returning

async function hello() {
  return "Hello Alligator";
}

const b = hello();

console.log(b); // will log a promise object

b.then(x => console.log(x)); // will log actual return value

// error handeling

function yayOrNay() {
  return new Promise((resolve, reject) => {
    const val = Math.round(Math.random() * 1);
    val ? resolve("Yay") : reject("Nay");
  });
}

async function getYayOrNay() {
  try {
    const result = await yayOrNay();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getYayOrNay();
getYayOrNay();
getYayOrNay();
getYayOrNay();
