interface Props {
    items: string[];
    heading: string;
  }
  
  function ListDemo(props: Props) {
    return (
      <div>
        <h1>{props.heading}</h1>
      <ul className="list-group">
        {props.items.map((city) => (
          <li className="list-group-item">{city}</li>
        ))}
      </ul>
      </div>
    );
  }
  

  
  
  
  
  
  // function ListDemo (props:Props){
  //   return (
  //     <div>
  //       <table >
  //         <thead>
  //           <tr>
  //             <th scope="col">#</th>
  //             <th scope="col">First Name</th>
  //             <th scope="col">Last Name</th>
  //             <th scope="col">Designation</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr>
  //             <th scope="row">1</th>
  //             <td>ALLURI</td>
  //             <td>BHAVANA</td>
  //             <td>@HR</td>
  //           </tr>
  //           <tr>
  //             <th scope="row">2</th>
  //             <td>VAISHNAVI</td>
  //             <td>DHAMANGAVE</td>
  //             <td>@DATA ANALYST</td>
  //           </tr>
  //           <tr>
  //             <th scope="row">3</th>
  //             <td >SAI GANESH</td>
  //             <td>PUNNA</td>
  //             <td>@DATA ANALYST</td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     </div>
  //   );
  // }
  export default ListDemo;