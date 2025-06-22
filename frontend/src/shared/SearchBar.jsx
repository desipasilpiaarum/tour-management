import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form } from "reactstrap";

const SearchBar = ({ onSearch }) => {
  const locationRef = useRef("");

  const searchHandler = (e) => {
    e.preventDefault();
    const location = locationRef.current.value.trim();
    onSearch(location.toLowerCase());
  };

  return (
    <Col lg="6">
      <div className="search__bar__wrapper">
        <Form onSubmit={searchHandler} className="search__bar__form">
          <div className="search__input__group">
            <span className="left__icon">
              <i className="ri-map-pin-line"></i>
            </span>
            <div className="text__group">
              <h6>Destinasi</h6>
              <input
                type="text"
                placeholder="Cari destinasi"
                ref={locationRef}
                onChange={() => onSearch(locationRef.current.value.trim().toLowerCase())}
              />
            </div>
          </div>

          <button type="submit" className="search__btn">
            <i className="ri-search-line"></i>
          </button>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;