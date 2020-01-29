function intro(name, job) {
  console.log(`My name is ${name} and I am a ${job}`);
}
// .apply(valueForThis, arrayOfArgs)
intro.apply(undefined, ["Blake", "Software Engineer"]);
// .call(valueForThis, arg1, arg2, ...)
intro.call(undefined, "BLake", "Software Engineer");
