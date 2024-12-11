import "./App.css";
import ShowData from "./components/ShowData";
import UpdateTitle from "./components/UpdateTitle";

const App = () => {
  return (
    <div className="container">
      <UpdateTitle />
      <ShowData />
    </div>
  );
};

export default App;
