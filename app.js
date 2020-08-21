const colors = require('colors');
const { argv } = require('./config/yargs');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

const comando = argv._[0];

switch (comando) {
   case 'crear':
      const tarea = crear(argv.descripcion);
      console.log(tarea);
      break;
   case 'listar':
      const listado = getListado();
      for (let tarea of listado) {
         console.log('======Por hacer======'.blue);
         console.log(tarea.descripcion);
         console.log('Estado: ', tarea.completado);
         console.log('====================='.blue);
      }
      break;
   case 'actualizar':
      const actualizado = actualizar(argv.descripcion, argv.completado);
      console.log(actualizado);
      break;
   case 'borrar':
      const borrado = borrar(argv.descripcion);
      console.log(borrado);
      break;
   default:
      console.log('Comando no reconocido.');
      break;
}