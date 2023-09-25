// This is our zentral tsx file for adding React components
import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";

function App() {
  let listOfItems = ["Volleyball", "Gaming", "Club"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={listOfItems}
        heading={"Tickets"}
        onSelectitem={handleSelectedItem}
      ></ListGroup>
      <div>
        <Alert>Hallo</Alert>
      </div>
    </div>
  );
}

export default App;
