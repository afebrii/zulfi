import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-slate-50 bg-[#0f172a] font-sans selection:bg-blue-500/30">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>

      <footer className="py-6 text-center text-sm text-slate-500 border-t border-slate-800/50 bg-slate-900">
        <p>© {new Date().getFullYear()} Zulfi Septia Anzana. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
