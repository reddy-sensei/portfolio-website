import React from "react";
import "./Main.css";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

function Main() {
  return (
    <div className="main-container">
      <h1>Projects</h1>
      <div className="cards">
        <div className="card">
          <img className="card-image" src="images/yelpcamp.jpg" alt="" />
          <h3>Yelpcamp</h3>
          <div class="wrapper">
            <div class="icon github">
              <div class="tooltip">Github</div>
              <span>
                <i>
                  <a href="https://github.com/reddy-sensei/YelpCamp">
                    <AiFillGithub className="icon-inner" />
                  </a>
                </i>
              </span>
            </div>
            <div class="icon visit">
              <div class="tooltip">Visit</div>
              <span>
                <i>
                  <a href="https://fast-peak-26666.herokuapp.com/">
                    <AiFillEye className="icon-inner" />
                  </a>
                </i>
              </span>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src="images/weather_app.jpg" alt="" />
          <h3>Weather App</h3>
          <div class="wrapper">
            <div class="icon github">
              <div class="tooltip">Github</div>
              <span>
                <i>
                  <a href="https://github.com/reddy-sensei/weather-app">
                    <AiFillGithub className="icon-inner" />
                  </a>
                </i>
              </span>
            </div>
            <div class="icon visit">
              <div class="tooltip">Visit</div>
              <span>
                <i>
                  <a href="https://weather-app-d26dd.firebaseapp.com/">
                    <AiFillEye className="icon-inner" />
                  </a>
                </i>
              </span>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src="images/netflix.jpg" alt="" />
          <h3>Netflix clone</h3>
          <div class="wrapper">
            <div class="icon github">
              <div class="tooltip">Github</div>
              <span>
                <i>
                  <a href="https://github.com/reddy-sensei/netflix-clone">
                    <AiFillGithub className="icon-inner" />
                  </a>
                </i>
              </span>
            </div>
            <div class="icon visit">
              <div class="tooltip">Visit</div>
              <span>
                <i>
                  <a href="https://netflix-clone-81d86.firebaseapp.com/">
                    <AiFillEye className="icon-inner" />
                  </a>
                </i>
              </span>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src="images/yelpcamp.jpg" alt="" />
          <h3>Todo List</h3>
          <div class="wrapper">
            <div class="icon github">
              <div class="tooltip">Github</div>
              <span>
                <i>
                  <AiFillGithub className="icon-inner" />
                </i>
              </span>
            </div>
            <div class="icon visit">
              <div class="tooltip">Visit</div>
              <span>
                <i>
                  <AiFillEye className="icon-inner" />
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
