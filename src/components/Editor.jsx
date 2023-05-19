import { Box, Flex, Icon, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdFormatListBulleted } from "react-icons/md";

export default function Editor() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Box>
      <Box borderTop={"1px"} borderLeft={"1px"} ml={"4"} mt={"4"}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          left={"10"}
          position={"absolute"}
          borderRadius={"full"}
          _hover={{ bgColor: "gray.100", cursor: "pointer" }}
          boxSize={"12"}
        >
          <Icon boxSize={"7"} as={MdFormatListBulleted} />
        </Flex>
        <Flex justifyContent={"center"}>
          <Box border={"1px"} mt={"4"} width={"70%"}>
            <Textarea
              value={text}
              onChange={handleTextChange}
              width={"full"}
              placeholder="Type @ to insert"
              _focus={{ outline: "none" }}
              height={"100vh"}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
