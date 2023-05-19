import { Box, Flex, Icon, Image, Link, VStack } from "@chakra-ui/react";
import React from "react";
import { MdAdd, MdOutlineArrowForwardIos } from "react-icons/md";

export default function Sidebar() {
  return (
    <Flex flexDirection={"column"}>
      <VStack spacing={"12"}>
        <Box mt={"3"}>
          <Link
            href="https://calendar.google.com/calendar"
            isExternal
          >
            <Image
              cursor={"pointer"}
              boxSize={"6"}
              src=""
            />
          </Link>
        </Box>
        <Box>
          <Link href="https://keep.google.com" isExternal>
            <Image
              cursor={"pointer"}
              boxSize={"6"}
              src=""
            />
          </Link>
        </Box>
        <Box>
          <Link href="https://play.google.com/store/apps/details?id=com.google.android.apps.tasks&hl=en&gl=US" isExternal>
            <Image
              cursor={"pointer"}
              boxSize={"6"}
              src=""
            />
          </Link>
        </Box>
        <Box>
          <Link href="https://contacts.google.com/" isExternal>
            <Image
              cursor={"pointer"}
              boxSize={"6"}
              src=""
            />
          </Link>
        </Box>
        <Box>
          <Link href="https://www.google.com/maps" isExternal>
            <Image
              cursor={"pointer"}
              boxSize={"6"}
              src=""
            />
          </Link>
        </Box>

        <Box>
          <Icon cursor={"pointer"} boxSize={"6"} as={MdAdd} />
        </Box>

        <Box>
          <Icon cursor={"pointer"} as={MdOutlineArrowForwardIos} />
        </Box>
      </VStack>
    </Flex>
  );
}
