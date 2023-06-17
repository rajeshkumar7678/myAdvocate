import React, { useEffect, useState } from "react";
import LawyerCard from "../../Components/lawyer/LawyerCard";

import LawyerFilterer from "../../Components/lawyer/lawyerfilter";
import SearchBar from "../../Components/lawyer/searchbar";
// import Form from "../Appointment/form";


import "./lawyer.css";
const Lawyers = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState("name");
  const [items, setItems] = useState([]);

  async function FetchLawyers() {
    let response = await fetch(`http://localhost:4500/lawyer/`)

    let data = await response.json();
    setItems(data);

    setLoading(false);
  }
  console.log(items)
  useEffect(() => {
    setLoading(true);
    FetchLawyers();
  }, [query, option]);

  return (
    <div>
      <div className="search-div">

        <SearchBar query={query} setQuery={setQuery} setOption={setOption} />
      </div>
      <div className="LawyerArea">
        {/* <LawyerFilterer /> */}
      </div>



      <div>

        {(
          <div className="lawyer-list">
            {items?.map((el, index) => {
              return (
                <div key={index + "4iop89721"}>
                  <LawyerCard key={index + "7897546"}{...el} />
                </div>
              )
            })}
          </div>

        )}
      </div>








    </div>
  );
};

export default Lawyers;