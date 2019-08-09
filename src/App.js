import React, { useState } from 'react';
import './App.css';
import Header from "../src/components/header"
import Search from "../src/components/search"
import Auth from "../src/components/auth/auth"


function App() {

  const [auth, showAuth] = useState(true)

  const hideAuthModal = () => {
    showAuth(false)
  }

  const showAuthModal = () => {
    showAuth(true)
  }

  return (
    <div className="App">
      <Header
        showAuthModal={showAuthModal} />
      <Search />
      <Auth
        auth={auth}
        hideAuthModal={hideAuthModal}
      />
    </div>
  );
}

export default App;
