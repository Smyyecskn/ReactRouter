import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Paths from "./pages/Paths";
import FullStack from "./pages/Fullstack";
import Aws from "./pages/Aws";
import Login from "./pages/Login";
import PrivateRouter from "./pages/routes/PrivateRouter";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<PrivateRouter />}>
          <Route index path="" element={<People />} />
          <Route path="/people/:id" element={<PersonDetail />} />{" "}
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/paths" element={<Paths />}>
          <Route index path="" element={<FullStack />} />
          <Route path="aws" element={<Aws />} />
        </Route>

        <Route path="/Contact" element={<Contact />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
