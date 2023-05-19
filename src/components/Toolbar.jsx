import { Flex } from "@chakra-ui/react";
import React from "react";

export default function Toolbar() {
  return (
    <Flex
      mx={"3"}
      p={"3"}
      borderRadius={"3xl"}
      bgColor={"#edf2fa"}
      justifyContent={"space-around"}
    >
      <Flex borderColor={"black"}>

      </Flex>
      <Flex>Second</Flex>
      <Flex>Third</Flex>
      <Flex>Fourth</Flex>
      <Flex>Fifth</Flex>
      <Flex>Sixth</Flex>
      <Flex>Seventh</Flex>
    </Flex>
  );
}
