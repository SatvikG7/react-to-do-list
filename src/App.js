import Header from "./components/Header";
import Todos from "./components/Todos";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import About from "./components/About";
const version = "1.1.0";
function App() {
  let initialTodos;
  if (!localStorage.getItem("list")) {
    localStorage.setItem(
      "list",
      JSON.stringify([
        {
          id: 1,
          text: "Task 1",
          day: "Jun 13th at 12:00pm",
          imp: true,
        },
        {
          id: 2,
          text: "Task 2",
          day: "Jun 13th at 12:00pm",
          imp: false,
        },
        {
          id: 3,
          text: "Task 3",
          day: "Jun 13th at 12:00pm",
          imp: true,
        },
      ])
    );
    initialTodos = JSON.parse(localStorage.getItem("list"));
  } else {
    initialTodos = JSON.parse(localStorage.getItem("list"));
  }

  const [todos, setTodos] = useState(initialTodos);

  const [showAddTodoForm, toggleAddTodoForm] = useState(false);

  // @Similar to onload()
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);

  // @Add Todo
  const addTodo = (todo) => {
    var tds = JSON.parse(localStorage.getItem("list"));
    var tdlength = tds.length;
    tds[tdlength] = todo;
    localStorage.setItem("list", JSON.stringify(tds));
    setTodos(JSON.parse(localStorage.getItem("list")));
  };

  // @Delete Todo
  function deleteTodo(todo) {
    var tds = JSON.parse(localStorage.getItem("list"));
    tds = tds.filter(function (td) {
      if (td.id === todo.id) {
        return false;
      } else if (td.id !== todo.id) {
        return true;
      }
    });
    localStorage.setItem("list", JSON.stringify(tds));
    setTodos(JSON.parse(localStorage.getItem("list")));
  }
  //@Toggle importance
  const onToggle = (id) => {
    var tds = JSON.parse(localStorage.getItem("list"));
    tds.forEach((todo, index) => {
      if (todo.id === id) {
        tds[index].imp = !tds[index].imp;
      }
    });
    localStorage.setItem("list", JSON.stringify(tds));
    setTodos(tds);
  };

  // @Toggle AddTodoForm
  function toggleForm() {
    toggleAddTodoForm(!showAddTodoForm);
  }

  return (
    <Router>
      <div className="container">
        <Header
          title="ToDoList"
          toggleForm={toggleForm}
          formState={showAddTodoForm}
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <div className="div">
              {showAddTodoForm && <AddTodo onAdd={addTodo} />}
              {todos && (
                <Todos
                  todos={todos}
                  onDelete={deleteTodo}
                  onToggle={onToggle}
                />
              )}
              <Footer />
            </div>
          )}
        />

        <Route path="/about" render={() => <About version={version} />} />
      </div>
    </Router>
  );
}

export default App;
