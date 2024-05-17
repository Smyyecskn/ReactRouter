import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Paths from "./pages/Paths";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/People" element={<People />} />
        <Route path="/People/:id" element={<PersonDetail />} />
        <Route path="/paths" element={<Paths />} />

        <Route path="/Contact" element={<Contact />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
