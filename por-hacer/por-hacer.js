 const fs = require('fs');


 let listadoPorHacer = [];

 const guardarDB = () => {

     let data = JSON.stringify(listadoPorHacer);

     fs.writeFile('db/data.json', data, (err) => {
         if (err) throw new Error('No se pudo grabar la data', err);
     })

 }

 const cargarDB = () => {

     try {
         listadoPorHacer = require('../db/data.json');
     } catch (error) {
         listadoPorHacer = []
     }
     console.log(listadoPorHacer)
 }


 const getListado = () => {

     cargarDB();
     return listadoPorHacer;

 }

 const actualizar = (descripcion, completado = true) => {
     cargarDB();

     let index = listadoPorHacer.findIndex(tarea => {
         return tarea.descripcion === descripcion;
     })

     if (index >= 0) {
         listadoPorHacer[index].completado = completado;
         guardarDB();
     } else {
         false;
     }
 }


 const crear = (descripcion) => {

     cargarDB();

     let porHacer = {
         descripcion,
         completado: false
     };

     listadoPorHacer.push(porHacer);
     guardarDB();

     return porHacer;

 }

 const borrar = (descripcion) => {

     cargarDB();

     let nuevoListadoPorHacer = listadoPorHacer.filter(tarea => {
         return tarea.descripcion !== descripcion;
     })

     if (listadoPorHacer.length === nuevoListadoPorHacer.length.length) {
         return false;
     } else {
         listadoPorHacer = nuevoListadoPorHacer;
         guardarDB();
         return true;
     }

 }

 module.exports = {
     crear,
     getListado,
     actualizar,
     borrar
 }