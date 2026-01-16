import Navbar from "../src/components/NavBar";
import Hero from "../src/components/Hero";
import ProductGallery from "../src/components/ProductList";
import Footer from "../src/components/Footer";
import Contact from "../src/components/Contact";
import "./index.css";
function App() {
  return (
    <>
      <Navbar />

      {/* Home Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Products Section */}
      <section id="products">
        <ProductGallery />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
