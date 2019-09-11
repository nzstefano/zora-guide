import React from "react";
import "./App.css";
import Database from "./header/Database.js";
import Guide from "./header/Guide.js";
import Calculator from "./header/Calculator.js";
import Add from "./main/Add.js";
import AddCurx from "./main/AddWishx.js";
import AddWishx from "./main/AddCurx.js";
import ResultMat from "./main/ResultMat.js";
import ResultStat from "./main/ResultStat.js";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";

const Header = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: row;
  color: #fff;
  justify-items: center;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Button = styled.a`
  display: flex;
  background-color: #282c34;
  color: rgba(255, 255, 255, 0.5);
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 8px 8px 8px 8px;
  width: 100%;
  :hover {
    color: #f5f5f5;
  }
`;

const SearchBox = styled.form`
  min-height: 50px;
  display: flex;
  padding: 8px 8px 8px 8px;
  width: 100%;
  align-items: left;
  margin-left: 20px;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
background-color: #fff
color: #000
height: 100%;
justify-content: space-around;
`;

const CalBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const ResultBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  // position: fixed;
`;

const CancelBtn = styled.button`
  display: block;
  position: relative;
  text-align: center;
  box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px #fff;
  background-color: #0180fe;
  justify-content: flex-end;
  padding: 20px 20px 20px 20px;
  margin: 20px 20px 20px 20px;
  cursor: pointer;
  border-radius: 8px;
  :before {
    content: "";
    display: block;
    background: #fff;
    border-top: 2px solid #ddd;
    position: absolute;
    top: -18px;
    left: -18px;
    bottom: -18px;
    right: -18px;
    z-index: -1;
    border-radius: 50%;
    box-shadow: inset 0px 8px 48px #ddd;
  }
  :hover {
     {
      background-color: #01bbfe;
    }
  }
`;

const SaveBtn = styled.button`
  display: block;
  position: relative;
  text-align: center;
  box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px #fff;
  background-color: #febb01;
  justify-content: flex-end;
  padding: 20px 20px 20px 20px;
  margin: 20px 20px 20px 20px;
  cursor: pointer;
  border-radius: 8px;
  :before {
    content: "";
    display: block;
    background: #fff;
    border-top: 2px solid #ddd;
    position: absolute;
    top: -18px;
    left: -18px;
    bottom: -18px;
    right: -18px;
    z-index: -1;
    border-radius: 50%;
    box-shadow: inset 0px 8px 48px #ddd;
  }
  :hover {
     {
      background-color: #fedc01;
    }
  }
`;

const Footer = styled.footer`
  background-color: #282c34;
  color: #fff;
  display: flex-block;
  text-align: center;
  padding: 1rem;
  width: 100%;
  position: relative;
`;

const FooterLink = styled.a`
  color: #b3c4f4;
  :hover {
    color: blue;
  }
`;

function App() {
  return (
    <div>
      <Header>
        <div
          style={{
            justifyItems: "stretch",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            alignItems: "center"
          }}
        >
          <Button
            href="/home/"
            style={{
              marginLeft: "10px"
            }}
          >
            <HomeIcon />
          </Button>
          <Database /> <Guide />
          <Calculator />
          <SearchBox>
            <input placeholder="Search Database" />
            <button
              style={{
                backgroundColor: "LightBlue",
                cursor: "pointer"
              }}
            >
              <SearchIcon />
            </button>
          </SearchBox>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse"
          }}
        >
          <Button href="/sign-up/">Sign Up</Button>
          <Button href="/login/">Log in</Button>
        </div>
      </Header>
      <Content>
        <CalBox>
          {/* <Add /> */}
          <AddWishx />
          <AddCurx />
        </CalBox>
        <ResultBar>
          <ResultStat />
          <ResultMat />
        </ResultBar>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse"
          }}
        >
          <SaveBtn>Save</SaveBtn>
          <CancelBtn>Cancel</CancelBtn>
        </div>
      </Content>
      <Footer>
        <div>
          <div>
            <FooterLink href="/contact/">Contact</FooterLink> |{" "}
            <FooterLink href="/about-us/">About Us</FooterLink> |{" "}
            <FooterLink href="privacy-policy/">Privacy Policy</FooterLink>
          </div>
          <div>ZoraGuide - Ragnarok Mobile Fansite</div>
          <div>© 2019</div>
        </div>
      </Footer>
    </div>
  );
}

export default App;
