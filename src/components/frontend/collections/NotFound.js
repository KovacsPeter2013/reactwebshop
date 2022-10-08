import React from "react";
import Nav from "../../../layouts/frontend/Nav";
const NotFound = () => {
  return (
    <>
      <div className="container">
        <Nav />

        <div className="content-wrapper" style={{marginTop: '100px'}}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>404-es hibakód</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/">Kezdőlap</a>
                    </li>
                    <li className="breadcrumb-item active">404</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section className="content">
            <div className="error-page">
              <h2 className="headline text-warning"> 404</h2>

              <div className="error-content">
                <h3>
                  <i className="fas fa-exclamation-triangle text-warning"></i>{" "}
                  Hooppá! Oldal nem található.
                </h3>

                <p>
                Keresett oldal nem létezik
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default NotFound;
