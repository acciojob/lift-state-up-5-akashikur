import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, you are logged in!</p>
      ) : (
        <ChildComponent onLogin={handleLogin} />
      )}
    </div>
  );
}

export default ParentComponent;
