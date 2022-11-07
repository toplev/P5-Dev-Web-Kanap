fetch("http://localhost:3000/api/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((id) => {
      console.log(id.name);
    });
  })
  .catch((error) => console.log(error));
