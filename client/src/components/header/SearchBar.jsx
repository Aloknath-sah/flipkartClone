import React from "react";
import { makeStyles, InputBase, alpha } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    backgroundColor: "#fff",
    marginLeft: 10,
    width: "38%",
    display: "flex",
  },
  searchIcon: {
    padding: 5,
    height: "100%",
    color: "blue",
    pointerEvents: "none",
    display: "flex",
  },
  inputRoot: {
    fontSize: "87%",
    width: "100%",
    color: "black",
  },
  inputInput: {
    paddingLeft: 20,
  },
}));

export const SearchBar = () => {
  const classes = useStyle();
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search for products, brands and more"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
};
