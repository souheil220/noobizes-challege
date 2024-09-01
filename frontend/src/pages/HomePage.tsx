import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/HomePage.css"; // Import the CSS file

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  // State to store the selected value from the select field
  const [selectedValue, setSelectedValue] = useState<string>("Ánh Nắng Của An");

  const [selectedRegionValue, setSelectedRegionValue] = useState<string>("VN");

  const [hiddenRegionInputValue, setHiddenRegionInputValue] =
    useState<string>("VN");

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
        setHiddenRegionInputValue("VN");
        break;
      case "matessa":
        setReadOnlyValue("kimse");
        setHiddenRegionInputValue("TR");
        break;
        break;
      case "white space":
        setReadOnlyValue("srtty");
        setHiddenRegionInputValue("NA");
        break;
      case "LT Frozti":
        setReadOnlyValue("1v9");
        setHiddenRegionInputValue("ME");
        break;
      case "Agurin":
        setReadOnlyValue("EUW");
        setHiddenRegionInputValue("EUW");
        break;
      case "Flakkardo":
        setReadOnlyValue("METIN");
        setHiddenRegionInputValue("EUW");
        break;
      case "Magic":
        setReadOnlyValue("9282");
        setHiddenRegionInputValue("ME");
        break;
      case "TWlTCH thewarsor":
        setReadOnlyValue("LAS");
        setHiddenRegionInputValue("LAS");
        break;
      case "frosty":
        setReadOnlyValue("KR3");
        setHiddenRegionInputValue("BR");
        break;
      case "STEPZ":
        setReadOnlyValue("LAN");
        setHiddenRegionInputValue("LAN");
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
    if (inputValue.trim() === "") {
      // If input is empty, use selectedValue and readOnlyValue for navigation
      navigate(`/account/${selectedValue}/${readOnlyValue}`);
    } else {
      // If input is not empty, use inputValue for navigation
      var summonerName: string[] = inputValue.split(" ");
      navigate(`/account/${summonerName[0]}/${summonerName[1]}`);
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
            className="ml-2 h-full bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="VN">VN</option>
            <option value="TR">TR</option>
            <option value="NA">NA</option>
            <option value="ME">ME</option>
            <option value="EUW">EUW</option>
            <option value="EUW">EUW</option>
            <option value="ME">ME</option>
            <option value="LAS">LAS</option>
            <option value="BR">BR</option>
            <option value="LAN">LAN</option>
          </select>
        </div>

        {/* Div containing select field and read-only field */}
        <div style={{ marginTop: "20px" }} className="select-container">
          {/* Select Field */}
          <select
            value={selectedValue}
            onChange={handleSelectChange}
            className="h-full bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        </div>
        <button
          onClick={handleClick}
          className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Submit
        </button>
        {/* <p>PUUID: {data?.accountByRiotID.puuid}</p> */}
      </div>
    </>
  );
};
export default HomePage;
