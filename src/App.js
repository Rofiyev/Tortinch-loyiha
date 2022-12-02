import "./App.css";
import logo from "./img.jpg";
import logo2 from "./img2.jpg";

function App() {
  return (
    <>
      <div className="container-fluid p-0">
        <nav className="d-flex justify-content-between align-items-center px-5 py-3">
          <h5 className="text-white fw-400 px-5">Start Bootstarp</h5>
          <ul className="d-flex align-items-center p-0 px-5 m-0">
            <li className="me-3">
              <a className="opacity-75 text-white" href="#">
                Home
              </a>
            </li>
            <li className="me-3">
              <a className="opacity-75 text-white" href="#">
                About
              </a>
            </li>
            <li className="me-3">
              <a className="opacity-75 text-white" href="#">
                Contact
              </a>
            </li>
            <li className="me-3">
              <a className="opacity-100 text-white" href="#">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <section
          id="home"
          className="d-flex align-items-center justify-content-center flex-column"
        >
          <h1 className="fw-bold">Welcome to Blog Home!</h1>
          <span className="fw-400">
            A Bootstrap 5 starter layout for your next blog homepage
          </span>
        </section>
        <div className="container my-4">
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <img src={logo} alt="" />
                <div class="card-body">
                  <span className="fw-200">January 1, 2022</span>
                  <h2 class="card-title">Featured Post Title</h2>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                    laboriosam. Dicta expedita corporis animi vero voluptate
                    voluptatibus possimus, veniam magni quis!
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read more →
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header mb-0">Search</div>
                <div className="card-body">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter search term..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-primary boder-radius-0"
                        type="button"
                      >
                        Go
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card my-3">
                <div className="card-header">
                  <span>Categories</span>
                </div>
                <div className="card-body d-flex">
                  <div className="col1 d-flex flex-column">
                    <a href="#">Wen Design</a>
                    <a href="#">HTML</a>
                    <a href="#">Freebiens</a>
                  </div>
                  <div className="col2 d-flex flex-column ms-5">
                    <a href="#">JavaScript</a>
                    <a href="#">CSS</a>
                    <a href="#">Tutorial</a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <span>Side Widget</span>
                </div>
                <div className="card-body mb-0">
                  <p>
                    You can put anything you want inside of these side widgets.
                    They are easy to use, and feature the Bootstrap 5 card
                    component!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-lg-8 d-flex box">
            <div class="card">
              <img src={logo2} class="card-img-top" alt="..." />
              <div class="card-body">
                <span className="span">January 1, 2022</span>
                <h3 class="card-title">Post Title</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis aliquid atque, nulla.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more →
                </a>
              </div>
            </div>
            <div class="card">
              <img src={logo2} class="card-img-top" alt="..." />
              <div class="card-body">
                <span className="span">January 1, 2022</span>
                <h3 class="card-title">Post Title</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis aliquid atque, nulla.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more →
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex justify-content-center box2 my-4">
            <div class="card mb-4">
              <img src={logo2} class="card-img-top" alt="..." />
              <div class="card-body">
                <span className="span">January 1, 2022</span>
                <h3 class="card-title">Post Title</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis aliquid atque, nulla
                </p>
                <a href="#" class="btn btn-primary">
                  Read more →
                </a>
              </div>
            </div>
            <div class="card mb-0">
              <img src={logo2} class="card-img-top" alt="Rasm" />
              <div class="card-body">
                <span className="span">January 1, 2022</span>
                <h3 class="card-title">Post Title</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                  laboriosam.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more →
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="conatiner">
          <div className="col-lg-8">
            <ul className="d-flex justify-content-center align-items-center py-4">
              <li className="page-item disabled">Newer</li>
              <li className="page-item disabled active">
                <a href="#">1</a>
              </li>
              <li className="page-item">
                <a href="#">2</a>
              </li>
              <li className="page-item">
                <a href="#">3</a>
              </li>
              <li className="page-item disabled">
                <a href="#!">...</a>
              </li>
              <li className="page-item">
                <a href="#">15</a>
              </li>
              <li className="page-item">
                <a href="#">Order</a>
              </li>
            </ul>
          </div>
        </div>
        <footer className="d-flex align-items-center justify-content-center">
          <p>Copyright © Your Website 2022</p>
        </footer>
      </div>
    </>
  );
}

export default App;
