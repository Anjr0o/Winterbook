import React from "react";
import FlipMove from "react-flip-move";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const GenericTable = ({
  data,
  title,
  rowsKeys,
  handleChecked,
  handleTrash,
}) => {
  const dataList = data;

  return (
    <div className="table">
      <h2>View {title} </h2>
      {dataList && dataList.length ? (
        <FlipMove>
          {dataList.map((data) => (
            <div key={data.phoneNumber}>
              {rowsKeys.map((key, index) => (
                <span key={index + data[key] + data.id}>{data[key]} </span>
              ))}
              <Checkbox
                checked={data.favorite}
                onChange={(event) => handleChecked(data)}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                name="checked"
              />
              <IconButton onClick={() => handleTrash(data)} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
        </FlipMove>
      ) : (
        <FlipMove>
          <div key="abc"> No Data in {title}</div>
        </FlipMove>
      )}
    </div>
  );
};

export default GenericTable;
