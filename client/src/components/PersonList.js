import React from "react";
import Person from "./Person";

const PersonList = props => {
  const { persons, ...rest } = props;
  return (
    <div>
      {persons
        .sortBy(p => p.firstName)
        .sortBy(p => p.lastName)
        .map(person => {
          return <Person {...rest} key={person.id} person={person} />;
        })
        .reverse()}
    </div>
  );
};

export default PersonList;
