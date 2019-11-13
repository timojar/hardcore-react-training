import React, { useEffect } from "react";
import personServcice from "../services/person";
import PersonList from "../components/PersonList";

import HirePersonForm from "../components/PersonForm";
import { useDispatch, useSelector } from "react-redux";
import { HIRE_PERSON } from "../ducks/person";
import { FIRE_PERSON, getPersons } from "../ducks/person";

const App = props => {
  const dispatch = useDispatch();
  const persons = useSelector(state => state.person);
  console.log(persons, "persons");
  useEffect(() => {
    dispatch(getPersons());
  }, [dispatch]);

  const freshMeat = person => person.age <= 30;

  const fresh = persons.filter(freshMeat);
  const lostCause = persons.filter(p => !freshMeat(p));

  const firePerson = id => {
    dispatch({ type: FIRE_PERSON, payload: id });
  };
  const hirePerson = person => {
    dispatch({ type: HIRE_PERSON, payload: person });
  };

  return (
    <>
      <div>
        <h1>Trolololooo</h1>
        <p>
          Dear sir or madam, you must be <strong>suckling</strong> on a{" "}
          <em>duckling!</em>
        </p>
        <HirePersonForm hirePerson={hirePerson} />
        <h2>Fresh Meat</h2>
        <PersonList firePerson={firePerson} persons={fresh} />
        <h2>Lost cause</h2>
        <PersonList firePerson={firePerson} persons={lostCause} />
      </div>
    </>
  );
};

export default App;
