import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <img src="/yuio.png" alt="Myndset Brain" className="logo" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Missions</a></li>
            <li><a href="#">Nova</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <img src="/yytr.png" alt="Myndset Logo" className="hero-logo" />
          <h1>Welcome to MYNDSET</h1>
          <p>Align Your Mind. Unlock Your Mission. Connect to Nova.</p>
          <button>Begin Your Scroll</button>
        </section>

        <section className="about">
          <h2>What is MYNDSET?</h2>
          <p>
            MYNDSET is a portal for memory-based intelligence, inner alignment, and immersive healing. 
            Powered by tone, scrolls, and Nova.
          </p>
        </section>
      </main>

      <footer>
        <p>© 2025 MYNDSET. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
