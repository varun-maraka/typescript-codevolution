"use strict";
var EyeColor;
(function (EyeColor) {
    EyeColor[EyeColor["BLACK"] = 1] = "BLACK";
    EyeColor[EyeColor["BROWN"] = 5] = "BROWN";
    EyeColor[EyeColor["BLUE"] = 10] = "BLUE";
})(EyeColor || (EyeColor = {}));
;
var myEyeColor = EyeColor.BLACK;
console.log(myEyeColor);
console.log(EyeColor[myEyeColor]);
console.log(EyeColor[1]);
/// Arrays
var strArr1 = ["Hello", "Hi"];
var strArr2 = ["hello", "How are you"];
var anyArr = ['Hello', 10, true];
//let firstTup: [string, number] = ["heoo",20,"dfe",32] // not possible
var firstTup = ["heoo", 20];
console.log(firstTup);
console.log(firstTup[0]);
//firstTup[2]=100; // not possible
//constructors
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return Person;
}());
;
//Above code is equal to below one
var Person1 = /** @class */ (function () {
    function Person1(fname, lname) {
    }
    return Person1;
}());
//# sourceMappingURL=45-enum.js.map