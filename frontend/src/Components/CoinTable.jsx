import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "./coinTable.css";
import SearchIcon from "@material-ui/icons/Search";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";
import HeroCard from "./HeroCard";
const CoinTable = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:4000/api/v1/fetch")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((res) => {
        // console.log(res);
        setData(res.data.coins);
        setFilterData(res.data.coins);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const result = data.filter((e) => {
      return e.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterData(result);
  }, [search]);

  const columns = [
    {
      name: " COMPANY NAME",
      selector: (row) => row.name,
    },
    {
      name: "SYMBOL",
      selector: (row) => <li className="symbol">{row.symbol}</li>,
    },
    {
      cell: (row) => <Button props={row} />,
    },

    {
      name: "MARKET CAPITAL",
      selector: (row) => row.marketCap,
    },
    {
      name: "CURRENT PRICE",
      selector: (row) => (
        <h5>
          <span style={{ color: "black" }}>$</span>
          {row.price} USD
        </h5>
      ),
    },
  ];
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "rgba(81, 27, 131, 0.219)",
        color: "rgb(81, 27, 131 )",
        letterSpacing: "2px",
        textAlign: "center",
      },
    },
  };
  return (
    <>
      <HeroCard />
      <div className="stockTable">
        <DataTable
          columns={columns}
          style={{ background: "red" }}
          data={filterData}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="250px"
          customStyles={customStyles}
          highlightOnHover
          subHeader
          subHeaderComponent={
            <div className="subComponent">
              <h2>
                CRYPTO Details Table<span>############</span>
              </h2>

              <h3 className="searchIcon">
                <SearchIcon />
                <input
                  type="text"
                  name=""
                  placeholder="Search By Company Name"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </h3>
            </div>
          }
          subHeaderAlign="left"
        />
      </div>

      <Link to="/view">
        <button className="mobileBtn">View Saved Data</button>
      </Link>
    </>
  );
};

export default CoinTable;
