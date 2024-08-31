import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>HomePage</h1>
      <div style={{ marginTop: "20px" }}>
        {/* Read-Only Field */}

        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something..."
        />

        {/* Select Field */}
        <select value={selectedRegionValue} onChange={handleSelectRegionChange}>
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
      <div style={{ marginTop: "20px" }}>
        {/* Select Field */}
        <select value={selectedValue} onChange={handleSelectChange}>
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
          style={{ marginLeft: "10px" }}
        />
      </div>
      <button style={{ marginTop: "20px" }} onClick={handleClick}>
        Submit
      </button>
      {/* <p>PUUID: {data?.accountByRiotID.puuid}</p> */}
    </div>
  );
};
export default HomePage;
