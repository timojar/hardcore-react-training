import React from "react";

const Person = props => {
  const { person, firePerson } = props;

  return (
    <div
      key={person.id}
      css={[
        {
          border: "5px solid rgb(0,0,0)",
          borderRadius: "15px",
          margin: "1em 0",
          padding: "1em"
        },
        person.gender === "m" && {
          backgroundColor: "rgb(200, 200, 255)"
        },
        person.gender === "f" && {
          backgroundColor: "rgb(255, 200, 200)"
        }
      ]}
    >
      <div>
        {person.firstName} {person.lastName}
        <button onClick={() => firePerson(person.id)}>lenkkaria</button>
      </div>
    </div>
  );
};

export default Person;
