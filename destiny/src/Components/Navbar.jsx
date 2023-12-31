import {
  Box,
  Image,
  Stack,
  Menu,
  MenuButton,
  Button,
  Text,
  MenuList,
  MenuItem,
  InputGroup,
  Input,
  InputLeftElement,
  list,
} from "@chakra-ui/react";
import { BiReceipt } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";

import Buttons from "./Button";
import db from "../Database/db.json";
const { navList, nav_products } = db;
// console.log("navList:", navList);

const nav_buttons = [
  { name: "Upload", icon: BiReceipt },
  { name: "Cart", icon: FaShoppingCart },
  { name: "Sign in / Sign up", icon: HiUserCircle },
];

const Navbar = () => {
  return (
    <>
      <Stack
        alignItems={"center"}
        bgColor={"#32aeb1"}
        direction={"row"}
        gap={10}
        p={"0 20px"}
      >
        <Image
          h={"75px"}
          // boxSize={"168px"}
          src="https://images.app.goo.gl/ugiCt5FiELUrg3kP9"
        />
        <InputGroup>
          <Input
            placeholder="Search for medicine & wellness products..."
            backgroundColor={"white"}
            outline={"none"}
            border={"none"}
            w={"100%"}
            p={"0 1rem 0 10rem"}
          />
          <InputLeftElement w={"auto"}>
            <Button w={"150px"} alignItems={"center"} backgroundColor="white">
              Deliver to{" "}
              <Text ml={1} display="inline" color="blue">
                110002
              </Text>
            </Button>
          </InputLeftElement>
        </InputGroup>

        <Stack direction={"row"} spacing={5}>
          {nav_buttons.map((button) => (
            <Button
              key={button.name}
              leftIcon={<button.icon />}
              colorScheme="teal"
              variant="link"
              color={"white"}
            >
              {button.name}
            </Button>
          ))}
        </Stack>
      </Stack>
      <Stack
        // alignItems={"center"}
        bgColor={"#32aeb1"}
        direction={"row"}
        pos={"sticky"}
        top={"0%"}
        bottom={0}
        zIndex={999}
        width="100%"
        justifyContent={"space-around"}
        p={"20px"}
      >
        {navList.map((list) => {
          let subItem = list.list;
          return (
            <ul
              key={list.image}
              style={{ backgroundImage: `url(${list.image})` }}
              className="catagories"
            >
              {list.name}
              <ul className="listItems">
                {subItem.map((item) => (
                  <li key={item} className="list_items_list">
                    {item}
                  </li>
                ))}
              </ul>
            </ul>
          );
        })}
      </Stack>
      <div>
        {/* item catagory section */}

        {/* List Products */}
        <Stack justifyContent={"space-around"} direction={"row"}>
          {nav_products.map((list) => (
            <Box key={list.name} fontSize="sm">
              {list.name}
            </Box>
          ))}
        </Stack>
      </div>
    </>
  );
};
export default Navbar;
