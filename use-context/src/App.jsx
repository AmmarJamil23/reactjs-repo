import React, { createContext, useState } from 'react';
import ChildC from './components/ChildC';

const UserContext = createContext();
const ThemeContext = createContext();

const App = () => {
  const [user, setUser] = useState({ name: "Ammar" });
  const [theme, setTheme] = useState("light");

  return (
    <>
      {/* UserContext provides user data */}
      <UserContext.Provider value={user}>
        {/* ThemeContext provides theme data */}
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ChildC />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default App;

export { UserContext, ThemeContext };
