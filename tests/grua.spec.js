import { expect } from 'chai';
import { grua } from '../src/grua.js';

describe('grua', function() {

    context('constructor', function() {

        it('should have a non null description', function() {
            expect(function() {
                const sut = new grua(null);
            }).to.throw();
        });

        it ('should have a non empty description', function() {
            expect(function() {
                const sut = new grua('');
            }).to.throw();
        });

    });

    context('caracteristicas', function() {
        it ('should return empty array', function() {
          const sut = new grua('miGrua');
          expect(sut.caracteristicas).to.be.an('array').lengthOf(0);
        });
    });
});
