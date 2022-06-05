import { Circle } from "../circle";

let c1=new Circle(10);
let c2=new Circle(5);

function distance(c1:Circle,c2:Circle,d:number){
    let distance = Math.pow(c1.radius - c2.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
console.log(distance(c1,c2,20));
