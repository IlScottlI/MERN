import "./App.css";

import TabsFancy from "./TabsFancy";

function App() {
  const tabsArray = [
    { index: 1, label: "Tab 1", content: "Tab 1 Content" },
    { index: 2, label: "Tab 2", content: "Tab 2 Content" },
    { index: 3, label: "Tab 3", content: "Tab 3 Content" },
  ];
  const initalTab = "Tab 1";
  return (
    <>
      <TabsFancy tabsArray={tabsArray} initalTab={initalTab} />
    </>
  );
}

export default App;
