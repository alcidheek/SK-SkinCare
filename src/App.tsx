
import Home from "./Pages/Home/Home";
import Products from "./Pages/Product/P";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />

      <section id="home">
        <Home />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;