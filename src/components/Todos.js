import Todo from "./Todo";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  ul: {
    padding: "6px 6px 6px 6px",
    backgroundColor: "#0080ff",
    minHeight: "calc(100vh - 58px)",
  },
}));
function Todos({ todos, onDelete, onToggle }) {
  const classes = useStyles();

  return (
    <List className={classes.ul}>
      {todos.length === 0 && <h1>Hooray 🎉! No pending task</h1>}

      {todos.map((td, index) => {
        return (
          <Todo key={index} todo={td} onDelete={onDelete} onToggle={onToggle} />
        );
      })}
    </List>
  );
}

export default Todos;
