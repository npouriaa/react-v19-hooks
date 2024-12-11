import axios from "axios";
import { useState, useOptimistic, useRef } from "react";

const Thread = ({ messages, sendMessage }) => {
  const formRef = useRef();
  async function formAction(formData) {
    addOptimisticMessage(formData.get("message"));
    formRef.current.reset();
    await sendMessage(formData);
  }
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

const Optimistic = () => {
  // useOptimistic example
  const [messages, setMessages] = useState([
    { text: "Hello there!", sending: false, key: 1 },
  ]);

  const deliverMessage = async (message) => {
    await new Promise((res) => setTimeout(res, 1000));
    return message;
  };

  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get("message"));
    setMessages((messages) => [...messages, { text: sentMessage }]);
  }

  return (
    <div className="content-con">
      <div>
        <div>
          <h3>useOptimistic hook example</h3>
          <p>
            useOptimistic is a React Hook that lets you optimistically update
            the UI. Enter text in the input below then click update button to
            chnage the title
          </p>
        </div>
        <Thread messages={messages} sendMessage={sendMessage} />{" "}
      </div>
    </div>
  );
};

export default Optimistic;
