import React, { useState, useEffect } from "react";
import personServcice from "../services/person";
import PersonList from "../components/PersonList";

const App = props => {
  const [persons, setPersons] = useState([]);
  console.log(persons, "persons");
  useEffect(() => {
    personServcice.getPersons().then(setPersons);
  }, []);

  const freshMeat = person => person.age <= 30;

  const fresh = persons.filter(freshMeat);
  const lostCause = persons.filter(p => !freshMeat(p));

  const firePerson = id => {
    setPersons(persons.filter(p => p.id !== id));
  };

  return (
    <>
      <div>
        <h1>Trolololooo</h1>
        <p>
          Dear sir or madam, you must be <strong>suckling</strong> on a{" "}
          <em>duckling!</em>
        </p>
        <h2>Fresh Meat</h2>
        <PersonList firePerson={firePerson} persons={fresh} />
        <h2>Lost cause</h2>
        <PersonList firePerson={firePerson} persons={lostCause} />
      </div>
    </>
  );
};

export default App;
