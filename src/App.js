import { Provider } from "react-redux";
import { store } from "./store";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dialog from "./pages/Dialog";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
      <Provider store={store}>
            <div className="h-screen">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                        <Route 
                            path="dialog" 
                            element={<Dialog/>} 
                        />
                        <Route path="login" element={<Login/>} />
                </Routes>
            </div>
      </Provider>
  );
}

export default App;
