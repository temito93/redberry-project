import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/list/List";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import Info from "./pages/info/Info";
import { FormDataProvider } from "./shared/context/form-data";
import PopUp from "./shared/components/PopUp/PopUp";

function App() {
  return (
    <div className="App">
      <FormDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="new" element={<New />} />
              <Route path="lists">
                <Route index element={<List />} />
                <Route path=":itemId" element={<Info />} />
              </Route>
              <Route path="success" element={<PopUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FormDataProvider>
    </div>
  );
}

export default App;
