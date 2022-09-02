const fs = require("fs");

const crearArchivo = async (numero = 1, listar, hasta) => {
  try {
    let salida = "";

    salida = `TABLA DEL ${numero}`;
    for (let i = 0; i <= hasta; i++) {
      salida += `\n${numero} X ${i} = ${numero * i}`;
    }

    if (listar) {
      console.log(salida);
    }

    let respuesta = "";

    await fs.writeFile(`./tablas/tabla-${numero}.txt`, salida, (err) => {
      if (err) throw err;
    });
    respuesta = `Tabla del ${numero} ha sido creado correctamente`;

    return respuesta;
  } catch (err) {
    throw err;
  }
};

module.exports = { crearArchivo };
