const table = document.getElementById('isianTabel');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((res) => {
    table.innerHTML = Hasil(res);
  });

function Hasil(result) {
  let table = '';
  result.forEach((data) => {
    table += `<tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.username}</td>
                <td>${data.email}</td>
                <td>
                  ${data.address.street},
                  ${data.address.suite}, 
                  ${data.address.city}
                 </td>
                <td>${data.company.name}</td>
              </tr>`;
  });
  return table;
}

export default Hasil;
