import SidebarComponent from "./components/Sidebar"
import Expenses from "./pages/Expenses"
import { sidebarList } from './config/constants'
import AddExpense from './pages/Expenses/AddExpense'

import { Redirect, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="flexbox">
      <SidebarComponent
        sidebarList={sidebarList}
      />
      <div className="layout-container">
        <Switch>
          <Redirect to={"/"} from={"/dashboard"}/>
          <Route path={"/"} exact>
            <Expenses/>
          </Route>
          <Route path={"/:operation(add)"} exact>
            <AddExpense/>
          </Route>
          <Route path={"/:operation(edit)/:id"} exact>
            <AddExpense/>
          </Route>
          <Route path={"/analytics"} exact>
            <p>Analytics Page!</p>
          </Route>
          <Route path={"*"}>
            <p>Not found!</p>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
