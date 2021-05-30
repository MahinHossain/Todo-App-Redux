import React from "react";
import Headers from "./Header";
import Footer from "./Footer";
export default function Layout(props) {
  return (
    <div className="container">
      {props.children}
      <Footer />
    </div>
  );
}
