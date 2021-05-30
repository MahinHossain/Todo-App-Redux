import "./App.css";

import TaskListPage from "./TaskListPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TaskDetails from "./components/tasks/TaskDetails";
import Headers from "./components/components/Header";
import AboutUs from "./components/components/AboutUs";
import NotFound from "./NotFound";
import TaskEditPage from "./components/components/TaskEditPage";
import GetApiData from "./components/components/services/GetApiData";
import ShowData from "./components/tasks/ShowData";

function App() {
  return (
    <Router>
      <div className="container">
        <Headers />

        <Switch>
          <Route exact path="/">
            <TaskListPage />
          </Route>

          <Route path="/detail">
            <TaskDetails />
          </Route>

          <Route path="/aboutus">
            <AboutUs />
          </Route>

          <Route path="/edit/:id">
            <TaskEditPage />
          </Route>

          <Route path="/getapi">
            <GetApiData />
          </Route>

          <Route path="/showdata">
            <ShowData />
          </Route>

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
