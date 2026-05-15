import React, { useEffect } from "react";
import Contactform from "../components/contactform";

function Contactpage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Contactform />
    </>
  );
}

export default Contactpage;
