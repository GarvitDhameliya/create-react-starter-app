import React, { useEffect, useState } from "react";
import { callGetApi } from "../helper/helper";

const Data = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    callGetApi().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div>
      <div className="row">
        {data.map((val, ind) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={ind}>
              <div className="card-body">
                <h5 className="card-title">{val.id}</h5>
                <p className="card-text">{val.title}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Data;
