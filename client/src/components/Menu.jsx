import React from "react";
import styled from "styled-components";
import AnimeByMe from "../img/logo.png";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { HiHome } from "react-icons/hi";
import { AiFillFire} from "react-icons/ai";
import { RiUserFollowFill} from "react-icons/ri";
import { BsFillCollectionFill} from "react-icons/bs";
import { BsFillClockFill} from "react-icons/bs";
import { IoSettings} from "react-icons/io5";
import { IoInvertMode} from "react-icons/io5";
import { ImConfused2} from "react-icons/im";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
display: flex;
align-items: center;
gap: 5px;
font-size: 20px;
font-weight: bold;
margin-bottom: 25px;
`;

const Img = styled.img`
  height: 35px;
`;

const Item = styled.div`
display: flex;
align-items: center;
gap: 20px;
cursor: pointer;
padding: 5px 5px;

&:hover {
  background-color: rgb(222,160,7);
  border-radius: 20px;
}
`;
const Item1 = styled.div`
display: flex;
align-items: center;
gap: 20px;
cursor: pointer;
padding: 5px 5px;
color: black;
color: ${({ theme }) => theme.text};
font-size: 14px;
&:hover {
  background-color: rgb(222,160,7);
  border-radius: 20px;
}
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={AnimeByMe} />
            AnimeByMe
          </Logo>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>
          <HiHome size={25} />
          Home
        </Item></Link>
        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <AiFillFire size={25} />
            Explore
          </Item>
        </Link>
        <Link
          to="subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <RiUserFollowFill size={25} />
            Subscriptions
          </Item>
        </Link>
        <Hr />
        <Link to="librarypage" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>
          <BsFillCollectionFill size={23} />
          Library
        </Item>
        </Link>
        <Link to="liked" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>
          <BsFillClockFill size={23} />
          Liked Videos
        </Item>
        </Link>
        <Hr />
        {!currentUser &&
          <>
            <Login>
              Sign in to like videos, comment, and subscribe.
              <Link to="signin" style={{ textDecoration: "none" }}>
                <Button>
                  <AccountCircleOutlinedIcon />
                  SIGN IN
                </Button>
              </Link>
            </Login>
            <Hr />
          </>
        }
        <Link to="setting" style={{ textDecoration: "none" }}>
       <Item1>
          <IoSettings size={23}/>
          Settings
        </Item1>
       </Link>
       <Link to="help" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>
          <ImConfused2 size={23}/>
          Help
        </Item>
        </Link>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <IoInvertMode size={23}/>
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
        
      </Wrapper>
    </Container>
  );
};

export default Menu;