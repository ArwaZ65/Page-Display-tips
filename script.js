//Alert the sum of 2 numbers
let fun=(num1,num2) => {
    const sum=num1+num2;
    alert(sum);
}
fun(10,10);
//2 Try for…in, for…of and .foreach() with an array.
const array=[1,2,3,4,5];
//for in
for(let i in array){
    // console.log(`i: ${i}, Value: ${array[i]}`);
    console.log("i"+i,"value:"+array[i]);
}
//for of
for(let value of array){
    console.log(`value: ${value}`);
}
// foreach.. 
array.forEach((value,index)=> {
    console.log(`value: ${value}, index: ${index}`);
});

//spreadarray
const arr1=[1,2,3,'abc'];
const arr2=[10,20,...arr1];
console.log(arr2)

class Student{
    constructor(name,university,faculty,grade){
        this.name=name;
        this.university=university;
        this.faculty=faculty;
        this.grade=grade;
    }
    printDetails(){
        // console.log(`${this.name} is a student at faculty of ${this.faculty} in university ${this.university} and I was graduated with grade ${this.grade}`)
        console.log(this.name+" is a student at faculty of "+this.faculty+" at university of "+this.university+"and I was graduated was grade "+this.grade)
    }
}
const student=new Student("Arwa Zakria","Banisuef","FCAI","A+")
student.printDetails();
