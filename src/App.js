import React, { useState } from 'react';
import './App.css';
import Header from "../src/components/header"
import Search from "../src/components/search"
import Auth from "../src/components/auth"
import { db } from "../src/components/firebase"

function App() {

  const [authenticated, showAuth] = useState(false)
  const [user, userInfo] = useState({
    currentShow: "",
    shows: [],
    user: null,
  })

  const [show, setShow] = useState(
    {
      name: "",
      imdb: "",
      thetvdb: "",
      image: "",
      network: "",
      rating: "",
      runtime: "",
      summary: ""
    }
  )

  const addToShows = () => {
    user !== null &&
      db
        .collection(user.user)
        .doc(show.name)
        .set(show)
  }

  return (
    <div className="App">
      <Header
        showAuth={showAuth}
      />
      <Search
        show={show}
        setShow={setShow}
        addToShows={addToShows}
      />
      <Auth
        authenticated={authenticated}
        user={user.user}
        showAuth={showAuth}
        userInfo={userInfo}
      />
    </div>

  );
}

export default App;
