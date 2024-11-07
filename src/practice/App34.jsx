import React from "react";
import { Box, HStack } from "@chakra-ui/react";

function App34(props) {
  function fun1(e) {
    console.log(e.target.innerText);
  }
  return (
    <div>
      <HStack h={20}>
        <Box h={20} bg={"orange"} onClick={fun1}>
          Lorem ipsum dolor.
        </Box>
        <Box h={20} bg={"blue"} onClick={fun1}>
          Lorem ipsum dolor. sit amet, conseir??
        </Box>
        <Box h={20} bg={"teal"} onClick={fun1}>
          Lorem ipsum dolor. lot iitee boot!!!
        </Box>
      </HStack>
    </div>
  );
}

export default App34;
