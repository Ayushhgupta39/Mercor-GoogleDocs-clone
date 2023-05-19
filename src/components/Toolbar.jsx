import { Box, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import {
  MdAdd,
  MdArrowDropDown,
  MdFormatAlignLeft,
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdKeyboardArrowUp,
  MdOutlineAddComment,
  MdOutlineImagesearchRoller,
  MdOutlineInsertLink,
  MdOutlineLocalPrintshop,
  MdOutlineMode,
  MdOutlineMoreVert,
  MdOutlinePhoto,
  MdOutlineSpellcheck,
  MdRemove,
} from "react-icons/md";
import { BiHighlight, BiRedo, BiUndo } from "react-icons/bi";

export default function Toolbar() {
  return (
    <Flex
      mx={"3"}
      p={"2"}
      borderRadius={"3xl"}
      bgColor={"#edf2fa"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={BiUndo}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={BiRedo}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlineLocalPrintshop}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlineSpellcheck}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlineImagesearchRoller}
      />

      <Flex alignItems={"center"}>
        <Text p={"1"}>100%</Text>
        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"5"}
          cursor={"pointer"}
          as={MdArrowDropDown}
        />
      </Flex>

      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />

      <Flex alignItems={"center"}>
        <Text>Normal text</Text>
        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"6"}
          as={MdArrowDropDown}
        />
      </Flex>

      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />

      <Flex alignItems={"center"}>
        <Text>Arial</Text>
        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"5"}
          cursor={"pointer"}
          as={MdArrowDropDown}
        />
      </Flex>

      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />

      <Flex alignItems={"center"}>
        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"5"}
          cursor={"pointer"}
          as={MdRemove}
        />
        <Box mx={"2"} px={"2"} border={"1px"} borderRadius={"lg"}>
          <Text>11</Text>
        </Box>
        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"5"}
          cursor={"pointer"}
          as={MdAdd}
        />
      </Flex>

      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />

      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdFormatBold}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdFormatItalic}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdFormatUnderlined}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={BiHighlight}
      />

      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />

      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlineInsertLink}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlineAddComment}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlinePhoto}
      />

      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />

      <Flex>
        <Flex>
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdFormatAlignLeft}
          />
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdArrowDropDown}
          />
        </Flex>

        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"5"}
          cursor={"pointer"}
          as={MdOutlineMoreVert}
        />
      </Flex>

      <Flex>
        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"5"}
          cursor={"pointer"}
          as={MdOutlineMode}
        />
        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"5"}
          cursor={"pointer"}
          as={MdArrowDropDown}
        />
      </Flex>
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdKeyboardArrowUp}
      />
    </Flex>
  );
}
