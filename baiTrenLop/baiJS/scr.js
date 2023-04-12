alert ("Hello world!");
//JavaScrift Syntax( cú pháp khai báo )
//variable
//const
//var
//let
let formatted = true;
if (formatted){
    console.log("JavaScrift!");
}
//Statements
let message = "Welcome to my website";
console.log(message);
if (window.localStorage) {
    console.log('JavaScrift support localstorage')
}
//Identifiers
//a-z, A-Z,_,$,0-9
let a1;
let a_b;
//Comment 
//Single line
/*Block
comment*/
//Expression biểu thức như c
//Data type
let counter =100; //counter là số
console.log(typeof(counter));
counter = false;//Boonlean
console.log(typeof(counter));
counter = "aptech";
console.log(typeof(counter));
let data;
console.log(typeof(data));//undefined
//object data type
let obj = null;
console.log(typeof obj);
let num = 100;
let price = 12.3;
let discount = 0.2;
//Check min and max nunber in js
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
//NaN not a number
console.log('T'/2);//NaN
console.log(NaN);//NaN
let str = 'Java';
str = str + 'Scrift';
console.log(str);
//String
let s = 'JavaScrift';
s[4]='s';
console.log(s);
//Boonlean
console.log(Boolean('connect'));//true
console.log(Boolean(''));//false
//object type
let studentObject = {};
console.log(typeof(studentObject));
//khai bao
let employee = {
    firstName : 'Nguyen',
    lastName : 'Phu Trong'
};
//truy xuat tenobj.tenThuocTinh
console.log(employee.firstName);
console.log(employee.lastName);
//Contact detail
let contact = {
    firstName: 'Nguyen',
    lastName: 'Minh Chinh',
    email: 'abc@gmail.com',
    phone: '1010204124',
    address: {
        building: '10',
        street: 'HBT',
        city: 'Ha Noi',
        country: 'VN'
    }
}
//Để truy cập vào thuộc tính(propety) của đối tượng(object)
//sử dụng . hoặc [] contact.firstName hoặc contact['firstName']
console.log(contact['age']);//undefined
contact.firstName = 'Ngo';
contact.age = '25';
delete contact.email;
console.log(contact);
//check if a property exists
//property Name in obj
let student = {
    firstName: 'Dao',
    lastName: 'Man',
    studentId: '100'
};
console.log('age' in student);//false
console.log('firstName' in student);//true