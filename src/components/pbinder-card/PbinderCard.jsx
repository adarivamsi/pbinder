import React, { useState } from "react";
import TinderCard from "react-tinder-card";

function PbinderCard() {
  const people_data = {
    "72gR18K/vamsi.jpg": "Vamsi Adari",
    "300WGJY/josephine.jpg": "Josephine Langford",
    "SdCjbMw/emilia.jpg": "Emilia Clarke",
    "0CcbV0X/sophia.jpg": "Sophie Turner",
    "h1Mzfdj/emma.jpg": "Emma Watson",
    "2tCZjjK/margot.jpg": "Margot Robbie",
  };
		
		var useState_Val= [];
		for (let [key, value] of Object.entries(people_data)) {
				useState_Val.push({
                    "name": value,
                    "url": `https://i.ibb.co/${key}`
                });

		}
  const [people] = useState(useState_Val);

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
