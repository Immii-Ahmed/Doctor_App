import React from "react";
import { DocCard } from "../../Components";

const DocCardPage = () => {
  return (
    // <div className="card-group" style={{ margin: "4%" }}>
    //   <DocCard />
    //   <DocCard />
    //   <DocCard />
    //   <DocCard />
      
    // </div>
    <div className="container py-4 py-xl-5">
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
    <DocCard />
    <DocCard />
    <DocCard />
    <DocCard />
    </div>
  </div>
  );
};

export default DocCardPage;
