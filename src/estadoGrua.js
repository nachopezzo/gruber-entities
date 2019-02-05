  var estado = {
    ACTIVO : {value: 0, name: "Activo", code: "A"}, 
    DESACTIVO: {value: 1, name: "Desactivo", code: "D"}
  };

export class estadoGrua{

    /*
    * Constructor de la Clase Estado de a Grua
    */
    constructor(nuevoEstado) {
        super(nuevoEstado);
        if (!nuevoEstado) {
            throw new Error("Debe especificar el estado de la grua");
        }
        this.estado = nuevoEstado.DESACTIVO;
    }

    /**
     * Devuelve las caracteristicas de la grua.
     */
    get getEstadoDeGrua() {
        return this.estado;
    }

    set setEstadoDeGrua(nuevoEstado){
        this.estado = nuevoEstado;
    }
}
