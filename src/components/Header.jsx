import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import {
  MdArrowDropDown,
  MdDriveFileMoveOutline,
  MdLockOutline,
  MdOutlineCloudDone,
  MdOutlineComment,
  MdOutlineVideoCall,
  MdRestore,
  MdStarBorder,
} from "react-icons/md";

export default function Header() {
  return (
    <Flex
      textColor={"#202124"}
      className="header"
      justifyContent={"space-between"}
    >
      <Flex>
        <Flex m={"3"} mr={"1"}>
          <Image src="/images/docs_logo.png" boxSize={"12"} />
        </Flex>
        <Flex flexDirection={"column"}>
          <Flex mt={"2"}>
            <Text
              textColor={"blackAlpha.700"}
              fontWeight={400}
              fontSize={"xl"}
              pl={"2"}
            >
              Untitled document
            </Text>
            <Flex alignItems={"center"} px={"3"}>
              <Icon
                color={"#44494E"}
                mx={"1"}
                boxSize={"5"}
                as={MdStarBorder}
              />
              <Icon
                color={"#44494E"}
                mx={"1"}
                boxSize={"5"}
                as={MdDriveFileMoveOutline}
              />
              <Icon
                color={"#44494E"}
                mx={"1"}
                boxSize={"5"}
                as={MdOutlineCloudDone}
              />
            </Flex>
          </Flex>
          <Flex>
            <UnorderedList
              cursor={"pointer"}
              ml={"0"}
              listStyleType={"none"}
              display={"flex"}
            >
              <ListItem px={"2"}>File</ListItem>
              <ListItem px={"2"}>Edit</ListItem>
              <ListItem px={"2"}>View</ListItem>
              <ListItem px={"2"}>Insert</ListItem>
              <ListItem px={"2"}>Format</ListItem>
              <ListItem px={"2"}>Tools</ListItem>
              <ListItem px={"2"}>Extensions</ListItem>
              <ListItem px={"2"}>Help</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Flex alignItems={"center"} className="meet">
          <Box mx={"3"}>
            <Icon color={"#44494E"} boxSize={"7"} as={MdRestore} />
          </Box>
          <Box mx={"3"}>
            <Icon color={"#44494E"} boxSize={"7"} as={MdOutlineComment} />
          </Box>
          <Box mx={"3"}>
            <Icon color={"#44494E"} boxSize={"7"} as={MdOutlineVideoCall} />
            <Icon color={"#44494E"} boxSize={"7"} as={MdArrowDropDown} />
          </Box>
          <Box mx={"3"}>
            <Button
              color={"#001d35"}
              fontWeight={"400"}
              p={"9px 24px"}
              borderRadius={"3xl"}
              bgColor={"#c2e7ff"}
              font
              leftIcon={<MdLockOutline />}
            >
              Share
            </Button>
          </Box>
        </Flex>
        <Flex m={"3"}>
          <Image
            src="/images/profile.jpg"
            borderRadius={"full"}
            boxSize={"12"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
