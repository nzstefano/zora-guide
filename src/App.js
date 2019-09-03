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
  flex-direction: row;
  color: #fff;
  justify-items: stretch;
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
  // flex: 1;
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
  width: 100%;
`;

const Content = styled.div`
background-color: #fff
color: #000
height: 100vh;
justify-content: space-around;
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
        </div>
        <div>
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
        <Add>Add New Item</Add>

        <div>Calculate</div>
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
