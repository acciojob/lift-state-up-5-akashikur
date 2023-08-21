import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <ChildComponent onLogin={handleLogin} />
      )}
    </div>
  );
}

export default ParentComponent;
