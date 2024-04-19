import { useEffect, useState } from "react";
import "./App.css";
import cities from "../cities.json";

function App() {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCities, setSelectedCities] = useState([]);
  useEffect(() => {
    const states = [...new Set(cities.map((city) => city.state))];
    setSelectedState(states[0]);
  }, []);
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCities(
      cities.filter((city) => city.state === event.target.value)
    );
  };
  return (
    <>
      <div className="navbar px-20">
        <div className="navbar-start">
          <div className="logo px-10">Myntra</div>
          <ul className="menu menu-horizontal gap-10">
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>HOME & LIVING</li>
            <li>BEAUTY</li>
            <li>STUDIO</li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="search">
            <label className="pr-60 input input-bordered flex items-center gap-2 bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                className="grow "
                placeholder="Search for products, brands and more"
              />
            </label>
          </div>
          <ul className="ml-10 menu menu-horizontal gap-5">
            <li>Profile</li>
            <li>Wishlist</li>
            <li>Bag</li>
          </ul>
        </div>
      </div>
      <div className="state-form mt-28">
        <h1 className="text-center text-3xl">Select Your Location</h1>
        <form className="flex justify-center">
          <label>Select State:</label>
          <select onChange={handleStateChange}>
            <option value="">Select State</option>
            {[...new Set(cities.map((city) => city.state))].map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {selectedState && (
            <div className="city-form">
              <label>Select City:</label>
              <select>
                <option value="">Select City</option>
                {cities
                  .filter((city) => city.state === selectedState)
                  .map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
              </select>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
