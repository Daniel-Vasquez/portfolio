import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import LayoutNavbar from "./components/LayoutNavbar.jsx";
import Home from "./pages/Home.jsx";
import Project from "./pages/Project.jsx";
import { ProjectContext } from "./context/ProjectContext.jsx";
import { projects } from "./projects.js";

function App() {
  return (
    <ProjectContext.Provider value={projects}>
      <Routes>
        <LayoutNavbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/project/:nameProject" component={Project} />
          </Switch>
        </LayoutNavbar>
      </Routes>
    </ProjectContext.Provider>
  );
}

export default App;
