import React from "react";
import styled from "styled-components";
import "./Style.css";
import { useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import i4 from "./i4.png";
import start from "./logo.png";

const Div = styled.div`
background-color : ${({ theme }) => theme.storebg};
`;
const Div1 = styled.div`
font-size:13px;
color:${({ theme }) => theme.storet};
text-align:right;
margin-bottom:5px;
`;
const H2 = styled.h2`
color:${({ theme }) => theme.storet};
`;


const Card1 = () => {
  const navigate = useNavigate();
  return (
    <>
    < section className="main-card--cointainer" >


    <div className="card-container" >
        <Div className="card ">
            <Link to="download1" style={{ textDecoration: "none" }}>
                <img src={start} alt="images" className="card-media" />
            </Link>
            <H2 className="card-title">Starter Kit</H2> 
            <Div1>-Anime By Me</Div1>
        </Div>
    </div>


    <div className="card-container" >
        <Div className="card ">
            <Link to="download2" style={{ textDecoration: "none" }}>
                <img src={i1} alt="images" className="card-media" />
            </Link>
            <H2 className="card-title">Archetype</H2>
            <Div1>-Anime By Me</Div1>
        </Div>
    </div>
            
         
    <div className="card-container" >
        <Div className="card ">
            <Link to="download3" style={{ textDecoration: "none" }}>
                <img src={i2} alt="images" className="card-media" />
            </Link>
            <H2 className="card-title">Ambiance</H2>
            <Div1>-Anime By Me</Div1>
            
        </Div>
    </div>


    <div className="card-container" >
        <Div className="card ">
            <Link to="download4" style={{ textDecoration: "none" }}>
                <img src={i3} alt="images" className="card-media" />
            </Link>
            <H2 className="card-title">Multi Rig</H2>
            <Div1>-Anime By Me</Div1>
        </Div>
    </div>

        <div className="card-container" >
            <Div className="card ">
                <Link to="download5" style={{ textDecoration: "none" }}>
                    <img src={i4} alt="images" className="card-media" />
                </Link>
                <H2 className="card-title">Asset-Blender Kit</H2> 
                <Div1>-Anime By Me</Div1>
            </Div>
        </div>

              
              
      </section>
    </>
  );
};

export default Card1;