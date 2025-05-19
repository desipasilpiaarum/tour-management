import React, { useRef } from "react";
import "./search-bar.css"; // pastikan ini ada
import { Col, Form } from "reactstrap";

const SearchBar = () => {
  const locationRef = useRef("");

  const searchHandler = (e) => {
    e.preventDefault();
    const location = locationRef.current.value;
    if (location === "") return alert("Lokasi harus diisi!");
    console.log("Searching for:", location);
  };

  return (
    <Col lg="12">
      <div className="search__bar__wrapper">
        <Form onSubmit={searchHandler} className="search__bar__form">
          {/* Icon & Input */}
          <div className="search__input__group">
            <span className="left__icon">
              <i className="ri-map-pin-line"></i>
            </span>
            <div className="text__group">
              <h6>Lokasi</h6>
              <input
                type="text"
                placeholder="Jelajahi Wisata Bersama Kami"
                ref={locationRef}
              />
            </div>
          </div>

          {/* Search icon */}
          <button type="submit" className="search__btn">
            <i className="ri-search-line"></i>
          </button>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
