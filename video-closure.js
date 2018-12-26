let name = "Zorak";

function callName() {
  return name;
}

callName(); //?

name = `Hygor ${name}`;

// callName(); //?

function fetchData() {
  let response = callName();
  if (response === "Zorak") {
    response; //?
  } else {
    response; //?
  }
}

fetchData();

// EXEMPLOS
// 1 - Component Rect
// const initialState = {
//   name: 'Zorak'
// }
// class ReactApp extends ReactApp.PureComponent {
//   state = initialState;
// }
// 2 - fetchData
// const fetchData = async () => {
//   const id = "1";
//   let response = null;
//   try {
//     response = await fetch("localhost:3000", { id });
//   } catch (error) {
//     console.error(`Error ${error} to fetch the user with id ${id}`);
//   } finally {
//     console.log(response)
//   }
// };
