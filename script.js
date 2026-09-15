/**
 * functions are variables
 */

function double(number) {
  console.log("first version");
  return number * 2;
}

const mynubmer = 4;
const mystring = "john";

console.log(typeof double);
double(4);

double = function (number) {
  console.log("secound version");
  return number + number;
};

double(5);

/**
 * anonomus function
 */
const myarray = [1, 2, 3];
console.log([4, 5, 6]);

const myfunction = function () {
  console.log("anonomus function");
};

console.log(function () {
  console.log("anonomus function 2");
});

/**
 * object function
 */

const dog = {
  name: "sparky",
  age: 4,
  whine: function () {
    console.log("whine");
  },
};

dog.bark = function () {
  console.log(this.name + " whoof");
};

dog.bark();
dog.whine();

/**
 * function as argunments (callbacks)
 */

function showscore(score) {
  console.log("score:" + score);
}

function showstartingscore(func) {
  func(0);
}

showstartingscore(showscore);

function message1() {
  console.log("first is the worst");
}

function message2() {
  console.log("secound is best");
}

function constructmessage(f1, f2) {
  f1();
  f2();
}

constructmessage(message1, function () {
  console.log("hello");
});

/**
 * closures (returning functions from other functions)
 */

function makeagreetingfunc(greeting) {
  let localgreeting = greeting;

  let mygreetingfunc = function (message) {
    console.log(localgreeting + " " + message);
  };

  return mygreetingfunc;
}

const hellofunc = makeagreetingfunc("hello");
hellofunc("joe");

const howdyfunc = makeagreetingfunc("howdy");
howdyfunc("max");

function makecounter() {
  let count = 0;
  return function () {
    count = count + 1;
    return count;
  };
}

const next = makecounter();
console.log(next());
console.log(next());
