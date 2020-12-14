enum EyeColor {BLACK=1, BROWN=5, BLUE=10};

var myEyeColor = EyeColor.BLACK;

console.log(myEyeColor);
console.log(EyeColor[myEyeColor]);
console.log(EyeColor[1]);
/// Arrays
let strArr1:string[] = ["Hello","Hi"];
let strArr2:Array<string> = ["hello","How are you"];
let anyArr: any[] = ['Hello', 10, true];
//let firstTup: [string, number] = ["heoo",20,"dfe",32] // not possible
let firstTup: [string, number] = ["heoo",20];
console.log(firstTup); console.log(firstTup[0]);
//firstTup[2]=100; // not possible

//constructors
class Person{
    public fname:string;
    public lname:string;
    constructor(fname:string,lname:string){
        this.fname=fname;
        this.lname=lname;
    }
};
//Above code is equal to below one
class Person1{
    constructor(fname:string,lname:string){
        
    }
}