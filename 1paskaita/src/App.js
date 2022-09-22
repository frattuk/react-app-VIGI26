import "./App.css";

// JSX struktura kuri renderina JS + HTML
// visada turi buti "return"
// visada turi buti "export default App;"

function App() {
  return (
    <div>
      <div class="body-box">
        <header>
          <div class="logo-header">
            <img
              src="https://www.logolynx.com/images/logolynx/75/7522aae25f2e11dd435debf6b8d0d3ae.jpeg"
              alt="logo"
            />
          </div>
          <div class="nav-header">
            <a href="#home">Home</a>
            <a href="#product">Product</a>
            <a href="#company">Company</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="green-box">
            <h1>Header Image</h1>
          </div>
          <div class="cards">
            <div class="card">
              <h2>About</h2>
              <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div class="card">
              <h2>Company</h2>
              <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div class="card">
              <h2>Servises</h2>
              <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div class="cards-bottom">
            <div class="card-left">
              <h2>Content</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
              <h3>Sub Header</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book
              </p>
            </div>
            <div class="card-right">
              <h3>Navigation</h3>
              <div class="gray-box">
                <a href="#home">Home</a>
                <a href="#product">Product</a>
                <a href="#company">Company</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
          <div id="home"> Hello </div>
        </header>
      </div>
    </div>
  );
}

export default App;
