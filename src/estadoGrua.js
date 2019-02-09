export class estadoGrua {
  /**
   * Constructor de la Clase Estado de a Grua
   * @param {string} estado Status de la grua.
   */
  constructor(nuevoEstado) {
    if (!nuevoEstado) {
      throw new Error("Should specify the status of the Grua");
    }
    this.estado = nuevoEstado;
  }

  /**
   * Return Status of grua.
   */
  get getEstadoDeGrua() {
    return this.estado;
  }

  /**
   * Set Status of grua.
   */
  set setEstadoDeGrua(nuevoEstado) {
    this.estado = nuevoEstado;
  }
}
