import React, { useState } from "react";

const SearchBar = ({onSubmit}) => {
  const [term, setTerm] = useState([]);
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  }
  return(
    <div>
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            name="first-name"
            placeholder="First Name"
            value={term}
            onChange = {(e) => {
              setTerm(e.target.value);
            }}/>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
