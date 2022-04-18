import "../App.css";
import { useState } from "react";
function ListItems(props) {
  const data = props.data;
  console.log(props);
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <label className="list">
      <div className="list-item">
        <input
          type="checkbox"
          onClick={() => {
            setChecked(!checked);
          }}
        />
        <p className={checked ? "checked" : ""}>{data.task_name}</p>
      </div>
      <ul className="icon">
        <img
          className={checked ? "icons displayNone" : "icons"}
          src="/icons/pencil.svg"
          alt=""
        />
        <img className="icons" src="/icons/trash-can.svg" alt="" />
      </ul>
    </label>
  );
}

export default ListItems;
