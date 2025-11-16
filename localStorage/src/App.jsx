import React from 'react'

const App = () => {
  // localStorage.clear();
  // localStorage.setItem('user', "customer");
  // const user = localStorage.getItem('user');
  // console.log(user);
  // localStorage.removeItem('user');
  // let user = {
  //   username: "Customer",
  //   age: 25,
  //   city: "Islamabad"
  // }
  // localStorage.setItem('user', JSON.stringify(user))

  // console.log(user);

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  
  
  return (
    <div>App</div>
  )
}

export default App;