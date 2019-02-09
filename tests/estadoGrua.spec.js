import { expect } from "chai";
import { estadoGrua } from "../src/estadoGrua";

describe("estadoGrua", function() {
  context("constructor", function() {
    it("Should have a non null description", function() {
      expect(function() {
        const sut = new estadoGrua(null);
      }).to.throw();
    });

    it("Should have a non empty description", function() {
      expect(function() {
        const sut = new estadoGrua("");
      }).to.throw();
    });
  });

  context("getEstadoGrua", function() {
    it("Can´t get status of the grua", function() {
      const sut = new estadoGrua("Estado");
      expect(sut.getEstadoDeGrua).to.throw;
    });
  });

  context("setEstadoGrua", function() {
    it("Can´t set status of the grua", function() {
      const sut = new estadoGrua("Estado");
      expect(sut.setEstadoDeGrua).to.throw;
    });
  });
});
