import React from "react";
import Header from "../components/Header/Header";

function NotFound() {
    return (
        <>
            <Header />
         <div style={{ textAlign: "center", marginTop: "80px" }}>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you're looking for doesn't exist.</p>
        </div>
      </>
    );
}

export default NotFound;
