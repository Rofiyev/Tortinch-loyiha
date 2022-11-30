import "./App.css";
import logo from "./img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className="conytainer-fluid">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid px-5">
            <h3 class="navbar-brand px-5" href="#">
              Start Bootstrap
            </h3>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        All Product
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <button className="btn btn-outline-dark me-5">
              <FontAwesomeIcon
                className="me-2"
                icon={faCartShopping}
              ></FontAwesomeIcon>
              Cart
              <span id="num" className="bg-dark text-white ms-2">
                0
              </span>
            </button>
          </div>
        </nav>
        <section
          id="home"
          className="d-flex align-items-center justify-content-center flex-column"
        >
          <h1 className="text-white fw-bold display-4">Shop in style</h1>
          <p className="description fw-bold">
            With this shop hompeage template
          </p>
        </section>
        <div className="container p-5">
          <div className="row py-5">
            <div id="card" className="col mb-3">
              <div className="card">
                <img src={logo} alt="Rasm" />
                <span></span>
                <div className="card-body py-4">
                  <div className="text-center px-4 noicon">
                    <h5 className="fw-bold">Fancy Product</h5>
                    <span className="icons d-block"></span>
                    <span>$40.00 - $80.00</span>
                  </div>
                  <div className="card-footer bg-transparent">
                    <div className="text-center px-4 pt-0">
                      <a className="btn btn-outline-dark">View options</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="card" className="col mb-3">
              <div className="card">
                <img src={logo} alt="Rasm" />
                <span id="imgTitle">Sale</span>
                <div className="card-body py-4">
                  <div className="text-center px-4 py-3">
                    <h5 className="fw-bold">Special Item</h5>
                    <span className="icons d-block">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                    </span>
                    <span>
                      <del>$20.00</del> $18.00
                    </span>
                  </div>
                  <div className="card-footer bg-transparent">
                    <div className="text-center px-4 pt-0">
                      <a className="btn btn-outline-dark">Add to card</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="card" className="col mb-3">
              <div className="card">
                <img src={logo} alt="Rasm" />
                <span id="imgTitle">Sale</span>
                <div className="card-body py-4">
                  <div className="text-center px-4 noicon">
                    <h5 className="fw-bold">Special Item</h5>
                    <span className="icons d-block"></span>
                    <span>
                      <del>$50.00</del> $25.00
                    </span>
                  </div>
                  <div className="card-footer bg-transparent">
                    <div className="text-center px-4 pt-0">
                      <a className="btn btn-outline-dark">Add to card</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="card" className="col mb-3">
              <div className="card">
                <img src={logo} alt="Rasm" />
                <span></span>
                <div className="card-body py-4">
                  <div className="text-center px-4 py-3">
                    <h5 className="fw-bold">Popular Item</h5>
                    <span className="icons d-block">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                    </span>
                    <span>
                      $40.00
                    </span>
                  </div>
                  <div className="card-footer bg-transparent">
                    <div className="text-center px-4 pt-0">
                      <a className="btn btn-outline-dark">Add to card</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="card" className="col mb-3">
              <div className="card">
                <img src={logo} alt="Rasm" />
                <span id="imgTitle">Sale</span>
                <div className="card-body py-4">
                  <div className="text-center px-4 noicon">
                    <h5 className="fw-bold">Sale Item</h5>
                    <span className="icons d-block"></span>
                    <span>
                      <del>$50.00</del> $25.00
                    </span>
                  </div>
                  <div className="card-footer bg-transparent">
                    <div className="text-center px-4 pt-0">
                      <a className="btn btn-outline-dark">Add to card</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="card" className="col mb-3">
              <div className="card">
                <img src={logo} alt="Rasm" />
                <span></span>
                <div className="card-body py-4">
                  <div className="text-center px-4 noicon">
                    <h5 className="fw-bold">Fancy Product</h5>
                    <span className="icons d-block"></span>
                    <span>$120.00 - $280.00</span>
                  </div>
                  <div className="card-footer bg-transparent">
                    <div className="text-center px-4 pt-0">
                      <a className="btn btn-outline-dark">View options</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="card" className="col mb-3">
              <div className="card">
                <img src={logo} alt="Rasm" />
                <span id="imgTitle">Sale</span>
                <div className="card-body py-4">
                  <div className="text-center px-4 py-3">
                    <h5 className="fw-bold">Special Item</h5>
                    <span className="icons d-block">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                    </span>
                    <span>
                      <del>$20.00</del> $18.00
                    </span>
                  </div>
                  <div className="card-footer bg-transparent">
                    <div className="text-center px-4 pt-0">
                      <a className="btn btn-outline-dark">Add to card</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="card" className="col mb-3">
              <div className="card">
                <img src={logo} alt="Rasm" />
                <span></span>
                <div className="card-body py-4">
                  <div className="text-center px-4 py-3">
                    <h5 className="fw-bold">Popular Item</h5>
                    <span className="icons d-block">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                    </span>
                    <span>
                      $40.00
                    </span>
                  </div>
                  <div className="card-footer bg-transparent">
                    <div className="text-center px-4 pt-0">
                      <a className="btn btn-outline-dark">Add to card</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="d-flex align-items-center justify-content-center">
          <div className="text-center">
            <p className="text-white">Copyright © Your Website 2022</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
