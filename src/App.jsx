import "./App.css";
import Form from "./components/useFormStatus/Form";
import ShowData from "./components/ShowData";
import UpdateTitle from "./components/UpdateTitle";

const App = () => {
  return (
    <div className="container">
      <UpdateTitle />
      <ShowData />
      <Form />
    </div>
  );
};

export default App;
