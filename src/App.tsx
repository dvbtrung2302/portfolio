// 3rd libraries
import { Switch } from "react-router-dom";

// styles
import "styles/theme.scss";
import "styles/global.scss";

// components
import Sidebar from "components/Sidebar";
import HomeIntro from "components/HomeIntro";

import { IInitialThemeReducerState } from "redux/reducers/themeReducer";
import { useAppSelector } from "hooks/useAppSelector";

function App() {
  const theme: IInitialThemeReducerState = useAppSelector(state => state.theme);

  return (
    <div className={`app-theme app-style app ${theme.mode}`} data-test="app">
      {/* <Switch> */}
        <Sidebar mode={theme.mode} />
        <HomeIntro />
      {/* </Switch> */}
    </div>
  );
}

export default App;
