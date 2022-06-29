import React from "react";
import { HashRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import BackgroundColors from "@components/BackgroundColors.jsx";
import FontWeights from "@components/FontWeights.jsx";
import FontSizes from "@components/FontSizes.jsx";
import Headings from "@components/Headings.jsx";

import "./res/styles/reiend/scss/index.scss";

// import MOURI_SAN from "@assets/mouri-san.jpeg";
// import PHONE from "@assets/phone.jpg";

const Container = () => {
  return (
    <div className="library">
      <h1 className="library__title">SCSS library</h1>
      <div className="library__links fsz-5 fw-8 fc-kyanite-L5">
        <Link to="/colorPallete" index>Colors</Link>
        <Link to="/fontWeights">Font Weights</Link>
        <Link to="/fontSizes">Font Sizes</Link>
        <Link to="/headings">Headings</Link>
      </div>
      <Outlet />
    </div>
  );
};
// <BackgroundColors />
// <FontWeights />
// <FontSizes />
// <Headings />

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Container /> }>
          <Route path="colorPallete" element={<BackgroundColors />} />
          <Route path="fontWeights" element={<FontWeights />} />
          <Route path="fontSizes" element={<FontSizes />} />
          <Route path="headings" element={<Headings />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
