import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import Scroll from "./Scroll";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        setRobots(users);
      } catch (error) {
        console.error("Error fetching robots:", error);
      }
    };
    fetchRobots();
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );                                                                           

  return (
    <div className="tc">
      <div style={{position: "fixed", top: 0, width: "100%", background: "white", zIndex: 1}}>
      <h1>Robofriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      </div>
      <div style={{margin: "150px"}}>
    <Scroll>
    <CardList robots={filteredRobots} />
    </Scroll>
      </div>
    </div>
  );
};

export default App;
