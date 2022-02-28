import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Profile from './Profile';
import ShowUserName from './ShowUserName';
import axios from 'axios';
// import Hoc from './Hoc';
import Library from './ExampleUseRef';
import EnhancedComponent from './Name'
import UserPersonalInfo from './ExampleUseContext/UserPersonalInfo';
import UserProfessionalInfo from './ExampleUseContext/UserProfessionalInfo';
import UserObContext from './UserObContext';
import CountUseReducer from './ExampleUseReducer/CounterUseReducer';
import Hobby from './Hobby';
import CountReducerContext from './CountReducerContext';
import ShowCount from './ShowCount';
import CountReducerButtons from './CountReducerButtons';
function App() {
 
  return (
    <div className="App">
      <UserObContext.Provider value={userOb}>
        <UserPersonalInfo />
        <UserProfessionalInfo />
      </UserObContext.Provider>
      <CountUseReducer></CountUseReducer>
      <Hobby></Hobby>
      {/* <CountReducerContext.Provider value={reducerValue}>
        <ShowCount/>
        <CountReducerButtons/>
      </CountReducerContext.Provider> */}
    </div>
  );
}
export default App;
