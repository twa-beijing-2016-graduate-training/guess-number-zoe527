"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var CompareNumber = require("../lib/main.js");


describe("CompareNumber", function(){

    it("case1: all same numbers and positions ,should return 4A0B", function(){
        expect("4A0B").to.equal(CompareNumber("1234","1234"));
        expect("4A0B").to.equal(CompareNumber("2345","2345"));
    });

    it("case2:all same numbers and all different positions ,should return 0A4B", function(){
        expect("0A4B").to.equal(CompareNumber("1234","4321"));
        expect("0A4B").to.equal(CompareNumber("2345","5432"));
    });

    it("case3:part same numbers and positions ,should return XAXB", function(){
        expect("1A0B").to.equal(CompareNumber("1234","1567"));
        expect("2A2B").to.equal(CompareNumber("1234","1243"));
        expect("3A0B").to.equal(CompareNumber("1234","1236"));
    });

    it("case4:part same numbers and all different positions ,should return 0AXB", function(){
        expect("0A1B").to.equal(CompareNumber("1234","5671"));
        expect("0A2B").to.equal(CompareNumber("1234","5612"));
        expect("0A3B").to.equal(CompareNumber("1234","5123"));
    });

    it("case5:all different numbers and positions ,should return 0A0B", function(){
        expect("0A0B").to.equal(CompareNumber("1234","5678"));
        expect("0A0B").to.equal(CompareNumber("2234","5678"));
    });
});