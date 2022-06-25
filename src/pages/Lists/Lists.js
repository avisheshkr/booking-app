import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import "./lists.css";
import { DateRange } from "react-date-range";
import SearchItems from "../../components/SearchItems/SearchItems";

const Lists = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div className="sub-container lists">
      <div className="lists__search">
        <h2>Search</h2>
        <div className="lists__search__destination">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            placeholder="madrid"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="lists__search__date">
          <span className="date__label">Check-in date</span>
          <span
            className="date__input"
            onClick={() => setOpenDate(!openDate)}
          >{`${format(date[0].startDate, "MM/dd/yyyy")} to
          ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              minDate={new Date()}
              className="lists__search__date-range"
            />
          )}
        </div>
        <div className="lists__search__options">
          <span>Options</span>
          <div className="lists__search__options-inner">
            <div>
              <label htmlFor="minPrice">Min price (per night)</label>
              <input type="number" />
            </div>
            <div>
              <label htmlFor="minPrice">Max price (per night)</label>
              <input type="number" />
            </div>
            <div>
              <label htmlFor="minPrice">Adult</label>
              <input
                type="number"
                min="1"
                value={options.adults}
                onChange={(e) =>
                  setOptions({ ...options, adults: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="minPrice">Children</label>
              <input
                type="number"
                min="0"
                value={options.children}
                onChange={(e) =>
                  setOptions({ ...options, children: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="minPrice">Room</label>
              <input
                type="number"
                min="1"
                value={options.rooms}
                onChange={(e) =>
                  setOptions({ ...options, rooms: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <button className="lists__search__btn">Search</button>
      </div>
      <div className="lists__list">
        <SearchItems />
        <SearchItems />
        <SearchItems />
        <SearchItems />
        <SearchItems />
        <SearchItems />
      </div>
    </div>
  );
};

export default Lists;
