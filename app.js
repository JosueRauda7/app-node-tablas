const colors = require("colors");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

let base = argv.base;
let listar = argv.listar;
let hasta = argv.hasta;

console.clear();

// console.log(argv);

crearArchivo(base, listar, hasta)
  .then((res) => console.log(res.bgCyan))
  .catch((err) => console.log(err));
