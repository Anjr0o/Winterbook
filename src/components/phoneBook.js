import React, { useState } from "react";
import MuiPhoneNumber from "material-ui-phone-number";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const AddContactDetailsForm = ({
  id,
  firstName,
  lastName,
  phoneNumber,
  favorite,
  addUser,
}) => {
  const initialFormState = {
    id: null || id,
    firstName: "" || firstName,
    lastName: "" || lastName,
    phoneNumber: "" || phoneNumber,
    favorite: false || favorite,
  };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const handlePhoneChange = (phone) => {
    setUser({ ...user, phoneNumber: phone });
  };

  return (
    <div className="phoneBook">
      <ValidatorForm
        onSubmit={(event) => {
          event.preventDefault();
          if (!user.firstName || !user.lastName || !user.phoneNumber) return;
          addUser(user);
          setUser(initialFormState);
        }}
        onError={(errors) => console.log(errors)}
      >
        <label htmlFor="firstName">First Name</label>

        <TextValidator
          variant="filled"
          onChange={handleInputChange}
          name="firstName"
          value={user.firstName}
          validators={["required"]}
          errorMessages={["this field is required"]}
        />
        <label htmlFor="lastName">Last Name</label>

        <TextValidator
          variant="filled"
          onChange={handleInputChange}
          name="lastName"
          value={user.lastName}
          validators={["required"]}
          errorMessages={["this field is required"]}
        />
        <label htmlFor="Phone Number">Phone Number</label>
        <MuiPhoneNumber
          defaultCountry={"us"}
          value={user.phoneNumber}
          onChange={handlePhoneChange}
          variant="filled"
        />
        <br />
        <label htmlFor="Submit">Submit</label>
        <div className="buttonStuff">
          <Button size="large" variant="contained" type="submit">
            Add Contact
          </Button>
        </div>
      </ValidatorForm>
    </div>
  );
};

export default AddContactDetailsForm;
