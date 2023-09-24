import { useState } from "react";
// test
// Thats a component
function ListGroup() {
  let listOfItems = ["Volleyball", "Gaming", "Club"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Thats a List</h1>
      {/*Normale Implementierung mit If/else*/}
      {/*{listOfItems.length === 0 ? <p>No item found</p> : null}*/}
      {listOfItems.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {listOfItems.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
