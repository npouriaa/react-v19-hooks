import "./App.css";
import Form from "./components/useFormStatus/Form";
import ShowData from "./components/ShowData";
import UpdateTitle from "./components/UpdateTitle";
import Optimistic from "./components/Optimistic";

const App = () => {
  return (
    <div className="container">
      <UpdateTitle />
      <ShowData />
      <Form />
      <Optimistic />
    </div>
  );
};

export default App;
