import {estadoGrua}  from '../src/estadoGrua.js'

export class grua {
  /**
   * Construye una nueva instancia de la clase grua.
   * @param {string} descripcion Descripción de la grua.
   */
  constructor(descripcion) {
    if (!descripcion) {
      throw new Error("Debe especificar la descripcion de la grua");
    }
    this.descripcion = descripcion;
  }

  /**
   * Devuelve las caracteristicas de la grua.
   */
  get caracteristicas() {
    return [];
  }

  get getEstado(){
    return estadoGrua.getEstado();
  }
}
