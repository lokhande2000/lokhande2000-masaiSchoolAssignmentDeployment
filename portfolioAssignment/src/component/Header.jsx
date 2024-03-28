import { Heading } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <header>
      <Heading textAlign='center' as="h1" size="3xl" p={5} color='#00BCD4' bg='#333333' >
        My Portfolio
      </Heading>
    </header>
  );
};

export default Header;
