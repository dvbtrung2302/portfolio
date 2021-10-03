// 3rd libraries
import React from "react";
import { Switch } from "react-router-dom";

// styles
import "styles/theme.scss";
import "styles/global.scss";

import Sidebar from "components/Sidebar";

function App() {
  return (
    <div className="app light">
      <Switch>
        <Sidebar />
      </Switch>
    </div>
  );
}

export default App;
