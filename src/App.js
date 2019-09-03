import React from "react";
import "./App.css";
import Database from "./header/Database.js";
import Guide from "./header/Guide.js";
import Calculator from "./header/Calculator.js";
import Add from "./main/Add.js";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";

const Header = styled.header`
  background-color: #282c34;
  display: flex;
  // max-height: 50px;
  // min-height: 50px;
  flex-direction: row;
  color: #fff;
  justify-items: stretch;
  align-items: center;
`;

const Button = styled.a`
  background-color: #282c34;
  color: rgba(255, 255, 255, 0.5);
  position: relative;
  cursor: pointer;
  padding: 8px 8px 8px 8px;
  :hover {
    color: #f5f5f5;
  }
`;

const SearchBox = styled.form`
  min-height: 50px;
  display: flex;
  align-self: stretch;
  // background-color: blue;
  // justify-content: space-around;
  padding: 8px 8px 8px 8px;
`;

const Main = styled.div`
background-color: #fff
color: #000
`;

const Footer = styled.footer`
  background-color: #282c34;
  color: #fff;
  display: block;
  text-align: center;
  padding: 1rem;
`;

const FooterLink = styled.a`
  color: #b3c4f4;
  :hover {
    color: blue;
  }
`;

function App() {
  return (
    <html lang="en">
      <Header>
        <div
          style={{
            width: "40%",
            justifyItems: "stretch",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            alignItems: "center"
          }}
        >
          <ul>
            <Button href="/home/">
              <HomeIcon />
            </Button>
          </ul>
          <ul>
            <Database />{" "}
          </ul>
          <ul>
            <Guide />
          </ul>
          <ul>
            <Calculator />
          </ul>
        </div>
        <div style={{ width: "20%", alignSelf: "stretch" }}>
          {/* <Search /> */}
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
            width: "40%",
            display: "flex",
            flexDirection: "row-reverse"
          }}
        >
          <ul>
            <Button href="/sign-up/">Sign Up</Button>
          </ul>
          <ul>
            <Button href="/login/">Log in</Button>
          </ul>
        </div>
      </Header>
      <Main
        style={{
          minHeight: "600px"
        }}
      >
        <div>
          <ul>
            <Add>Add New Item</Add>
          </ul>
          <ul>
            <i>Calculate</i>
          </ul>
        </div>
      </Main>
      <Footer>
        <div>
          <div>
            <FooterLink href="/contact/">Contact</FooterLink> |{" "}
            <FooterLink href="/about-us/">About Us</FooterLink> |{" "}
            <FooterLink href="privacy-policy/">Privacy Policy</FooterLink>
          </div>
          <ul />
          <div>ZoraGuide - Ragnarok Mobile Fansite</div>
          <ul />
          <div>© 2019</div>
        </div>
      </Footer>
    </html>
  );
}

export default App;
