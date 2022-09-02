const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      description: "Número a la que se creará la tabla de multiplicar",
    },
    l: {
      alias: "listar",
      type: "boolean",
      demandOption: false,
      default: false,
      description: "Opción para imprimir en consola la tabla de multiplicar",
    },
    h: {
      alias: "hasta",
      type: "number",
      demandOption: false,
      default: 10,
      description: "Indica hasta donde llegará la multiplicación",
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "La base tiene que ser un número. Ingrese de nuevo..";
    }

    if (isNaN(argv.hasta)) {
      throw 'La opción "hasta" tiene que ser un número. Ingrese de nuevo..';
    }

    return true;
  }).argv;

module.exports = argv;
