"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var guess_num = require("../lib/main.js");
describe("guess_num", function(){
    describe("CompareNumber", function(){

        it("case1: all same numbers and positions ,should return 4A0B", function(){
            expect("4A0B").to.equal(guess_num("1234").CompareNumber("1234","1234"));
            expect("4A0B").to.equal(guess_num("2345").CompareNumber("2345","2345"));
        });

        it("case2:all same numbers and all different positions ,should return 0A4B", function(){
            expect("0A4B").to.equal(guess_num("4321").CompareNumber("1234","4321"));
            expect("0A4B").to.equal(guess_num("5432").CompareNumber("2345","5432"));
        });

        it("case3:part same numbers and positions ,should return XAXB", function(){
            expect("1A0B").to.equal(guess_num("1567").CompareNumber("1234","1567"));
            expect("2A2B").to.equal(guess_num("1243").CompareNumber("1234","1243"));
            expect("3A0B").to.equal(guess_num("1236").CompareNumber("1234","1236"));
        });

        it("case4:part same numbers and all different positions ,should return 0AXB", function(){
            expect("0A1B").to.equal(guess_num("5671").CompareNumber("1234","5671"));
            expect("0A2B").to.equal(guess_num("5612").CompareNumber("1234","5612"));
            expect("0A3B").to.equal(guess_num("5123").CompareNumber("1234","5123"));
        });

        it("case5:all different numbers and positions ,should return 0A0B", function(){
            expect("0A0B").to.equal(guess_num("5678").CompareNumber("1234","5678"));
            expect("0A0B").to.equal(guess_num("5678").CompareNumber("2234","5678"));
        });
    });

    var guess = guess_num("1234")
    describe("AnswerGenerator", function() {
        it("case1:should return 4 digit", function(){
            var number =guess.AnswerGenerator();
            expect(4).to.equal(number.toString().length);
        });

        it("case2:should return diffient 4 digit", function(){
            var number_A = guess.AnswerGenerator();
            var number_B = guess.AnswerGenerator();
            expect(false).to.equal(number_A==number_B);
        });

        it("case3:should return a number", function(){
            var number_A = guess.AnswerGenerator();
            expect(true).to.equal(typeof(number_A)=='number');
        });
    });

    describe("Guess", function() {
        it("should call with '1234' and console.log result", function(){
            sinon.spy(console, 'log');
            sinon.stub(guess, "AnswerGenerator").returns("1234");
            guess.Guess("1234");
            var result = _.flatten(console.log.args).join("\n");
            var expect_string = "4A0B";
            expect(expect_string).to.equal(result);
        });
    });

    var input_arr_one = ["1234","4321","1223","5612","4231","5678"]
    var input_arr_two = ["5678","4321","1223","5612","1234","4231"]
    var input_arr_three = ["1254","4321","1253","5612","4231","5678"]
    describe("main", function() {
        it("case1:should return Cannot input duplicate numbers!", function(){
            guess.main(input_arr_one);
        });

        it("case2:should return Congratulations!", function(){
            guess.main(input_arr_two);
        });

        it("case2:should return Game Over", function(){
            guess.main(input_arr_three);
        });
    });

});
