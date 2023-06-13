import "./index.css";

const ListItem = ({ data }) => {
  const completed = data.completed ? "listItem completed" : "listItem";
  const handleClick = (e) => {
    e.target.classList.toggle("completed");
  };

  return (
    <li key={data.id} className={completed} onClick={handleClick}>
      {data.todo}
    </li>
  );
};

export default ListItem;
