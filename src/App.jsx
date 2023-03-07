import React, {useState} from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPlus, faTrash, } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";



import './App.css';

function App() {



  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo === ''){
      return;
    }
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };



  const deleteTodo = (index) => document.getElementById(`id-${index}`).remove();
  
  return (
    
    <div class="todo-list">

     <h1>What would you like to do?</h1>
    <form onSubmit={handleSubmit} class="submit-task">
        <input placeholder="What would you like to do?" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text"></input>

        <button class="task--button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
    </form>
     


     <h1>Things left to do</h1>

     {todos.map((todo) => (


          
      <form class="task">

          <input class="added-task--input" readonly value={todo} type="text"></input>

          <button class="task--button"><FontAwesomeIcon icon={faPenToSquare} /></button>
          <button  class="task--button" ><FontAwesomeIcon icon={faTrash}/></button>
      </form>

    ))}


</div>


  );
}

export default App;