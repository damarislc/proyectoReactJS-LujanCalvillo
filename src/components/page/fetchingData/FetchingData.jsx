import { useEffect, useState } from "react";

const FetchingData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let promesa = fetch("https://jsonplaceholder.typicode.com/users");

    promesa
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((error) => console.log(error))
      .finally(() => console.log("Terminó el proceso"));
  }, []);

  const createUser = () => {
    let newUser = {
      name: "Jorge Duje",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    let promesa = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        Authorization: "Barer DDSADSADAS312141324",
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    promesa
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });
  };

  console.log(users);

  return (
    <div>
      <h1>Fetching de datos</h1>
      <button onClick={createUser}>Crear nuevo usuario</button>
      <button onClick={() => deleteUser(2)}>Eliminar usuario</button>
    </div>
  );
};

export default FetchingData;
