import React from "react";
import ToDo from "./ToDo";
import ToDoFooter from "./ToDoFooter";

const TodoList = ({ todos, setTodos, status, setStatus, filteredTodos }) => {
  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {filteredTodos.map(
            (
              todo // burada eğer todos.map dersek, tüm todoları gösterir. filteredTodos.map dersek, filtrelenmiş todoları gösterir.
            ) => (
              <ToDo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                todos={todos}
              />
            )
          )}
        </ul>
      </section>
      <ToDoFooter
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
    </div>
  );
};

export default TodoList;
