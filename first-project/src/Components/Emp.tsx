function Emp(){
const emps=[{id:1,name:"rama",age:20,role:"analyst"}
,{id:2,name:"siva",age:22,role:"associate"}
,{id:3,name:"manish",age:21,role:"lead"}
,{id:4,name:"seva",age:20,role:"manager"}
,{id:5,name:"sai",age:22,role:"HR"}
];

    return(
       <div className="container">
        
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
    

        {emps.map(emp=><tr>
            <th scope="row">{emp.id}</th>
            <td>{emp.name}</td>
            <td>{emp.age}</td>
            <td>@{emp.role}</td>
            </tr>)}
{/* <tr>
            <th scope="row">{emp.id}</th>
            <td>{emp.name}</td>
            <td>{emp.age}</td>
            <td>@{emp.role}</td>
            </tr> */}
      
    
  </tbody>
</table>

        </div>


    );
}
export default Emp;