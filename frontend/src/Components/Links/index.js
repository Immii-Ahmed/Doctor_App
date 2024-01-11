import React from "react";
import { Link } from "react-router-dom";

function Links(props) {
   const { address, title } = props;
  return (
    <>
          <Link className="nav-link active" aria-current="page" to={address}>{title}</Link>
    </>
  );
}

export default Links;
