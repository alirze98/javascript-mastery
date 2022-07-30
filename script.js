// operators
// arithmetic
// + - * / % ++ -- 
// assignment
// = += -= *= /= %=
// comparision 
// > , >= , < , <= , == , != , === , !==
// ternary
// logical
// && , || , !  

// for(let i = 0 ; i<=50 ; i++){
//     if(i%2 == 0){
//         console.log(i);
//     } 
// }
// let i = 0;
// while(i<5){
//   console.log(i);
//   i++;
// }

// let i = 0 ;
// do{
// console.log(i);
// i++
// }while(i>5)

// let person = {name:"ali",age:24,location:"lorestan"}
// let myarr = ["ali",24,"lorestan"];
// for(let index in myarr){
//     console.log(index);
//     console.log(myarr[index]);
// }
// for(let value of myarr){
//     console.log(value);
// }

// break continue:
// let num = 0;
// while(num<=10){
//     if(num==5){
//         num++
//         continue
//     }
//     console.log(num);
//     num++;
// }

//  factory function 
// let createCircle = function(x,y){
//     return{
//         x,
//         y,
//         draw(){
//             console.log("draw");
//         }
//     }
// }
// let circle1 = createCircle(12,24);
// console.log(circle1);
// let circle2 = createCircle(45,89);
// console.log(circle2);

// constructor function 
// function Generator(width,r){
//     this.r=r;
//     this.x=width;
// }
// const myobj = new Generator(10,2);
// console.log(myobj);

// delete in objects:
// const person = {
//     name:"ali",
//     location:"lorestan",
// }
// person.age=23;
// delete person.name;

// Function constructor function
// function generator(x,y){
//     this.x=x;
//     this.y=y
// }
// let myobj = new generator(10,12);
// console.log(myobj);
// same as :
// let generator1 = new Function('x,y',`
// this.x=x;
// this.y=y;
// `)
// let myobj1 = new generator1(10,2);
// console.log(myobj1);

// difference between refrence types and value types:
// let x = 10;
// let y = x ;
// x++;
// console.log(x)
// console.log(y)
// let x = {value:10};
// let y = x;
// y.value=11;
// console.log(x);
// console.log(y);
// let number = 10;
// function increase(number){
//     number++
// };
// increase(number);
// console.log(number);
// let obj = {value:10};
// function increase(obj){
// obj.value++
// }
// increase(obj)
// console.log(obj);

// iterate object properties: 
// let circle = {
//     width:12,
//     height:20,
// }
// let keysarray = Object.keys(circle);
// for (let key of keysarray) {
//     console.log(key);
// }
// let entriesarray = Object.entries(circle)
// for(let entrie of entriesarray){
//     console.log(entrie);
// }
// if('height' in circle){
//     console.log("yes");
// }else{
//     console.log('no');
// }

// object cloning:
// const person = {name:"ali",age:23}
// const another = {};
// for(let key in person){
//     another[key] = person[key]
// }
// console.log(another);
// const another = Object.assign({location:"tehran"},person)
// console.log(another);
// const another = {gener:"male",...person,location:"tehran"};
// console.log(another);

// String object :
// let myname = "ali"
// let name = String("ali")
// console.log(typeof name);
// console.log(typeof myname);
// let objstring = new String("ali")
// console.log(typeof objstring);

// template literal:
// let mytext = `hello
//  'my' "name" is ${produce()}`
// function produce(){
//     return "ali"
// }
// console.log(mytext);

// Date object :
// let now = new Date();
// now.setDate(12);
// now.setFullYear(2012)
// console.log(now.toDateString());

// Array:
// let myarr = [1,2,3,4,5,3]
// myarr.push(8);
// myarr.unshift(10);
// myarr.splice(2,2,23);
// console.log(myarr);
// let myindex1 = myarr.indexOf(3,3);
// console.log(myindex1);
// let myindex = myarr.lastIndexOf(3);
// let myinclude = myarr.includes(6);
// let myarr1 = [{id:1},{id:2}]
// console.log(myarr1.includes({id:1}));
// console.log(myarr1.find(item=>item.id==2));
// console.log(myarr1.findIndex(item=>item.id == 2));

// Arrow Function:
// arr.find(function(element){
//     return element.id == 2
// })
// same as :
// arr.find(element => element.id == 2)

// delete element from array :
// let myarr = [1,2,3,5]
// let last = myarr.pop();
// let first = myarr.shift();
// let result = myarr.splice(0,1)
// console.log(result);

// delete all elements from an array :
// let arr = [1,2,3,4,5]
// let another = arr
// arr = []
// console.log(arr);
// console.log(another);
// let numbers = [1,2,3,4,5]
// let another1 = numbers
// numbers.length=0;
// same as :
// numbers.splice(0,numbers.length)
// console.log(another1);
// console.log(numbers);

// concat and slice of an array:
// const numbers = [1,2,3,4,5]
// const numbers1 = [6,7,8,9,10]
// let result = numbers.concat(numbers1);
// let slice = result.slice(2,6)
// console.log(result);
// console.log(slice);
// tip:
// let myarr = [{id:1},{id:2}]
// let second = [3,4,5]
// const combined = myarr.concat(second)
// myarr[0].id=89;
// console.log(combined);
// let numbers = [1,2,3]
// let numbers2 = [4,5,6]
// let result = numbers.concat(numbers2)
// numbers[0]=8;
// console.log(result);

// spread in array :
// let numbers1 = [1,2,3]
// let items = [{id:1},{id:2}]
// let result = [...numbers1,...items]
// items[0].id=8;
// numbers1[0]=5
// console.log(result);

// array iteration :
// let myarray = [1,2,3,5]
// for(let key of myarray ){
//     console.log(key);
// }
// let result = 0 ;
// myarray.forEach((number,i)=>{
//     result = result + number
// })
// console.log(result);

// join an array:
// let myarr = [1,3,54,56];
// let joined = myarr.join(' ')
// console.log(joined);
// const myurl = "neon coding is cool";
// const splited = myurl.split(' ')
// const correct = splited.join('-')
// console.log(correct);

//  sort an array :
// let myarr = [1,2,3,4]
// let reversed = myarr.reverse()
// console.log(reversed);
// let myarr1=[34,53,2,5,122,12]
// let mysort = myarr1.sort(function(a,b){
//     return a-b
// })
// console.log(mysort);
// let myarr = [{name:"reza"},{name:"ali"},{name:"mohamed"},{name:"mohamad"}]
// let sorted = myarr.sort(function(a,b){
//   if(a.name>b.name) return 1
//   if(a.name<b.name) return -1
//   else return 0
// })
// console.log(sorted);

// testing array's Elements:
// let myarr=[1,2,3,0,-2,-3]
// let result = myarr.every(function(value,index,array){
//     return value>0
// })
// console.log(result);
// let result = myarr.some(function(value,index,array){
//     return value==0
// })
// console.log(result);

// array filtering:
// let arr = [
//     {name : "ali" , age : 18},
//     {name : "ali" , age : 11},
//     {name : "ali" , age : 23},
//     {name : "ali" , age : 30}
// ]
// const result = arr.filter((value,index,array)=>  value.age > 20 )
// console.log(result);

// array maping :
// const myarr = [1,2,3,4,5]
// const result = myarr.map(function(value,index,array){
//     return value*3
// })
// console.log(result);
// const myarr = ['html','css','js']
// let result = myarr.map(value=>{
//     return `<li>${value}</li>`
// })
// const mystring = result.join('')
// const final = `<ul>${mystring}</ul>`
// console.log(final);
// const myarr = ['html','css','js']
// const result = myarr.map(value => ({name:value})).filter(value => value.name == 'css')
// console.log(result);

// what is this :
// const video = {
//     title : "mytitle",
//     tags : ['a','b','c'],
//     show : function(){
//         this.tags.forEach(function(tag){
//             console.log(this.title,tag);
//         },this)
//     }
// }
// video.show()

// Hoisting:
// walk();
// function walk(){
//     console.log('walk');
// }
// let dance = function(){
//     console.log('dance');
// };
// let x = dance;
// x()
// let math = {
//     'factit': function factorial(n) {
//       console.log(n)
//       if (n <= 1) {
//         return 1;
//       }
//       return n * factorial(n - 1);
//     }
//   };

// arguments:
// function sum(a,b){
//     return a + b 
// }
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,3,5,6));
// function mysum(a,b,c){
//   let total = 0;
//   for(let value of arguments){
//     total+=value;
//   }
//   return total
// }
// console.log(mysum(1,3,5,6,9,8));

// reduce in array :
// let numbers = [1,-1,2,3]   
// total = 0;
// for(let value of numbers){
//    total+= value 
// }
// console.log(total);
// let result = numbers.reduce(function(accumulator , currentvalue){
//     return accumulator + currentvalue 
// },0)
// console.log(result);

// default value for parameters :
// function interest (principle,rate,years){
// principle = principle || 300;
// rate = rate || 500;
// console.log(principle,rate,years);
// }
// interest(15,undefined,80)
// same as :
// function interest (principle=12,rate=3.5,years=2.5){
//     console.log(principle,rate,years);
// }
// interest(0,200)

// getter and setter :
// const person = { 
//     name : "ali",
//      get getName(){
//         return this.name
//     },
//      set setName(value){
//         this.name = value
//     }
// }
// person.setName = "mohamad"
// console.log(person.getName);
// const person = {
//     fname : "ali",
//     lname : "rezaee",
// }
// const fullName  = `${person.fname} ${person.lname} `
// console.log(fullName);
// same as :
// const person = {
//     fname : "ali",
//     lname : "rezaee",
//     fullName(){
//         return `${person.fname} ${person.lname}`
//     }
// }
// console.log(person.fullName());
// same as with getter and setter :
// const person = {
//     fname : "ali",
//     lname : "rezaee",
//     get fullName(){
//         return `${this.fname} ${this.lname}`
//     },
//     set fullName(value){
//         parts = value.split(' ');
//         this.fname=parts[0];
//         this.lname=parts[1]
//     }
// }
// person.fullName="amir amraee";
// console.log(person.fullName); 

// rest operator :
// let numbers = function(a,b,...myrest){
//     console.log(a,b,myrest);
//     let result = myrest.reduce(function(a,c){
//         return a + c
//     },0);
//     console.log(result);
// }
// numbers(2,3,10,43,57)

// scopes :
// {
//     const message = 'neon'
// }
// console.log(message);
// function start(){
//     const message = 'neon';
//     if(true){
//         const another = 'hi'
//     }
//     console.log(another);
// }
// start()
// console.log(message);
// function start(){
//     for(let i = 0 ; i<5 ; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// start()
// const color = 'red';
// function start(){
//     const message = 'neon';
//     const color = 'blue';
//     console.log(color);
// }
// console.log(color);
// function stop(){
//     const message = 'hi'
// }
// start()
// stop()
// function myfun(){
//     const age = 18;
//     if(true){
//         const age = 20;
//         console.log(age);
//     }
//     console.log(age);
// }
//  myfun();
// function sum(){
//     let age = 18;
//     if(true){
//          age = 20;
//     }
//     console.log(age);
// }
// sum() 

// var :
// for(let i =0;i<5;i++)
//     console.log(i);
//     console.log(i);
// function start(){
//     for(var i = 0 ; i<5 ;i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// start()
// var name = 'ali'
// console.log(window.name);

// try and catch :
// const person = {
//     fname : "ali",
//     lname : "rezaee",
//     get fullName(){
//         return `${this.fname} ${this.lname}`
//     },
//     set fullName(value){
//         parts = value.split(' ');

//         if(typeof value !== 'string' ){
//         const err = new Error('please enter a valid form');
//         throw err;
//         }
//         if(parts.length !== 2 ){
//         const err = new Error('please enter a correct name');
//         throw err;
//         }
//         this.fname=parts[0];
//         this.lname=parts[1]
//     }
// }
// try{
//     person.fullName='alirezaee'
// }catch(e){
//     alert(e)
// }
// console.log(person);

// change the this:
// function sum(){
// //     console.log(this);
// // }
// // sum.call({name:'ali'})
// function sum(a,b){
//     console.log(this,a,b);
// }
// sum.apply({name:'ali'},[2,4])
// function sum(a,b){
//     console.log(this,a,b);
// }
// let fn = sum.bind({name:'ali'})
// fn(12,2)
// const video = {
//     title : "mytitle",
//     tags : ['a','b','c'],
//     show : function(){
//         this.tags.forEach(tag=>{
//             console.log(this.title,tag);
//             // // arrow function inherit 'this' from {}
//         })
//     }
// }

// object oriented programming:
// //procedural programming: 
// let baseSalary = 3000;
// let overtime = 10;
// let rate = 20;
// function getWage(baseSalary,overtime,rate){
//     return baseSalary + (overtime * rate)
// }
// // object oriented programming(encapsulation):
// let employee = {
//      baseSalary : 3000,
//      overtime : 10,
//      rate : 20,
//      getWage(){
//         return baseSalary + (overtime * rate)
//      }
// }

// Abstraction:
//  function Circel(radius){
//     this.radius = radius;
//     let defaultLocation = {x : 0, y : 0};
//     let computeOptimumLocation = function(factor){
//         //...
//     }
//     this.draw = function(){
//         computeOptimumLocation()
//         console.log('draw');
//     }
//  }
// const circle = new Circel(2);
// console.log(circle);

// prototype :
// let x = {}
// console.log(Object.getPrototypeOf(x));
// let x = {}
// let y = {}
// console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));

// multilevel inheritance :
// let myarr = []
// let parent = Object.getPrototypeOf(myarr) 
// let bigParent = Object.getPrototypeOf(parent);
// console.log(bigParent);
// function Circle(width,height){
//     this.width = width;
//     this.height = height;
// }
// let mycircle = new Circle(12,14)
// let mycircle1 = new Circle(15,20)
// console.log(Object.getPrototypeOf(mycircle) === Object.getPrototypeOf(mycircle1));
// console.log(mycircle.__proto__);
// console.log(Object.getPrototypeOf(Circle));
// let myarr1 = [1]
// let myarr2 = [2]
// let myarr3 = [3]
// console.log(Object.getPrototypeOf(myarr1),Object.getPrototypeOf(myarr2),Object.getPrototypeOf(myarr3),);

// property description:
// let person = {name : 'ali'}
// person.toString()
// let base = Object.getPrototypeOf(person)
// let result = Object.getOwnPropertyDescriptor(base,'toString')
// console.log(result);
// Object.defineProperty(base,'toString',{
//     enumerable:true
// })
// for(let key in person)
// console.log(key);
// let person = {name :'ali',lName:'rezaee'}
// Object.defineProperty(person,'name',{
//     writable:false,
//     enumerable:false
// })
// person.name='reza';
// console.log(person.name);
// for(let key in person)
// console.log(key);

// constructor prototype :
// function Circle(radius){
//     this.radius = radius
// }
// const circle = new Circle(2);
// console.log(Circle.prototype);
// console.log(Object.getPrototypeOf(circle));
// console.log(circle.__proto__ === Circle.prototype);
// let obj = {}
// console.log(obj.constructor.prototype === obj.__proto__);
// let myarr = []
// console.log(myarr.constructor.prototype === myarr.__proto__);
// let myobj = {}
// console.log(myobj.constructor);
// console.log(myobj.__proto__);

// prototype vs instance member :
// function Circle(radius){
//     this.radius=radius;
//     this.draw=function(){
//         console.log('draw');
//     }
// }
// const circle1 = new Circle(2)
// const circle2 = new Circle(3);
// same as:
// function Circle(radius){
//     // // instance member
//     this.radius=radius;
//     this.move = function(){
//         console.log('move');
//     }
// }
// // // prototype members
// Circle.prototype.draw = function(){
//     this.move()
//     console.log('draw');
// }
// Circle.prototype.toString=function(){
//     return 'circle with radius :' + this.radius
// }
// const circle1 = new Circle(2)
// const circle2 = new Circle(3);
// // console.log(circle1);
// console.log(circle1.draw());

// iterate instance members and prototype members:
// function Circle(radius){
//     this.radius=radius
// }
// Circle.prototype.draw=function(){
//     console.log('draw');
// }
// const circle1 = new Circle(2)
// Object.defineProperty(circle1,'toString',{
//     enumerable:true
// })
// let result = Object.keys(circle1)
// console.log(result);
//  for(let keys in circle1){
// console.log(keys)};
// let result = circle1.hasOwnProperty('draw')
// let result1 = circle1.hasOwnProperty('radius')
// console.log(result,result1);

// costomize inheritance :
// function Shape(){

// }
//  Shape.prototype.duplicate=function(){
//     console.log('this is duplicate');
// }
//  const shape = new Shape()
// console.log(shape);
// Circle.prototype=Object.create(Shape.prototype)
// function Circle(radius){
//     this.radius= radius
// }
// const circle1 = new Circle(3)
// console.log(circle1.duplicate());
// console.log(circle1);

// reset constructor :
// function Circle(radius){
//     this.radius= radius
// }
// const circle1 = new Circle(3)
// const circle2 = new Circle.prototype.constructor(4)
// const circle3 = new circle1.__proto__.constructor(5)
// const circle4 = new circle2.constructor(7)
// const circle5 = new circle2.__proto__.constructor(12)
// console.log(circle1,circle2,circle3,circle4,circle5);
// 
// function Shape(radius){
// this.radius = 'shape'+radius
// }
//  const shape = new Shape(4)
// Circle.prototype=Object.create(Shape.prototype)
// Circle.prototype.constructor=Circle
// function Circle(radius){
//     this.radius='circle'+ radius
// }
// const circle1 = new Circle.prototype.constructor(5)
// console.log(circle1);

// calling parent constructor :
// function Shape(color){
// this.color = color
// }
//  const shape = new Shape(4)
// Circle.prototype=Object.create(Shape.prototype)
// Circle.prototype.constructor=Circle
// function Circle(radius,color){
//      Shape.call(this,color)
//     this.radius='circle'+ radius
// }
// const circle1 = new Circle.prototype.constructor(5,'red')
// console.log(circle1);

// intermediate function inheritance:
// function Shape(){

// }
//  Shape.prototype.duplicate=function(){
//     console.log('this is duplicate');
// }
// function Square(width){
//    this.width = width
// }
// function extend(child,parent){
//     child.prototype = Object.create(parent.prototype);
//     child.prototype.constructor = child
// }
// extend(Square,Shape)
// const square = new Square(2)
// console.log(square.duplicate());
// extend(Circle,Shape)
// function Circle(radius){
//     this.radius= radius
// }
// const circle1 = new Circle(3)
// console.log(circle1.duplicate());

// overwrite the method:
// function Shape(){

// }
//  Shape.prototype.duplicate=function(){
//     console.log('duplicate');
// }
// function extend(child,parent){
//     child.prototype = Object.create(parent.prototype);
//     Circle.prototype.constructor=Circle  
// }
// extend(Circle,Shape)
// Circle.prototype.duplicate=function(){
//     // Shape.prototype.duplicate()
//     //  or
//     console.log('circle duplicate');
// }
// function Circle(radius){
//     this.radius= radius
// }
// const circle1 = new Circle.prototype.constructor(2)
// console.log(circle1.duplicate());

// polymorphism :
// function Shape(){

// }
//  Shape.prototype.duplicate=function(){
//     console.log('duplicate');
// }
// function extend(child,parent){
//     child.prototype = Object.create(parent.prototype);
//     Circle.prototype.constructor=Circle  
// }
// function Square(){

// }
// extend(Square,Shape)
// Square.prototype.duplicate=function(){
//     console.log('square duplicate');
// }
// function Circle(){
    
// }
// extend(Circle,Shape)
// Circle.prototype.duplicate=function(){
//     console.log('circle duplicate');
// }
// const shapes = [
//     new Circle(),
//     new Square(),
// ]
// // without polimorphism
// for(let shape of shapes){
//     if(shape.type == 'circle'){
//         duplicateCircle();
//     }else if(shape.type == 'square'){
//         duplicateSquare()
//     }
// }
// // with polimorphism
// for(let shape of shapes)
// shape.duplicate()

// Classe : 
// class Circle{
//     constructor(radius){
//         this.radius=radius;
//         this.draw=function(){
//             console.log('draw');
//         }
//     }
//     walk(){
//         console.log('walk');
//     }

// }
// const circle = new Circle(2)
// console.log(circle);
// console.log(typeof(Circle));

// Hoisting in class :
// const circle = new Circle()
// class Circle{

// }
// const Square = class{

// }

// static methods :
// class Circle{
//     constructor(radius){
//         this.radius = radius;
//     }
//     // instance method
//     draw(){
//         console.log('draw');
//     }
//     // static method
//     static parse(str){
//        const radius = JSON.parse(str).radius;
//        return new Circle(radius)
//     }
// }
// let result = Circle.parse('{"radius":1}');
// console.log(result);

// change this in class :
// 'use strict'
// const Circle = function(){
//     this.draw= function(){
//         console.log(this);
//     }
// }
// const c = new Circle()
// method call 
// c.draw()
// const draw = c.draw.bind(c);
// const mydraw = c.draw;
// function call 
// draw()
// mydraw()
// 
// class Circle1{
//     draw(){
//         console.log(this);
//     }
// }
// const c1 = new Circle1();
// const draw1 = c1.draw;
// draw1()

// hide members with symbol :
// const _radius = Symbol();
// const _draw = Symbol()
// class Circle{
//     constructor(radius){
//         this[_radius]=radius
//     }
//     [_draw](){
//         console.log('draw');
//     }
// }
// const circle = new Circle(2);
// console.log(circle);
// console.log(Object.getOwnPropertyNames(circle));
// // مرض ک ندارم چیزی ک هاید کردمو ب دست بیارم
// const key = Object.getOwnPropertySymbols(circle)[0]
// console.log(circle[key]);

// hide members with weakmap :
// const _radius = new WeakMap()
// const _move = new WeakMap()
// class Circle{
//     constructor(radius){
//          _radius.set(this,radius);
//         //  arrow function inherite 'this'
//          _move.set(this,()=>{
//             console.log('move',this);
//          })
//     }
//     draw(){
//         _move.get(this)();
//         console.log(_radius.get(this));
//     }
// }
// const circle = new Circle(2);
// console.log(circle);
// console.log(circle.radius);
// circle.draw()

// getter and setter for private members :
// const _radius = new WeakMap()
// class Circle{
//     constructor(radius){
//          _radius.set(this,radius)
//     }
//     get radius(){
//         return _radius.get(this)
//     }
//     set radius(value){
//         if(value<0) throw new Error('please enter valid number')
//         _radius.set(this,value)
//     }
// }
// const circle = new Circle(2)
// circle.radius=3
// console.log(circle.radius);

// inheritance in classes :
// class Shape{
//     constructor(color){
    //   apparently 'this' has refers to circle object
        // this.color=color
//     }
//     move(){
//         console.log('move');
//     }
// }
// class Circle extends Shape{
//     constructor(color,radius){
//         super(color)
//         this.radius=radius
//     }
//     draw(){
//         console.log('draw');
//     }
// }
// const circle = new Circle('red',2)
// console.log(circle);

// overwrite the methods in classes:
// class Shape{
//     move(){
//         console.log('move');
//     }
// }
// class Circle extends Shape{
//     move(){
//         super.move()
//         console.log('circle move');
//     }
// }
// const circle = new Circle()
// circle.move()

// asyncronous and syncronous :
// function print(){
//     console.log('b');
// }
// console.log('a');
// print()
// console.log('c');
// 
// function print(){
//     setTimeout(() => {
//         console.log('b');
//     }, 2000);
// }
// console.log('a');
// print()
// console.log('c');
// 
// function ball1(){
//     setTimeout(() => {
//         console.log('the ball one arrived');
//     }, 2000);
// }
// function ball2(){
//     setTimeout(() => {
//         console.log('the ball two arrived');
//     }, 1000);
// }
// function ball3(){
//     setTimeout(() => {
//         console.log('the ball three arrived');
//     }, 3000);
// }
// ball1()
// ball2()
// ball3()
// 
// function ball1(ball2){
//     setTimeout(() => {
//         console.log('the ball one arrived');
//         ball2(ball3)
//     }, 2000);
// }
// function ball2(ball3){
//     setTimeout(() => {
//         console.log('the ball two arrived');
//         ball3()
//     }, 1000);
// }
// function ball3(){
//     setTimeout(() => {
//         console.log('the ball three arrived');
//     }, 3000);
// }
// ball1(ball2)

// error management in callbacks:
// function ball1(ball2){
//     setTimeout(() => {
//        try {
//         if(true){
//             console.log('the ball one arrived');
//             ball2(ball3)
//         }else{
//             throw new Error('the ball one failed')
//         }
//        } catch (error) {
//         console.log(error);
//        }
//     }, 2000);
// }
// function ball2(ball3){
//     setTimeout(() => {
//        try{
//         if(false){
//             console.log('the ball two arrived');
//             ball3()
//            }else{
//             throw new Error('the ball two failed')
//            }
//        }catch(error){
//         console.log(error);
//        }
//     }, 1000);
// }
// function ball3(){
//     setTimeout(() => {
//         console.log('the ball three arrived');
//     }, 3000);
// }
// ball1(ball2)
// //this is real callback
// function ball1(callback){
//     setTimeout(() => {
//          callback(true)
//     }, 2000);
// }
// function ball2(callback){
//     setTimeout(() => {
//       callback(true)
//     }, 1000);
// }
// function ball3(){
//     setTimeout(() => {
//         console.log('the ball three arrived');
//     }, 3000);
// }
// ball1(res=>{
//    try {
//     if(res){
//         console.log('the ball1 arrived ');
//         ball2(res=>{
//             try {
//                 if(res){
//                     console.log('the ball2 arrived');
//                     ball3()
//                 }else{
//                     throw new Error('the ball2 failed')
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         })
//     }else{
//         throw new Error("the ball1 failed")
//     }
//    } catch (error) {
//     console.log(error);
//    }
// })

// promise :
// function ball1(){
//     return new Promise((resolve,reject)=>{
//         if(true){
//             resolve('the ball1 arrived')
//         }else{
//             reject('the ball1 failed')
//         }
//     })
// } 
// function ball2(){
//      return new Promise((resolve,reject)=>{
//         if(true){
//             resolve('the ball2 arrived')
//         }else{
//             reject('the ball2 failed')
//         }
//      })
// }
// function ball3() {
//     return new Promise((resolve,reject)=>{
//         if(false){
//             resolve('the ball3 arrived')
//         }else{
//             reject('the ball3 failed')
//         }
//      })
// }
// ball1().then(res=>{
//     console.log(res);
//     return ball2();
// }).then(res=>{
//     console.log(res);
//     return ball3()
// }).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// async await :
// async function ball1(){
//     if(true){
//         return("the ball1 arrived")
//     }else{
//         throw new Error('the ball1 failed')
//     }
// }
// async function ball2(){
//     if(false){
//         return("the ball2 arrived")
//     }else{
//         throw new Error('the ball2 failed')
//     }
// }
// async function ball3(){
//     if(true){
//         return("the ball3 arrived")
//     }else{
//         throw new Error('the ball3 failed')
//     }
// }
// async function execute(){
//     try {
//     console.log(await ball1());
//     console.log(await ball2());
//     console.log(await ball3());
//     } catch (error) {
//         console.log(error);
//     }
// }
// execute()











  


