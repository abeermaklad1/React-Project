import axios from 'axios';

export default function todosAction() {
    let data = axios
    .get('https://jsonplaceholder.typicode.com/todos').then((response) =>{
        return response.data;
    })
    .catch((error) =>{
        console.log(data);
    });
  return {
    type: "TODOS-List",
    payload: data
  };
}
