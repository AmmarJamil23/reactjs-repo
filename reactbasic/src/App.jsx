import React from 'react';
import './App.css';         
import UserCard from './components/UserCard';
import test from './assets/test1.jpeg'
import test1 from './assets/test2.jpeg'
import test3 from './assets/test3.jpeg'

const App = () => {
  return (
    <div className="container">
      <UserCard name='Spongebob' desc='desc1' image={test} />
      <UserCard name='Squidward' desc='desc2' image={test1} />
      <UserCard name='Patrick' desc='desc3' image={test3} />
    </div>
  );
};

export default App;
