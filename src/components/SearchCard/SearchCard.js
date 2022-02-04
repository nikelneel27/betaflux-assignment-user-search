import React, { useState } from "react";
import { Container, Card, Address, Id, NoUserDiv } from "./SearchCardStyles";

function SearchCard({ filteredName, inputValue }) {
  const [active, setActive] = useState(0);

  const coloredSearch = (name) => {
    let re = new RegExp(inputValue, "gi");

    let newText = name?.replace(
      re,
      (val) => `<span style="color:blue;">${val}</span>`
    );
    return newText;
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 38 && active > 0) {
      setActive(active - 1);
    } else if (e.keyCode === 40 && active < filteredName.length - 1) {
      setActive(active + 1);
    }
  };
  return (
    <>
      {filteredName?.length > 0 && (
        <Container tabIndex="0" onKeyDown={(e) => handleKeyDown(e)}>
          {filteredName.map((e, i) => (
            <Card activeIndex={active} index={i}>
              <Id>
                <div
                  dangerouslySetInnerHTML={{
                    __html: coloredSearch(e.id.value),
                  }}
                />
              </Id>
              <div
                dangerouslySetInnerHTML={{
                  __html: coloredSearch(e.name.first),
                }}
              />

              <Address>
                {e.location.street.number} {e.location.street.name}
                {e.location.city}
              </Address>
            </Card>
          ))}
        </Container>
      )}
      {filteredName.length === 0 && inputValue && (
        <NoUserDiv>no user</NoUserDiv>
      )}
    </>
  );
}

export default SearchCard;
