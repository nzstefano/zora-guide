import React from "react";
import styled from "styled-components";
import AddBoxIcon from "@material-ui/icons/AddBox";

const AddBtn = styled.div`
  display: table;
  border: 3px Solid #000;
  min-height: 200px;
  min-width: 200px;
  text-align: center;
  justify: center;
`;

export default function Cancel() {
  return (
    <AddBtn>
      <AddBoxIcon
        style={{
          fontSize: "160px"
        }}
      >
        <button />
      </AddBoxIcon>
      <ul />
      Add New Item
    </AddBtn>
  );
}
