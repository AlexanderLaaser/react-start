import { useState } from "react";
// test
// Thats a component
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectitem: (item: string) => void;
}

//This is functional programming. All of the props are reusable or immutable, because its pretty unlickly you will change it with content
function ListGroup({ items, heading, onSelectitem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {/*Normale Implementierung mit If/else*/}
      {/*{listOfItems.length === 0 ? <p>No item found</p> : null}*/}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectitem(item);
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
