import React, { useState } from "react";
import { Select, InputNumber, DatePicker, Button, message } from "antd";
import Results from "../Results";

export const Search = () => {
  const { Option } = Select;
  const [carrier, setCarrier] = useState("");
  const [flightNumber, setFlightNumber] = useState(0);
  const [date, setDate] = useState("");
  const [confirmed, setConfirmed] = useState({});

  const onChange = (value) => {
    setCarrier(value);
  };

  const onChangeDate = (date, dateString) => {
    setDate(dateString);
  };

  const onSearchClick = () => {
    if (!carrier || !flightNumber || !date) {
      message.error("Carrier, flightNumber, and Date are required");
      return;
    }

    let formattedDate = date.replace(/-/g, "/");
    console.log(formattedDate);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${carrier}/${flightNumber}/dep/${formattedDate}`,
      {
        method: "GET",
        headers: {
          appId: "06a45e66",
          appKey: "291f513576814a1cdb36e0ef38213ba9",
        },
      }
    )
      .then((data) => data.json())
      .then((finalData) => {
        console.log(finalData);
        setConfirmed(finalData);
      });
  };

  const onFlightNumChange = (value) => {
    setFlightNumber(value);
  };

  return (
    <div style={{ paddingTop: 20 }}>
      <div style={style.box}>
        <div style={{ marginLeft: 10, fontSize: 20 }}>Check Flight Status</div>
        <div style={style.searchBox}>
          <div style={style.marginOfSearchBox}>
            <h3>Airline</h3>
            <Select
              showSearch
              style={{
                width: 200,
                marginBottom: 10,
              }}
              placeholder="Select Airline"
              optionFilterProp="children"
              onChange={onChange}
              filterOption={(input, option) =>
                option.children[1].props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {" "}
              <Option key="IN" value="IN">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginRight: 15 }}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtNYw0ZhLbWFemxtY_agU4I7rHl8wMJeEBQ&s"
                      alt="India"
                      height="20px"
                      width="20px"
                    />
                  </div>
                  <div style={{ fontSize: 18 }}>India</div>
                </div>
              </Option>
              <Option key="UN" value="UN">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginRight: 15 }}>
                    <img
                      src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.png"
                      alt="United States"
                      height="20px"
                      width="20px"
                    />
                  </div>
                  <div style={{ fontSize: 18 }}>United States</div>
                </div>
              </Option>
              <Option key="JP" value="JP">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginRight: 15 }}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXtK9q4pFEc0iUq0pPEZV1hISiKqoaApsQw&s"
                      alt="Japan"
                      height="20px"
                      width="20px"
                    />
                  </div>
                  <div style={{ fontSize: 18 }}>Japan</div>
                </div>
              </Option>
              <Option key="EK" value="EK">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginRight: 15 }}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png"
                      alt="Emirates"
                      height="20px"
                      width="20px"
                    />
                  </div>
                  <div style={{ fontSize: 18 }}>Emirates</div>
                </div>
              </Option>
            </Select>
          </div>
          <div style={style.marginOfSearchBox}>
            <h3>Flight #</h3>
            <InputNumber defaultValue={3} onChange={onFlightNumChange} />
          </div>

          <div style={style.marginOfSearchBox}>
            <h3>Select Date</h3>
            <DatePicker onChange={onChangeDate} />
          </div>
        </div>
        <Button
          type="primary"
          icon={<i className="anticon anticon-search"></i>}
          onClick={onSearchClick}
          style={{ marginLeft: 10 }}
        >
          Search
        </Button>
      </div>
      {confirmed.flightStatuses && (
        <div>
          <div style={style.resultBox}>
            <h2>Search Results</h2>
            {confirmed.flightStatuses.length > 0 ? (
              <Results
                status={confirmed.flightStatuses[0].status}
                flightData={confirmed.flightStatuses[0]}
                airportData={
                  confirmed.appendix && confirmed.appendix.airports
                    ? confirmed.appendix.airports
                    : ""
                }
                airlineData={
                  confirmed.appendix && confirmed.appendix.airlines
                    ? confirmed.appendix.airlines[0]
                    : ""
                }
              />
            ) : (
              <p>No Flight Status Found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const style = {
  resultBox: {
    borderRadius: 10,
    boxShadow:
      "0px 1px 2px 1px rgba(0,0,0,0.4),0px 0px 1px 0px rgba(0,0,0,0.4)",
    backgroundColor: "white",
    padding: 20,
    margin: "auto",
    width: 600,
    marginTop: 10,
  },
  box: {
    borderRadius: 10,
    boxShadow:
      "0px 1px 2px 1px rgba(0,0,0,0.4),0px 0px 1px 0px rgba(0,0,0,0.4)",
    backgroundColor: "white",
    padding: 20,
    margin: "auto",
    width: 600,
  },
  searchBox: {
    display: "flex",
  },
  marginOfSearchBox: {
    margin: 10,
  },
};
