import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Upload from "./Upload";
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { BsCameraReels } from 'react-icons/bs';
import Tippy from '@tippyjs/react';
import file from "./file.zip";
import Axios from "axios";
import FileDownload from "js-file-download";

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
width: 40%;
min-width:300px;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  background-color: ${({ theme }) => theme.search};
  border-radius: 50px;
  color: ${({ theme }) => theme.text};
`;

const Serbutton = styled.button`
border-radius: 50px;
background-color: rgb(222,160,7);
padding: 0px 18px;
margin-left: 0px;
postion: fixed;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};

`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const H7 = styled.div`
font-size: 13px;
color: ${({ theme }) => theme.text};
`;
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;
const Down = styled.div`
color: ${({ theme }) => theme.text};
margin: 10px;
`;
const ButtonD = styled.button`
background:transparent;
border:none;
color: ${({ theme }) => theme.text};
`;

const Navbar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  console.log("currentUser", currentUser);

  
  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input
              placeholder="Search"
              onChange={(e) => setQ(e.target.value)}
            />
            
          
          <Serbutton>
          <SearchOutlinedIcon onClick={()=>navigate(`/search?q=${q}`)}/>
          </Serbutton></Search>
          {currentUser? (
            <User>
            <Down><Tippy content={<div><H7>Upload</H7></div>}>
          <ButtonD ><BsCameraReels size={20} onClick={() => setOpen(true)} /></ButtonD></Tippy></Down>

              
              <Link to="store" style={{ textDecoration: "none", color: "inherit" }}>
              <Down><Tippy content={<div><H7>Store</H7></div>}>
          <ButtonD download="file" ><MdOutlineLocalGroceryStore size={25}/></ButtonD></Tippy></Down></Link>
              <Avatar src={currentUser.img} />
              
              <Link to="profile" style={{ textDecoration: "none", color: "inherit" }}>
              {currentUser.name}
              </Link>
            </User>
            
          ) : (
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;