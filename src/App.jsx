import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import { Home, Login, Profile } from "./components";
import { Feed } from "./components/Feed";
import { Connections } from "./components/Connections";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/connection" element={<Connections />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
