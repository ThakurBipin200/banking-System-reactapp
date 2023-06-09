import React from "react";
import "../styles/home.css";
import image from "../images/bank_b.svg";

const Home = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="title">
          <h2>The SF Money Bank</h2>
        </div>
        <div className="desc">
          <p>
            <strong style={{ color: "yellow" }}>
              The Spark foundation Banking System
            </strong>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            debitis quia cumque possimus, doloremque quaerat! Perferendis et
            eveniet, praesentium mollitia aliquam dolore placeat dolores
            architecto assumenda veritatis at laboriosam soluta debitis tempora.
          </p>
        </div>
        <button className="start-btn">
          <a href="/allCustomers">Get Started</a>
        </button>
        <div className="gradient-border ">
          <p>Transactions done :238912</p>
        </div>
      </div>
      <div className="right">
        <img src={image} alt="Bank img" />
      </div>
    </div>
  );
};

export default Home;
