import React from "react";
import { makeStyles, InputBase, alpha } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles((theme) => ({
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#fff",
    marginLeft: 10,
    width: "38%",
    display: "flex"
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    color: "blue",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
   
  },
}));

export const SearchBar = () => {
  const classes = useStyle();
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search…"
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
