
const solution = mtrx => {
    mtrx.forEach(
        function (array) {
            if (array.includes(">") && array.includes("x")) {
                let upPosition = array.findIndex(item => item === ">")
                let xPosition = array.findIndex(item => item === "x")
                if (upPosition < xPosition) {
                    console.log(upPosition, xPosition)
                    return true;
                }
            } else {
                return false;
            }

        })
}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", function() {
    it("", function() {
        assert.deepEqual(solution([
            ['>', ' '],
            [' ', 'x']
        ]), false);
    });

    it("", function() {
        assert.deepEqual(solution([
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', '>', ' ', 'x'],
            [' ', ' ', '', ' ', ' ']
        ]), true);
    });
});
