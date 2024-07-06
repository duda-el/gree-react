import React, { useState } from 'react';
import flow from "./img/air-flow.jpg";

const BtuCalculator = () => {
  const [roomSize, setRoomSize] = useState('');
  const [ceilingHeight, setCeilingHeight] = useState('');
  const [sunExposure, setSunExposure] = useState(false);
  const [shade, setShade] = useState(false);
  const [numOccupants, setNumOccupants] = useState(2); // default to 2 occupants
  const [result, setResult] = useState(null);

  const calculateBTU = () => {
    const area = roomSize ? parseFloat(roomSize) : 0;
    const height = ceilingHeight ? parseFloat(ceilingHeight) : 2.5; // default to 2.5 meters if not provided

    let btu = area * 20; // base BTU requirement per square meter

    if (sunExposure) {
      btu += btu * 0.1; // add 10% for sun exposure
    }

    if (shade) {
      btu -= btu * 0.1; // reduce 10% for shaded areas
    }

    if (height > 2.5) {
      btu += btu * 0.1; // add 10% for high ceilings
    }

    // Add BTU for additional occupants
    if (numOccupants > 2) {
      btu += (numOccupants - 2) * 600;
    }

    return btu;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const btu = calculateBTU();
    setResult(btu);
  };

  return (
    <div className="flex flex-col items-center justify-center py-5 my-14" style={{ fontFamily: "tkt", paddingLeft: "10px", paddingRight: "10px"}}>
      <h1 className="text-4xl text-center font-bold text-blue-800 mb-6">BTU კალკულატორი</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-lg">
        გამოთვალეთ თქვენი ოთახის კონდიციონერის სიმძლავრე ჩვენი BTU კალკულატორით. შეიყვანეთ საჭირო დეტალები და გაარკვიეთ სრულყოფილი BTU რეიტინგი ოპტიმალური გათბობის ან გაგრილებისთვის.
      </p>
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl w-full max-w-md space-y-6 flex-grow" style={{border: "1px solid #ddd"}}>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full">
              <label htmlFor="roomSize" className="block text-gray-700 mb-2">ოთახის ზომა (m²):</label>
              <input
                type="number"
                id="roomSize"
                value={roomSize}
                onChange={(e) => setRoomSize(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="ceilingHeight" className="block text-gray-700 mb-2">ჭერის სიმაღლე (m):</label>
              <input
                type="number"
                id="ceilingHeight"
                value={ceilingHeight}
                onChange={(e) => setCeilingHeight(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              id="sunExposure"
              checked={sunExposure}
              onChange={(e) => setSunExposure(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="sunExposure" className="text-gray-700">ოთახში შემოდის დიდი დოზით მზის ნათება</label>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              id="shade"
              checked={shade}
              onChange={(e) => setShade(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="shade" className="text-gray-700">ოთახი დიდწილად ჩრდილშია</label>
          </div>
          <div>
            <label htmlFor="numOccupants" className="block text-gray-700 mb-2">ადამიანების რაოდენობა ოთახში:</label>
            <input
              type="number"
              id="numOccupants"
              value={numOccupants}
              onChange={(e) => setNumOccupants(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            გამოთვლა
          </button>
        </form>
          <img src={flow} alt="BTU Calculator" className='hidden lg:block' style={{width: "auto", height: "394px", borderRadius: "8px",border: "1px solid #ddd"}} />
      </div>
      {result !== null && (
        <div className="mt-8 p-4 bg-green-100 text-green-800 rounded-lg">
          შენ გჭირდება კონდიციონერი <strong>{result.toFixed(1)}</strong> BTU სიმძლავრით.
        </div>
      )}
    </div>
  );
};

export default BtuCalculator;
