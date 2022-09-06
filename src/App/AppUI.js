import React from "react";
import { TodoContext} from "../TodoContext"
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import {TodoButton} from "../TodoButton"
import {Modal} from "../Modal";


function AppUI() {
  const {
    loading,
    error,
    completeTodo,
    searchedTodos,
    deleteTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
      <React.Fragment>
      <TodoCounter/>

      <TodoSearch/>
      
      <TodoList>
        {error && <p>Error</p>}
        {loading && <p>Cargando...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer tarea</p>}

        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      
        {!!openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}
          
      <TodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
    );
}

export {AppUI};