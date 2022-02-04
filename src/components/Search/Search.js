import React, { useState, useEffect, useCallback, Suspense } from "react";
import { Container, SearchInput } from "./SearchStyles";
import SearchCard from "../SearchCard/SearchCard";
import { fetchUserData } from "../userData";

const resource = fetchUserData();

function Search() {
  const [userData, setUserData] = useState([]);
  const [filteredName, setfilterdName] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const user = resource.user.read();

  useEffect(() => {
    setUserData(user);
  }, []);

  const changeHandler = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filteredValue =
      value &&
      userData.filter(
        (e) =>
          e.id.value?.includes(value) ||
          e.name.first.toLowerCase().includes(value.toLowerCase())
        // (e) => e.id.value.includes(value)
      );

    setfilterdName(filteredValue);
  };

  const debounce = (func, time = 1000) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, time);
    };
  };

  return (
    <Container>
      <SearchInput
        type="search"
        placeholder="Search name here ..."
        onChange={debounce(changeHandler)}
      />

      <SearchCard filteredName={filteredName} inputValue={inputValue} />
    </Container>
  );
}

export default Search;
