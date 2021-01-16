import React from "react";

import { Provider } from "./store";
import TodoList from "./components/TodoList";

const App = () => (
  <Provider>
    <TodoList />
  </Provider>
);

export default App;
