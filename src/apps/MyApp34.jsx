import React from "react";
import { Button } from "../components/ui/button.jsx";
import { toaster } from "../components/ui/toaster.jsx";

function MyApp34(props) {
  return (
    <div>
      <Button
        onClick={() => {
          toaster.create({
            description: "안내메시지",
            type: "error",
            duration: 1000,
          });
        }}
      >
        실패
      </Button>
      <Button
        onClick={() => {
          toaster.create({ description: "안내메시지", type: "success" });
        }}
      >
        성공
      </Button>
      <Button
        onClick={() => {
          toaster.create({ description: "안내메시지", type: "info" });
        }}
      >
        안내메시지
      </Button>

      <Button
        onClick={() => {
          toaster.create({
            description: "안내 메시지!!!",
          });
        }}
      ></Button>
    </div>
  );
}

export default MyApp34;
