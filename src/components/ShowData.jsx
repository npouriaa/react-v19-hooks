import axios from "axios";
import { useState, useTransition } from "react";

const ShowData = () => {
  // using useTransition to handle pending states
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      const response = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });

      if (response) {
        setData(response.data[0]);
        console.log(response.data[0]);
      }
    });
  };

  return (
    <div className="content-con">
      <div>
        <h3>useTransition hook update example</h3>
        <p>
          By clicking the button below data will be fetched and a loader will
          show to you untill data fetches completely, using useTransition hook
          update
        </p>
      </div>
      <button onClick={handleClick} disabled={isPending}>
        show data
      </button>
      {isPending && <p>loading...</p>}
      {error && <p>{error}</p>}
      <h4>Id :{data?.id}</h4>
      <h4>title : {data?.title}</h4>
    </div>
  );
};

export default ShowData;
