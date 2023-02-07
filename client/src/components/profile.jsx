import React from "react";
import styled from "styled-components";
// import logo from './logo.svg';
import  './profile.css';
import contact from '../img/contactlogo.png';
import mailme from '../img/mailmeimg.png';
import pybot from '../img/pybot.png';
import Opencv from '../img/Snapshot.png';
import NightMares from '../img/menu3.png';
import RecorderMaintainer from '../img/de.png';
import WordPress from '../img/blog.png';
import Password from '../img/bute.png';
import { useSelector } from "react-redux";

 const Div = styled.div`
 color:${({ theme }) => theme.text};
 `;

 const Section = styled.div`
 color:${({ theme }) => theme.text};
 text-align:center;
 `;

function Profile() {
        const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="App">

    <div id="home">   
    <h1 className="header-h1">Profile Page</h1>
</div>

      <nav className="navbar">
                <a href="#home"><i className="fa fa-fw fa-home"></i>Home</a>
                <a id="protofolio-link" href="#Portfolio"><i className="fa fa-github-alt"></i>Videos</a> 
                <a href="#container-about"><i className="fa fa-fw fa-user"></i>About</a>
                <a href="#contactnav"><i className="fa fa-fw fa-envelope"></i>Contact</a>
            </nav> 

      <br />

      
            <section className="container-banner">
            <a href="#home"><img id="profilepic" src={currentUser.img}  width="170" height="170" alt="profilepic"/></a>
            <h1> Hi! I'm {currentUser.name} </h1>
            <p id="paragarph1"><br/>Video Creator </p>
            <h1> {currentUser.videos} </h1>
            <br/>
            </section>
      <br />

      <section className="projects">
                  <h1 id='Portfolio'>Videos</h1><br/>
                    <div className="container">
                        <a href="https://google.com/"><img src={pybot} width="200" height="200" alt="Pybot"/><p>Code</p></a>
                        <a href="https://google.com/"><img src={Opencv} width="200" height="200" alt="Pybot"/><p>Cam</p></a>
                        <a href="https://google.com/"><img src={NightMares} width="200" height="200" alt="Pybot"/><p>Games</p></a>
                    </div>
<br/>
                    <div className="container">
                        <a href="https://google.com/"><img src={RecorderMaintainer} width="200" height="200" alt="Pybot"/><p>Recorder Maintainer</p></a>
                        <a href="https://google.com/"><img src={WordPress} width="200" height="200" alt="Pybot"/><p>Car Race Game</p></a>
                        <a href="https://google.com/"><img src={Password} width="200" height="200" alt="Pybot"/><p>Password Cracker</p></a>
                    </div>           
            </section>
      <br />
            <section id="container-about" className="container-about">
            <h1>About Me</h1> 
            <img className="imgg" src={currentUser.img} width="180" height="180" alt="abtimg"/>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
        
    </section>
    <Div className="heading"><br/><br/>
      <h1 id="contactnav" >Contact Information</h1></Div>
      <hr />

      <Section >
      <br/>
                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
                <br/>
                <h3> <strong>{currentUser.name}</strong></h3><br/>
                <h4>Random Text Random text Random text</h4><br/>
                <h4>Email Id: {currentUser.email}</h4><br/>
                <a id="mail"href="https://mail.google.com/mail/"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>
                <h4>Contant Info: 19200999394/2999839902</h4>
            </Section>

    </div>
  );
}

export default Profile;
