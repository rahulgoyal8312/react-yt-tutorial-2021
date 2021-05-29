
function App() {

  const sidebarList = [
    {
      name: "Expenses",
      path: "/",
      icon: "insights"
    },
    {
      name: "Add Expense",
      path: "/add",
      icon: "note_add"
    }
  ]

  return (
    <div className="flexbox">
      <div className="sidebar-container">
        <div className="sidebar-container__brand">
          Expense Tracker
        </div>
        <div className="sidebar-container__list">
          <ul>
            <li>
              <a href={sidebarList[0].path} className="active">
                <span className="material-icons">{sidebarList[0].icon}</span>
                <span>{sidebarList[0].name}</span>
              </a>
            </li>
            <li>
              <a href={sidebarList[1].path}>
                <span className="material-icons">{sidebarList[1].icon}</span>
                <span>{sidebarList[1].name}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  // return React.createElement('div', { className: "parent" }, React.createElement('div', {}, title), React.createElement('p', {}, 'Content to be...'))
}

export default App;
