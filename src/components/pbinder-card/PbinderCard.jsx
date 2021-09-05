import React, { useState } from "react";
import TinderCard from "react-tinder-card";

function PbinderCard() {
  const [people, setPeople] = useState([
    {
      name: "Vamsi Adari",
      url: "https://avatars.githubusercontent.com/u/22577475?v=4",
    },
    {
      name: "Josephine Langford",
      url: "https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:671777?quality=0.8&format=jpg&width=1440&height=810&.jpg",
    },
    {
      name: "Emilia Clarke",
      url: "https://media.gq-magazine.co.uk/photos/5d1392d19fa60168d383827d/2:3/w_780,h_1170,c_limit/Emilia-Clarke-GQ-13Apr15_Leo-Cackett_b_1.jpg",
    },
    {
      name: "Alexandra Daddario",
      url: "https://vz.cnwimg.com/wp-content/uploads/2014/01/alex.jpg",
    },
    {
      name: "Sophie Turner",
      url: "https://i.pinimg.com/originals/8b/76/a7/8b76a70c0130bc8be7011175d1212070.jpg",
    },
    {
      name: "Emma Watson",
      url: "https://images.moviefit.me/p/o/1382-emma-watson.jpg",
    },
    {
      name: "Margot Robbie",
      url: "https://observer.com/wp-content/uploads/sites/2/2020/12/Margo-Robbie_Tim-P.-WhitbyGetty-Images-for-Sony-e1607483364790.jpg?quality=80",
    },
  ]);

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
