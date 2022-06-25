import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { RiHotelBedFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./search.css";

const Search = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleOptions = (name, operation) => {
    // setOptions({
    //   ...options,
    //   [name]: operation === "increase" ? options[name] + 1 : options[name] - 1,
    // });

    // OR using previous state as follows
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "increase" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/lists", { state: { destination, date, options } });
  };

  return (
    <div className="search">
      <div className="search__inputs">
        <label htmlFor="">
          <RiHotelBedFill />
        </label>
        <input
          type="text"
          placeholder="Where are you going?"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="search__inputs date">
        <span
          htmlFor=""
          className="search__icon"
          onClick={() => setOpenDate(!openDate)}
        >
          <FaCalendarAlt />
        </span>
        <span
          className="search__placeholder"
          onClick={() => setOpenDate(!openDate)}
        >
          {`${format(date[0].startDate, "MM/dd/yyyy")} to
          ${format(date[0].endDate, "MM/dd/yyyy")}`}
        </span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            minDate={new Date()}
            className="date-range"
          />
        )}
      </div>
      <div className="search__inputs options">
        <span htmlFor="" className="search__icon">
          <GiPerson />
        </span>
        <span
          className="search__placeholder"
          onClick={() => setOpenOptions(!openOptions)}
        >
          {options.adults} {options.adults > 1 ? "adults" : "adult"} &#8226;{" "}
          {options.children} {options.children === 1 ? "child" : "children"}{" "}
          &#8226; {options.rooms} {options.rooms > 1 ? "rooms" : "room"}
        </span>
        {openOptions && (
          <div className="search__options">
            <div className="search__options__inner">
              <span>Adults</span>
              <div>
                <button
                  onClick={() => handleOptions("adults", "decrease")}
                  disabled={options.adults <= 1 ? true : false}
                >
                  -
                </button>
                <span>{options.adults}</span>
                <button onClick={() => handleOptions("adults", "increase")}>
                  +
                </button>
              </div>
            </div>
            <div className="search__options__inner">
              <span>Children</span>
              <div>
                <button
                  onClick={() => handleOptions("children", "decrease")}
                  disabled={options.children <= 0 ? true : false}
                >
                  -
                </button>
                <span>{options.children}</span>
                <button onClick={() => handleOptions("children", "increase")}>
                  +
                </button>
              </div>
            </div>
            <div className="search__options__inner">
              <span>Rooms</span>
              <div>
                <button
                  onClick={() => handleOptions("rooms", "decrease")}
                  disabled={options.rooms <= 1 ? true : false}
                >
                  -
                </button>
                <span>{options.rooms}</span>
                <button onClick={() => handleOptions("rooms", "increase")}>
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <button className="search__btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
