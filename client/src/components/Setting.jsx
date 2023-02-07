import React, {useState} from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Account from "./acc.png";
import {Switch} from "antd";

const Div1 = styled.div`
color: ${({ theme }) => theme.text};
font-size: 25px;
font-weight: bold;
`;

const Div2 = styled.div`
color: ${({ theme }) => theme.text};
font-size: 16px;
`;

const Div3 = styled.div`
color: ${({ theme }) => theme.text};
font-size: 19px;
font-weight: bold;
`;

const Div4 = styled.div`
display: flex;

`;

const Div5 = styled.div`
color: ${({ theme }) => theme.text};
font-size: 17px;
font-weight:500;
padding-right:150px;
`;

const Div6 = styled.div`
cursor: pointer;
color: rgb(69,153,220);
`;

const Div7 = styled.div`
padding : 25px 10px;
color: ${({ theme }) => theme.text};
`;

const Div8 = styled.div`
color: ${({ theme }) => theme.text};
font-size: 16px;
`;
const Img = styled.img`
width: 200px;


`;
const Avatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #999;
`;

const Hr = styled.hr`
margin:5px;
margin-left:100px;
margin-right:100px;
`;
function Setting() {
  const { currentUser } = useSelector((state) => state.user);
  const [channel, setChannel] = useState({});
    return (
<div>
    <Div1>Account</Div1>
    <br/>
    <Div2>Signed in as {currentUser.email}</Div2>
    
    <br/>
    <Div4>
    <Div5>Your Channel</Div5>
    
    <Avatar src={currentUser.img} />
    <Div7>{currentUser.name}
    <Div6><br/><br/>Create a new channel<br/>View advanced settings</Div6></Div7>
    
    </Div4>
    <br/>
    <hr/>
    <Div1><br/>Privacy</Div1>
    <br/>
    <Div2>Choose who can see your saved playlists and subscriptions</Div2><br/>
    <Div4>
    <Div5>Playlists and subscriptions</Div5>
    
    <Div8> <Switch/> Keep all my saved playlists private
    <br/><br/><Switch/> Keep all my subscriptions private
   </Div8>
    </Div4>  <br/><br/>
    <hr/>
    <Div1><br/>Advanced settings</Div1><br/><br/>
    <Div4>
    <Div5>User Id</Div5>
    <Div8> <label>{currentUser._id}</label>
   </Div8>
    </Div4>
  <br/><br/> 
    <hr/>
</div>
  );
}

export default Setting;
