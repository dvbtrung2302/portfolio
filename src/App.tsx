import { lazy, Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
const Experience = lazy(() => import("./pages/Experience"));
const Works = lazy(() => import("./pages/Works"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  const theme: IInitialThemeReducerState = useAppSelector(state => state.theme);
  let location = useLocation();

  return (
    <div className={`app-theme app-style app ${theme.mode}`} data-test="app">
      <Sidebar mode={theme.mode} />
        <TransitionGroup>
          <CSSTransition 
            timeout={500} 
            classNames="fade" 
            key={location.pathname}
          >
            <div>
              <Suspense fallback={<></>}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/skills" component={Skills} />
                  <Route exact path="/experience" component={Experience} />
                  <Route exact path="/works" component={Works} />
                  <Route exact path="/blog" component={Blog} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
              </Suspense>
            </div>
          </CSSTransition>
        </TransitionGroup>
    </div>
  );
}

export default App;
