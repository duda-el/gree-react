import React from 'react';
import Celing from "../img/celing_mounted.jpg"
import Ducted from "../img/ducted.jpg"
import Wall from "../img/wall.jpg"
import Celing2 from "../img/celing2.jpg"
import Outdoor from "../img/Outdoor.jpg"

const AirConditionerTypes = () => {
  const items = [
    { name: 'Indoor Units', imgSrc: `${Celing}` },
    { name: 'Ducted Units', imgSrc: `${Ducted}` },
    { name: 'Wall Mounted Units', imgSrc: `${Wall}`},
    { name: 'Floor/Celing', imgSrc: `${Celing2}` },
    { name: 'Outdoor Units', imgSrc: `${Celing2}`},
    { name: 'Wall Air Conditioners', imgSrc: `${Celing2}`},
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.imgSrc}
              alt={item.name}
              className="w-full h-64 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              style={{ cursor: "pointer" }}
            />
            <h3 className="mt-4 text-lg font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirConditionerTypes;
