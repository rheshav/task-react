// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// import Hasil from './Fetch';

function Tabel() {
  return (
    <div>
      <h1>List of users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>

            <th>Company</th>
          </tr>
        </thead>
        <tbody id="isian"></tbody>
      </table>
    </div>
  );
}

export default Tabel;
