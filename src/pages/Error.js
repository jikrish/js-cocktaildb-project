import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="my-section">
      <div className="my-error-container">
        <h1>Oops... Error 404: Page not found!</h1>
        <Link to="/" className="my-btn my-btn-primary">
          Go back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
