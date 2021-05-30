import SidebarComponent from "./components/Sidebar"
import Expenses from "./pages/Expenses"

function App() {

  return (
    <div className="flexbox">
      <SidebarComponent/>
      <div className="layout-container">
        <Expenses/>
      </div>
    </div>
  );

  // return React.createElement('div', { className: "parent" }, React.createElement('div', {}, title), React.createElement('p', {}, 'Content to be...'))
}

export default App;
