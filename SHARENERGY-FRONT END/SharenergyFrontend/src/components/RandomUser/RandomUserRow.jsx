import React from "react";

function CustomerRow(props) {
  return props.users.map((user) => (
    
    <tr key={user.login.uuid}>
      <td scope="row"><img className="img" src= {user.picture.medium} /></td>
      <td>{user.name.first+" "+user.name.last}</td>
      <td>{user.login.username}</td>
      <td>{user.email}</td>
      <td>{user.dob.age}</td>
      
    </tr>
    
  ));
}

export default CustomerRow;
