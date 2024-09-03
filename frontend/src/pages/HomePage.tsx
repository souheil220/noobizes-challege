import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/HomePage.css"; // Import the CSS file

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  // State to store the selected value from the select field
  const [selectedValue, setSelectedValue] = useState<string>("Ánh Nắng Của An");

  const [selectedRegionValue, setSelectedRegionValue] =
    useState<string>("AMERICAS");

  // State to store the value affected by the select input
  const [readOnlyValue, setReadOnlyValue] = useState<string>("keria");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Handle select field changes
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);

    // Update the read-only field based on the selected value
    switch (value) {
      case "Ánh Nắng Của An":
        setReadOnlyValue("keria");

        break;
      case "matessa":
        setReadOnlyValue("kimse");

        break;
        break;
      case "white space":
        setReadOnlyValue("srtty");
        break;
      case "LT Frozti":
        setReadOnlyValue("1v9");
        break;
      case "Agurin":
        setReadOnlyValue("EUW");
        break;
      case "Flakkardo":
        setReadOnlyValue("METIN");
        break;
      case "Magic":
        setReadOnlyValue("9282");
        break;
      case "TWlTCH thewarsor":
        setReadOnlyValue("LAS");
        break;
      case "frosty":
        setReadOnlyValue("KR3");
        break;
      case "STEPZ":
        setReadOnlyValue("LAN");
        break;
      default:
        setReadOnlyValue("");
    }
  };

  const handleSelectRegionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setSelectedRegionValue(value);
  };

  const handleClick = () => {
    var summonerName: string[];
    if (inputValue === "") {
      summonerName = [selectedValue, readOnlyValue];
      // If input is empty, use selectedValue and readOnlyValue for navigation
      navigate(`/account/`, {
        state: {
          summonerName: summonerName,
          region: selectedRegionValue,
        },
      });
    } else {
      // If input is not empty, use inputValue for navigation
      summonerName = inputValue.split(" ");
      // navigate(`/account/${summonerName[0]}/${summonerName[1]}`);
      navigate(`/account/`, {
        state: {
          summonerName: summonerName,
        },
      });
    }
  };
  return (
    <>
      <div className="bg-image"></div>
      <div className="home-container">
        <div className="overlay"></div>
        <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-red-800">
          Choose your summoner
        </h3>

        <div style={{ marginTop: "20px" }} className="select-container">
          {/* Read-Only Field */}

          <input
            type="text"
            placeholder="Player Riot ID"
            className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
            value={inputValue}
            onChange={handleInputChange}
          />

          {/* Select Field */}

          <select
            value={selectedRegionValue}
            onChange={handleSelectRegionChange}
            className="ml-2 h-full bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="AMERICAS">AMERICAS</option>
            <option value="ASIA">ASIA</option>
            <option value="ESPORTS">ESPORTS</option>
            <option value="EUROPE">EUROPE</option>
          </select>
        </div>

        <h5 className="text-4xl font-normal leading-normal mt-0 mt-2 text-red-800">
          OR
        </h5>

        {/* Div containing select field and read-only field */}
        <div style={{ marginTop: "20px" }} className="select-container">
          {/* Select Field */}
          <select
            value={selectedValue}
            onChange={handleSelectChange}
            className="h-full bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="Ánh Nắng Của An">Ánh Nắng Của An</option>
            <option value="matessa">matessa</option>
            <option value="white space">white space</option>
            <option value="LT Frozti">LT Frozti</option>
            <option value="Agurin">Agurin</option>
            <option value="Flakkardo">Flakkardo</option>
            <option value="Magic">Magic</option>
            <option value="TWlTCH thewarsor">TWlTCH thewarsor</option>
            <option value="frosty">frosty</option>
            <option value="STEPZ">STEPZ</option>
          </select>

          {/* Read-Only Field */}
          <input
            type="text"
            value={readOnlyValue}
            readOnly
            className="ml-2 px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
          />
          <select
            value={selectedRegionValue}
            onChange={handleSelectRegionChange}
            className="ml-2 h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="AMERICAS">AMERICAS</option>
            <option value="ASIA">ASIA</option>
            <option value="ESPORTS">ESPORTS</option>
            <option value="EUROPE">EUROPE</option>
          </select>
        </div>
        <button
          onClick={handleClick}
          className="bg-lightBlue-500 text-white active:bg-lightBlue-600 mt-3 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Submit
        </button>
      </div>
    </>
  );
};
export default HomePage;
