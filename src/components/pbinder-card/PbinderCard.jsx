import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import axios from "../../axios";

function PbinderCard() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/pbinder/cards");
      setPeople(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div>
      <div className="flex justify-center mt-36">
        {people.map((person) => (
          <TinderCard
            className="absolute"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="relative bg-white w-35 p-5 max-w-35 h-35 shadow-lg rounded-lg bg-cover bg-center"
            >
              <h3 className="absolute bottom-0 m-2 text-white">
                {person.name}
              </h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default PbinderCard;
