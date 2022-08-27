import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./home.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import caption1 from "../assets/caption1.svg";
import caption2 from "../assets/caption2.svg";
import infoicon from "../assets/info-icon.svg";
import { leaders, categories } from "../temp-data/temp-data";
import { showMore, showLess } from "../store/reducer";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HomeUpperBody />
      <Footer />
    </React.Fragment>
  );
};

const HomeUpperBody = () => {
  return (
    <React.Fragment>
      <div className="upper-text">
        <h1>
          Got Some Great
          <br /> Ideas Today?
        </h1>
      </div>
      <Categories />
      <BodyCaptions />
    </React.Fragment>
  );
};

const Categories = () => {
  return (
    <div className="categories">
      <p>Categories:</p>
      <div className="category-icons">
        {" "}
        {categories.map((item) => (
          <div className="category-icon" key={item.id}>
            <a href={item.href}>
              <img src={item.icon} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
const Line = () => {
  return <div className="line"></div>;
};

const BodyCaptions = () => {
  return (
    <div className="body-captions">
      <div className="body-caption">
        <h1>
          <a href="#">Discussions</a> For Ideas
        </h1>
        <img src={caption1} />
        <button>Check</button>
      </div>
      <Line />
        <div className="body-caption">
          <h1 id="left-aligned">
            &nbsp; Check Out
            <br />
            <a href="#">The Public Leaderboard</a>
            <div className="info-parent">
              <img id="info-icon" src={infoicon} />
              <div id="info-text">
                Traders can attend public trading competition and prove their
                trading skills, knowledge and market predictions with paper
                trading.
              </div>
            </div>
          </h1>
          <Leaderboard />
        </div>
        <Line />
        <div className="body-caption">
          <h1>
            Join The Best, Growing
            <br />
            <a href="#">Trader Community</a>
          </h1>
          <img src={caption2} />
      </div>
    </div>
  );
};

const Leaderboard = () => {
  const dispatch = useDispatch();
  const showIndex = useSelector((state) => state.showIndex);
  return (
    <div className="leaderboard-container">
      <div className="leaderboard-labels">
        <p id="black-colored">Name</p>
        <p>Munkey</p>
        <p>Rank</p>
      </div>
      {leaders
        .filter((leader) => leader.id < showIndex)
        .map((item) => (
          <div className="leader-details" key={item.id}>
            <div className="leader-name">
              {item.name}
              <img id="leader-avatar" src={item.avatar} />
            </div>
            <div className="leader-munkey">{item.munkey}</div>
            <div className="leader-ranking">{item.ranking}</div>
          </div>
        ))}
      {showIndex < 15 ? (
        <p onClick={() => dispatch(showMore())} style={{ color: "blue" }}>
          Show More
        </p>
      ) : (
        <a onClick={() => dispatch(showLess())} href="#">
          Check the Leaderboard!
        </a>
      )}
    </div>
  );
};

export default Home;
