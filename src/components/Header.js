import React from "react";
import Search from "./Search";
import Filter from './Filter'

function Header({ setSearch, search, setSort }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearch={setSearch} search={search}/>
      <Filter setSort={setSort}/>
    </header>
  );
}

export default Header;
