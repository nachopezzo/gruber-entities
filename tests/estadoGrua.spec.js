import { expect } from 'chai';

describe('estadoGrua', function() {

    context('constructor', function() {

        it('should have a non null description', function() {
            expect(function() {
                const sut = new estadoGrua(null);
            }).to.throw();
        });

        it ('should have a non empty description', function() {
            expect(function() {
                const sut = new estadoGrua('');
            }).to.throw();
        });

    });

    context('getEstadoDeGrua', function() {
        it ('should return empty', function() {
          const sut = new estadoGrua('Desactivo');
          //expect(sut.getEstadoDeGrua).to.be.equals(sut.estadoGrua == "" : "Error al obtener el estado d ela grua"?: );
        });
    });
});
