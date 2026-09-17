const masterbrain = {
  level: 1,
  loglnit: function () {
    console.log("master brain initalized");
  },
  loggreet: greet(),
};

masterbrain.loglevel = function () {
  console.log("master mrain level:" + this.level);
};

function greet() {
  console.log("brain says hello");
}

masterbrain.loggreet = greet;

masterbrain.loglnit();
masterbrain.loglevel();
masterbrain.loggreet();
