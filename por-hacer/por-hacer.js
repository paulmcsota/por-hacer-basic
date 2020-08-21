const fs = require('fs');
let listadoPorHacer = [];

const crear = (descripcion) => {
   cargarDB();
   let porHacer = {
      descripcion,
      completado: false
   };
   listadoPorHacer.unshift(porHacer);
   guardarDB();
   return listadoPorHacer;
}

const getListado = () => {
   cargarDB();
   return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
   cargarDB();
   const index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
   if (index >= 0) {
      listadoPorHacer[index].completado = completado;
      guardarDB();
      return true;
   } else {
      return false;
   }
}

const borrar = (descripcion) => {
   cargarDB();
   const nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
   if (nuevoListado.length === listadoPorHacer.length) {
      return false;
   } else {
      listadoPorHacer = nuevoListado;
      guardarDB();
      return true;
   }
}
const cargarDB = () => {
   try {
      listadoPorHacer = require('../db/data.json');
   } catch (error) {
      listadoPorHacer = [];
   }
}

const guardarDB = () => {
   const data = JSON.stringify(listadoPorHacer);
   fs.writeFile(`db/data.json`, data, (error) => {
      if (error)
         throw new Error('No se puedo grabar', err);
   });
}

module.exports = {
   crear,
   getListado,
   actualizar, 
   borrar
}