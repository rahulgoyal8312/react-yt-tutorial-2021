import { useState } from 'react'
import SidebarComponent from "./components/Sidebar"
import Expenses from "./pages/Expenses"
import { sidebarList } from './config/constants'
import AddExpense from './pages/Expenses/AddExpense'

function App() {

  // let activeItem = 0;
  const [activeItem, setActiveItem] = useState(0)

  const itemClickHandler = id => {
    // activeItem = id;
    setActiveItem(id);
    // console.log(`Id: ${activeItem} - ${id}`);
  }

  const AddExpenseSubmissionHandler = payload => {
    console.log(payload);
  }

  return (
    <div className="flexbox">
      <SidebarComponent
        sidebarList={sidebarList}
        activeItem={activeItem}
        itemClick={itemClickHandler}
      />
      <div className="layout-container">
        {activeItem === 0 && <Expenses />}
        {activeItem === 1 && <AddExpense onSubmitHandler={AddExpenseSubmissionHandler} />}
        {activeItem === 2 && "Analytics Page!"}
      </div>
    </div>
  );

  // return React.createElement('div', { className: "parent" }, React.createElement('div', {}, title), React.createElement('p', {}, 'Content to be...'))
}

export default App;
