import NavBar from "./components/Navbar/NavBar";
import SideNavBar from "./components/Sidebar/SideNavBar";
// import logo from "./assets/navImage.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        {/* <SideNavBar /> */}
        <Routes>
          <Route path="/" element={<SideNavBar />}>
            <Route index element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
