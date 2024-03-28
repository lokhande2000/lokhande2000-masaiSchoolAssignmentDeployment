import { Flex, Text, VStack, Select } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav >
    <div className="navbar">
      <Flex display={{ base: "none", lg:"Flex" }}   justifyContent='space-around' bg='#444444' p={5} color='#fff' fontSize='xl'>
        <Link to="/">Home</Link>
        <Link to="education">Education</Link>
        <Link to="/">Projects</Link>
        <Link to="skills">Skills</Link>
        <Link to="/">Contact Me</Link>
      </Flex>

        <Select display={{ base: "block", lg:"none" }} size='lg' icon='none' bg='#555'>
        <option  value='home'>Home</option>
        <option value='education'>Education</option>
        <option value='projects'>Projects</option>
        <option value='skills'>Skills</option>
        <option value='contactme'>Contact Me</option>
        </Select>
        
    </div>
    </nav>
  );
};

export default Navbar;
