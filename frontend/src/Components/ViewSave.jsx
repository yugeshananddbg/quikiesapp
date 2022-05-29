import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "./coinTable.css";
import { Link } from "react-router-dom";
import HeroCard from "./HeroCard";

const ViewSave = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(1);

  const fetchMyData = () => {
    fetch("http://localhost:4000/api/v1/coins")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchMyData();
  }, [data]);

  const columns = [
    {
      selector: (row) => row.name,
    },
    {
      selector: (row) => <li className="symbol">{row.symbol}</li>,
    },
    {
      name: "SAVE DATA TABLE",
      selector: (row) => (
        <h5>
          <span style={{ color: "black" }}>$</span>
          {row.marketCap}
        </h5>
      ),
    },

    {
      cell: (row) => (
        <button
          onClick={() => {
            fetch(`http://localhost:4000/api/v1/delete/${row._id}`, {
              method: `DELETE`,
            })
              .then((response) => {
                return response.json();
              })
              .then(() => {});
          }}
        >
          DELETE
        </button>
      ),
    },
    {
      selector: (row) => (
        <h5>
          <span style={{ color: "black" }}>$</span>
          {row.price} USD
        </h5>
      ),
    },
  ];
  const mcolumns = [
    {
      selector: (row) => <h4 style={{ marginLeft: "10vw" }}>{row.name}</h4>,
    },
    {
      selector: (row) => <li className="symbol">{row.symbol}</li>,
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
    <div>
      <div className="mobile">
        <HeroCard />
      </div>

      <div className="stockTable ">
        <DataTable
          columns={columns}
          data={data}
          fixedHeader
          fixedHeaderScrollHeight="250px"
          customStyles={customStyles}
          highlightOnHover
        />
        <footer className="footer">
          <Link to="/">
            <button>Back</button>
          </Link>
        </footer>
      </div>
      <div className="mobileStock">
        <header className="theader">
          <h3>SAVED DATA TABLE</h3>
        </header>
        <DataTable
          columns={mcolumns}
          data={data}
          fixedHeader
          noTableHead
          fixedHeaderScrollHeight="250px"
          customStyles={customStyles}
          highlightOnHover
        />
        <footer className="footer">
          <Link to="/">
            <button>Back</button>
          </Link>
        </footer>
      </div>
      <Link to="/view">
        <button className="mobileBtn">Refresh</button>
      </Link>
    </div>
  );
};

export default ViewSave;
