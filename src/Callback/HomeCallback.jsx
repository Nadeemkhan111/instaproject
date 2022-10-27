import React, { useState } from "react";
import Callback from "./Callback";

const HomeCallback = () => {
  const [uiColor, setUiColor] = useState(null);
  const getColor = (color) => {
    setUiColor(color);
  };
  return (
    <div className="main">
      <div style={{ background: `${uiColor}` }}></div>
      <Callback getColor={getColor} />
    </div>
  );
};

export default HomeCallback;
