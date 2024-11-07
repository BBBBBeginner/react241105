import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function App37(props) {
  const [Message, setMessage] = useState("hi react");

  function fun1() {
    console.log(Message);
    setMessage("new world");
  }

  return (
    <div>
      <Input onKeyup={(e) => setMessage(e.target.value)} />
      <p>{Message}</p>
      <Button onClick={fun1}>Button</Button>
    </div>
  );
}

export default App37;
