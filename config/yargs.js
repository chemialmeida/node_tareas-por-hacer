const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o no la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualizar una tarea a completado', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar la tarea seleccionada', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}