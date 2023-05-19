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
      <Icon boxSize={"5"} cursor={"pointer"} as={BiUndo} />
      <Icon boxSize={"5"} cursor={"pointer"} as={BiRedo} />
      <Icon boxSize={"5"} cursor={"pointer"} as={MdOutlineLocalPrintshop} />
      <Icon boxSize={"5"} cursor={"pointer"} as={MdOutlineSpellcheck} />
      <Icon boxSize={"5"} cursor={"pointer"} as={MdOutlineImagesearchRoller} />

      <Flex alignItems={"center"}>
        <Text p={"1"}>100%</Text>
        <Icon boxSize={"5"} cursor={"pointer"} as={MdArrowDropDown} />
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
        <Icon boxSize={"6"} as={MdArrowDropDown} />
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
        <Icon boxSize={"5"} cursor={"pointer"} as={MdArrowDropDown} />
      </Flex>

      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />

      <Flex alignItems={"center"}>
        <Icon boxSize={"5"} cursor={"pointer"} as={MdRemove} />
        <Box mx={"2"} px={"2"} border={"1px"} borderRadius={"lg"}>
          <Text>11</Text>
        </Box>
        <Icon boxSize={"5"} cursor={"pointer"} as={MdAdd} />
      </Flex>

      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />

      <Icon boxSize={"5"} cursor={"pointer"} as={MdFormatBold} />
      <Icon boxSize={"5"} cursor={"pointer"} as={MdFormatItalic} />
      <Icon boxSize={"5"} cursor={"pointer"} as={MdFormatUnderlined} />
      <Icon boxSize={"5"} cursor={"pointer"} as={BiHighlight} />

      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />

      <Icon boxSize={"5"} cursor={"pointer"} as={MdOutlineInsertLink} />
      <Icon boxSize={"5"} cursor={"pointer"} as={MdOutlineAddComment} />
      <Icon boxSize={"5"} cursor={"pointer"} as={MdOutlinePhoto} />

      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />

      <Flex>
      <Flex>
        <Icon boxSize={"5"} cursor={"pointer"} as={MdFormatAlignLeft} />
        <Icon boxSize={"5"} cursor={"pointer"} as={MdArrowDropDown} />
      </Flex>

      <Icon boxSize={"5"} cursor={"pointer"} as={MdOutlineMoreVert} />
      </Flex>

      <Flex>
        <Icon boxSize={"5"} cursor={"pointer"} as={MdOutlineMode} />
        <Icon boxSize={"5"} cursor={"pointer"} as={MdArrowDropDown} />
      </Flex>
      <Icon boxSize={"5"} cursor={"pointer"} as={MdKeyboardArrowUp} />
    </Flex>
  );
}
