import React from "react";
import Person from "./Person";

const PersonList = props => {
  const { persons, ...rest } = props;
  return (
    <div>
      {persons.map(person => {
        return <Person {...rest} key={person.id} person={person} />;
      })}
    </div>
  );
};

export default PersonList;
