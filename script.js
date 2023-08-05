// import axios from "axios";

axios
  .get(" http://localhost:3000/posts")
  .then((res) => console.log(res.data))
  .catch((error) => console.log(error));

// fetch("https://reqres.in/api/users?page=")
//   .then((response) => response.json())
//   .then((responseData) => console.log(responseData));
