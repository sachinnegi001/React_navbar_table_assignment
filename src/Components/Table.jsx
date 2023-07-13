import React from "react";
// import Navbar from "./Navbar";

const Table = () => {
  return (
    <>
    <div style={{display:"flex",justifyContent:"center"}}>
      <h1>Table Content</h1>
    </div>
    
    

    <div className="container">
      <table className="border" border="2px">
        <tr>
          <th>No.</th>

          <th>Name</th>
          <th>Surname</th>
          <th>Company</th>
          
        </tr>
       
        <tr>
          <th>1</th>
          <td>Sanyam </td>
          <td>Rathore</td>
          <td>CloudEQ</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Rudra</td>
          <td> Pratap Singh</td>
          <td>CloudEQ</td>
        </tr>
        <tr>
          <th>3</th>
          <td>Saurabh</td>
          <td>Rana</td>
          <td>CloudEQ</td>
        </tr>
        <tr>
          <th>4</th>
          <th>sachin</th>
          <th>Negi</th>
          <th>CloudEQ</th>
        </tr>
        <tr>
          <th>5</th>
          <td>Swaranjal</td>
          <td> Singh</td>
          <td>CloudEQ</td>
        </tr>
        <tr>
          <th>6</th>
          <td>Pitambar</td>
          <td> Bhadra</td>
          <td>CloudEQ</td>
        </tr>
        <tr>
          <th>7</th>
          <td>Karan</td>
          <td> Kumar</td>
          <td>CloudEQ</td>
        </tr>
        <tr>
          <td rowspan="4">Department</td>
        </tr>
        <tr>
          <td colspan="4">Obserbility As Code</td>
        </tr>
      </table>
    </div>
    
    </>
  );
  
};

export default Table;