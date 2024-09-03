import React from "react";
import PropTypes from "prop-types";
import { MatchData } from "../../Variables/type"; // Import types
import { useNavigate } from "react-router-dom";

// components

interface CardTableProps {
  color?: "light" | "dark";
  data?: MatchData;
  puuid: string;
  region: string;
}

const CardTable: React.FC<CardTableProps> = ({
  color = "light",
  data,
  puuid,
  region,
}) => {
  const navigate = useNavigate();
  const handleClick = (matchId: string) => {
    navigate(`/match/`, {
      state: {
        matchId,
        puuid,
        region,
      },
    });
  };
  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-lightBlue-900 text-white"
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className={"font-semibold text-lg text-white"}>Games Tables</h3>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        {/* Projects table */}
        {data !== undefined && data.matchesByPUUID.length > 0 ? (
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle text-center border border-solid py-3 text-xs uppercase whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
                  }
                >
                  Numéro
                </th>
                <th
                  className={
                    "px-6 align-middle text-center border border-solid py-3 text-xs uppercase whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
                  }
                >
                  Game ID
                </th>
                <th
                  className={
                    "px-6 align-middle text-center border border-solid py-3 text-xs uppercase whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
                  }
                >
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.matchesByPUUID.map((match, index) => (
                <tr key={index}>
                  <td className="border-t-0 text-center px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                    {index + 1}
                  </td>
                  <td className="border-t-0 text-center px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                    {match}
                  </td>
                  <td className="border-t-0 text-center text-center	 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                    <button
                      onClick={() => handleClick(match)}
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                    >
                      Détail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No Data</p>
        )}
      </div>
    </div>
  );
};

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

export default CardTable;
