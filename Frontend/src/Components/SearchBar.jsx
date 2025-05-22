import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Flex,
  Center,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <InputGroup h={"60px"}>
      <InputLeftElement pointerEvents="auto" height={"100%"}>
        <Icon as={FaSearch} color="gray.600" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search textbooks, questions"
        value={searchQuery}
        onChange={handleSearch}
        borderRadius="10px"
        border={"2px solid gray"}
        height={"100%"}
        _placeholder={{ color: "gray.600", fontWeight: "semibold" }}
      />
    </InputGroup>
  );
};

export default SearchBar;
