/* eslint-disable no-unused-vars */

import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import CatItem from "./components/CatItem";
import CatPost from "./components/CatPost";
import cats from "./data/cats";
import "bootstrap/dist/css/bootstrap.css";
import AppSearch from "./components/AppSearch";

function App() {
  const [selectedCat, setSelectedCat] = useState(cats[null]);
  const [searchText, setSearchText] = useState("");

  function onCatCloseClick() {
    setSelectedCat(null);
  }

  function onCatOpenClick(theCat) {
    setSelectedCat(theCat);
  }

  const catElements = cats
    .filter((cat) => {
      return cat.title.includes(searchText);
    })
    .map((cat, index) => {
      return <CatItem key={index} cat={cat} onCatClick={onCatOpenClick} />;
    });

  let catPost = null;
  if (selectedCat) {
    catPost = <CatPost cat={selectedCat} onBgClick={onCatCloseClick} />;
  }

  return (
    <>
      <div>
        <AppHeader />
        <section className="app-section">
          <div className="app-container">
            <AppSearch value={searchText} onValueChange={setSearchText} />
            <div className="app-grid">{catElements}</div>
          </div>
        </section>
        {catPost}
      </div>
    </>
  );
}

export default App;
