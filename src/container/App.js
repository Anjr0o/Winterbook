import React, { useState } from "react";
import "./App.css";
import PhoneBook from "../components/phoneBook";
import GenericTable from "../views/GenericTable";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import IconButton from "@material-ui/core/IconButton";

function App() {
  const usersData = [];
  const [users, setUsers] = useState(usersData);
  let userid = 0;

  const addUser = (user) => {
    userid++;
    user.id = userid;
    setUsers([...users, user]);
  };

  // I decided not to sort Items, but here is the code to do so, by default it sorts by lastName.
  const sortedArray = (users, fieldName = "lastName") => {
    return users.sort(function (a, b) {
      var nameA = a[fieldName].toLowerCase(),
        nameB = b[fieldName].toLowerCase();
      if (nameA < nameB)
        //sort string ascending
        return -1;
      if (nameA > nameB) return 1;
      return 0; //default return value (no sorting)
    });
  };

  const handleChecked = (data) => {
    const updatedUsers = users.filter(
      (item) => item.phoneNumber !== data.phoneNumber
    );
    if (!data.favorite) {
      setUsers([data, ...updatedUsers]);
    } else {
      setUsers([...updatedUsers, data]);
    }
    data.favorite = !data.favorite;
  };

  const handleTrash = (data) => {
    const updatedUsers = users.filter(
      (item) => item.phoneNumber !== data.phoneNumber
    );
    setUsers([...updatedUsers]);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className="iconbutton"
            color="inherit"
            aria-label="menu"
          >
            <ContactPhoneIcon />
          </IconButton>
          <Typography variant="h6" className="title">
            <h1>
              Winterbook is
              <span
                className="typer"
                id="main"
                data-words=" peaceful, fast, fun, easy, helpful, accessible, reliable"
                data-delay="100"
                data-deleteDelay="1000"
              ></span>
              <span className="cursor" data-owner="main"></span>
            </h1>
          </Typography>
        </Toolbar>
      </AppBar>
      <PhoneBook addUser={addUser} />
      <GenericTable
        primaryKey={"id"}
        title={"Phone Book"}
        columns={["First Name", "Last Name", "Phone Number"]}
        rowsKeys={["firstName", "lastName", "phoneNumber"]}
        data={users}
        handleTrash={handleTrash}
        handleChecked={handleChecked}
      />
    </div>
  );
}

export default App;
