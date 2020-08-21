const colors = require('colors');
const descripcion = {
   demand: true,
   alias: 'd',
   desc: 'Descripcion de la tarea por hacer'
}
const completado = {
   alias: 'c',
   default: true,
   desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
            .command('crear'.blue, 'Crea un elemento por hacer', {
               descripcion
            })
            .command('actualizar'.blue, 'Actualizar el estado completado   de una tarea', {
               descripcion, 
               completado
            })
            .command('borrar'.blue, 'Borra una tarea existente', {
               descripcion
            })
            .help()
            .argv;

module.exports = {
   argv
}
