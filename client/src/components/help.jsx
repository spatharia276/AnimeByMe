import React from "react";
import styled from "styled-components";
import {
    MdPhone,
    MdEmail,
    MdLocationOn
  } from 'react-icons/md';

const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top:70px;
`;

const Div1 = styled.div`
background-color: rgb(10,0,79);
border-style: hidden;
border-radius: 15px;
font-family: 'Ruda', sans-serif;
height:auto;
width:85%;
justify-content:center;
align-item:center;
display:flex;
`;
 const Hr = styled.hr`
 `;
const Div2 = styled.div`
display:flex;
flex-direction:column;
width:50%;

overflow: auto;
text-overflow: auto;
`;

const Div3 = styled.div`
display:flex;
width:50%;
padding:15px 15x;
justify-content:center;
`;
const Div4 =  styled.div`
color : white;
font-size:35px;
font-weight:700;
padding:35px 35px;
`;

const Div5 = styled.div`
display:flex;
width:100%;
justify-content:center;
color:rgb(111,127,153);
font-size:20px;
`;

const Div6 = styled.button`
display:flex;
border:none;
&:hover {
    font-size:25px;
  }
width:100%;
color:white;
justify-content:center;
align-items:center;
background-color:transparent;
font-size:22px;
`;

const Div7 = styled.div`
background-color: #f1f1f1;
width:90%;
margin:20px;
border-style: hidden;
border-radius: 15px;
font-family: 'Ruda', sans-serif;
padding:20px 20px;
font-size:25px;
border:2px solid black;
`;

const Div8 = styled.div`
display:flex;
justify-content:center;

`;

const Input = styled.input`
width:100%;
height:35px;
border:none;
border-radius:10px;
padding:2px 5px;
margin-top:10px;
font-size:18px;
`;

const Textarea = styled.textarea`
width:100%;
border:none;
border-radius:10px;
padding:2px 5px;
margin-top:10px;
font-size:18px;
`;

const Button = styled.button`
border-radius:30px;
padding:7px 15px;
margin-top:14px;
background-color:rgb(230,162,0);
font-size:20px;
cursor:pointer;
border:none;
`;

function Help() {
       
  return (
    <Div>
        <Div1>
            <Div2>
<Div4>Contact</Div4>
<Div5>Fill up the form below to contact<br/><br/><br/><br/></Div5><div>
<Div6><MdPhone color="#1970F1" size="30px"  /> +91-9999999999</Div6><br/><br/><br/>
<a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=animebyme01@gmail.com">
<Div6><MdEmail color="#1970F1" size="30px"  />animebyme01@gmail.com</Div6><br/><br/><br/>
</a>
<a id="mail"href="https://goo.gl/maps/y1JEre8SaMSRTUS76">
<Div6><MdLocationOn color="#1970F1" size="30px"  />Delhi, India</Div6>
</a></div>
            </Div2>
         
            <Div3>
            <Div7>
            <br/>Name<br/>
            <Input type="text" id="name" placeholder="Full Name" required/><br/><br/>
            Email
            <Input type="email" id="email" placeholder="Email Id" required/><br/><br/>
            Message<br/>
            <Textarea placeholder="Type message here..." id="message" rows="6" required></Textarea>
            <br/>
            <Div8><Button type="submit">Send Message</Button></Div8>
            </Div7>
            </Div3>
        </Div1>
    </Div>
  );
}

export default Help;
