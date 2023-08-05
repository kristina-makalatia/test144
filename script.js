// import axios from "axios";

// axios
//   .get(" http://localhost:3000/posts")
//   .then((res) => console.log(res.data))
//   .catch((error) => console.log(error));

fetch("https://kristina-makalatia.github.io/test222/server.json")
  .then((response) => response.json())
  .then((responseData) => console.log(responseData));
