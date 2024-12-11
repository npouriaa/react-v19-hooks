import React, { useState } from "react";
import Submit from "./Submit";
import axios from "axios";

const Form = () => {
  const [text, setText] = useState();

  const submitAction = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
    if (response) {
      console.log(response);
      setText(response.data.title);
    }
  };

  return (
    <div className="content-con">
      <div>
        <div>
          <h3>useFormStatus hook example</h3>
          <p>
            The useFormStatus Hook provides status information of the last form
            submission. By clicking the button below a pending state display
            during form submission
          </p>
        </div>
        <form className="form-con" action={submitAction}>
          <Submit />
        </form>
      </div>
    </div>
  );
};

export default Form;
