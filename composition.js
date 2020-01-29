const barker = state => ({
  bark: () => console.log("woof, I am " + state.name)
});

const driver = state => ({
  drive: () => console.log((state.position = state.position + state.speed))
});

const murderRobotDog = name => {
  const state = {
    name,
    speed: 100,
    position: 0
  };
  /** compose functionality of murderRobotDog.
      assign takes an object as the first param and 
      then appends values from remaining params. **/
  return Object.assign({}, barker(state), driver(state));
};

murderRobotDog("fido").bark();

const robotDog = murderRobotDog("fidoe");

robotDog.bark();
robotDog.drive();
