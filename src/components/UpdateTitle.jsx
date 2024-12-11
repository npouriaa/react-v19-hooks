import axios from "axios";
import { useActionState } from "react";

const UpdateTitle = () => {
  // useActionState example

  // useActionState (previously ReactDOM.useFormState) accepts a function (the “Action”), and returns a wrapped Action to call. This works because Actions compose. When the wrapped Action is called, useActionState will return the last result of the Action as data, and the pending state of the Action as pending.
  const [response, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const response = await axios
        .put("https://jsonplaceholder.typicode.com/posts/1", {
          userId: 1,
          id: 1,
          title: formData.get("title"),
          body: "body text...",
        })
        .catch((err) => {
          console.log(err);
        });
      if (response) {
        return {
          title: response.data.title,
          success: true,
        };
      } else {
        return {
          success: false,
          message: "Error while updating title",
        };
      }
    },
    {
      success: true,
      title: `"Your title will be here"`,
    }
  );

  return (
    <div className="content-con">
      <div>
        <div>
          <h3>useActionState hook example</h3>
          <p>
            Enter text in the input below then click update button to chnage the
            title
          </p>
        </div>
        {/* In react 19, form element action attribute also accepts function*/}
        <form className="form-con" action={submitAction}>
          <input required type="text" name="title" placeholder="Enter title..." />
          <button type="submit" disabled={isPending}>
            Update
          </button>
          {isPending && <p>loading...</p>}
        </form>
      </div>
      {response.success ? (
        <h3>Title : {response?.title}</h3>
      ) : (
        <h3>{response?.message}</h3>
      )}
    </div>
  );
};

export default UpdateTitle;
