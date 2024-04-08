import { useState } from "react";

// import React from 'react'
 function ObjectCh() {
    class Emp{
        name: any;
        age: any;
        clg: any;
        constructor(name: string,age: number,clg: string){
            this.name=name;
            this.age=age;
            this.clg=clg;
        }
    }
    const E1=new Emp("raju",20,"Spec");
    const [name,setName]=useState(E1.name);
    const [age,setAge]=useState(E1.age);
    const [clg,setClg]=useState(E1.clg);


  return (
    <div>
        
    </div>
  )
}

export default ObjectCh;
