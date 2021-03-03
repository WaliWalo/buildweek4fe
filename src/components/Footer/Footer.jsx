import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div class="container footer">
      <div className="row text-center">
        <div className="col-12">
          <p>
            <a href="#" alt="About">
              About{" "}
            </a>
            <a href="#" alt="Blog">
              Blog{" "}
            </a>
            <a href="#" alt="Jobs">
              Jobs{" "}
            </a>
            <a href="#" alt="Help">
              Help{" "}
            </a>
            <a href="#" alt="API">
              API{" "}
            </a>
            <a href="#" alt="Privacy">
              Privacy{" "}
            </a>
            <a href="#" alt="Terms">
              Terms{" "}
            </a>
            <a href="#" alt="Top Accounts">
              Top Accounts{" "}
            </a>
            <a href="#" alt="Hashtags">
              Hashtags{" "}
            </a>
            <a href="#" alt="Locations">
              Locations{" "}
            </a>
          </p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-10 offset-1">
          <p>
            <a href="#" alt="Beauty">
              Beauty{" "}
            </a>
            <a href="#" alt="Dance &amp; Performance">
              Dance &amp; Performance{" "}
            </a>
            <a href="#" alt="Fitness">
              Fitness{" "}
            </a>
            <a href="#" alt="Food &amp; Drink">
              Food &amp; Drink{" "}
            </a>
            <a href="#" alt="Home &amp; Garden">
              Home &amp; Garden{" "}
            </a>
            <a href="#" alt="Music">
              Music{" "}
            </a>
            <a href="#" alt="Visual Arts">
              Visual Arts{" "}
            </a>
          </p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-10 offset-1">
          <p>
            <select>
              <option>English</option>
              <option>Italiano</option>
            </select>{" "}
            © 2021 Instagram from Facebook
          </p>
        </div>
      </div>
    </div>
  );
}
