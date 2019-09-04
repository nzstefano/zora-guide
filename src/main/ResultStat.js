import React from "react";
import styled from "styled-components";

const Table = styled.div`
  display: table;
  margin: 10px 10px 10px 10px;
  border: 1px solid #000;
  min-height: 300px;
  min-width: 300px;
  //   position: fixed;
`;

export default function ResultStat() {
  return (
    <div>
      <Table>This gonna be status table</Table>
    </div>
  );
}
