import React from "react";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import { useSelector } from "react-redux";
import Login from "./components/Login/Login";

function App() {
  // const user = useSelector((state) => state.user.user);
  const user = null; // TODO

  return (
    <div className="App">
      {user ? (
        <>
          {/* sidebar */}
          <Sidebar />

          {/* char */}
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
