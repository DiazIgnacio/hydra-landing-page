import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="px-20 pt-14 flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        {/* ... */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
