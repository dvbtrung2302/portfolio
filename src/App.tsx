import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

// styles
import "styles/theme.scss";
import "styles/global.scss";

// components
import Sidebar from "components/Sidebar";

import { IInitialThemeReducerState } from "redux/reducers/themeReducer";
import { useAppSelector } from "hooks/useAppSelector";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));

function App() {
  const theme: IInitialThemeReducerState = useAppSelector(state => state.theme);

  return (
    <div className={`app-theme app-style app ${theme.mode}`} data-test="app">
      <Sidebar mode={theme.mode} />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
