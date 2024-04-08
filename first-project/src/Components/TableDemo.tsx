import axios from "axios";
import { useEffect, useState } from "react";

function TableDemo() {
  interface Users {
    Id: number;
    name: string;
    email: string;
    phone: string;
  }
  const [errorMsg,setErrorMsg]=useState<string>("");
  const [usersData, setUsersData] = useState<Users>([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      setUsersData(res.data);
    }).catch(error=>{console.error("Page not found")
    
    setErrorMsg(error.message)
}
    )
  }, []);
  let Number=0;
  function id(){

    return ++Number;
  }

  return (
    <div className="">
        {errorMsg}
      <table className="table border border-2 border-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr>
              <th scope="row">{id()}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TableDemo;
