import { Provider } from "react-redux";
import { store } from "./store";
import Chat from "./components/Chat";

function App() {
  return (
      <Provider store={store}>
        <div className="h-screen">
          <Chat></Chat>
        </div>
      </Provider>
  );
}

export default App;
