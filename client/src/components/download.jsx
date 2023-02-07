import React from "react";
import styled from "styled-components";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import {IconContext} from "react-icons"; 
import { MdCloudDownload } from "react-icons/md";
import Axios from "axios";
import FileDownload from "js-file-download";
import i1 from "./i1.png";
import i2 from "./i2.png";
import AnimeByMe from "../img/logo.png";

const Section = styled.div`
background-color: transparent;
text-align: center;
border-style: hidden;
border-radius: 15px;
font-family: 'Ruda', sans-serif;
`;

const Button = styled.button`
border-radius:50px;
border:none;
padding:10px 50px;
font-size:25px;
margin-top:20px;
margin-bottom:20px;
background-color:rgb(222,160,7);
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

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.text};
`;

const Hr1 = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.line};
`;

const Hr2 = styled.hr`
  border: 0px;
  
`;

const Detail = styled.div`
display: flex;
height:70px;
align-item:center;
justify-content:center;
color: ${({ theme }) => theme.text};
`;

const Main = styled.div`
display: flex;
`;

const Div1 = styled.div`
padding:0px 50px;
`;

const Div2 = styled.div`
font-size:25px;
`;

const Div3 = styled.div`
padding:10px 50px;
`;

const Div4 = styled.div`
font-size: 30px;
padding: 20px 0px;
color: ${({ theme }) => theme.text};
font-weight:800;
`;
 const Div5 = styled.div`
 font-size:15px;
 color: ${({ theme }) => theme.text};
 `;
 const Div6 = styled.div`
font-size: 30px;
padding: 20px 0px;
color: ${({ theme }) => theme.text};
font-weight:800;
`;
const Div7 = styled.div`
 font-size:15px;
 color: ${({ theme }) => theme.text};
 `;

const Image = styled.img`
width:48%;
padding-top: 15px;
padding-right: 5px;
`;

const Image2 = styled.img`
width:48%;
padding-top: 15px;
padding-left: 5px;
`;

const Image3 = styled.img`
width:250px;
`;
function Download() {
    const download=(e)=>{
        e.preventDefault()
        Axios({
          url:"http://localhost:3000",
          method:"GET",
          responseType:"blob"
    
        }).then((res)=>{
          console.log(res)
          FileDownload(res.data,"file.zip")
        })
      }
    const [myNum, setMyNum] = React.useState(0);
  return (
    <div>
<Section>

<Main>
<Div1><Image3 src={AnimeByMe}/></Div1>
<Hr2/>
<Div3><div>
<IconContext.Provider value={{size: 79}}>
    <Down><ButtonD>
        <MdCloudDownload />
    </ButtonD></Down>
</IconContext.Provider></div>
<br/>
<Div2><div onClick={() => setMyNum(myNum + 1)}>
<Button onClick={(e)=>download(e)}>Download</Button>
</div></Div2></Div3>
</Main>

<Hr/>
<Detail>
<Div1>AGE<br/><Div2>14+</Div2>Years Old</Div1>
<Hr1/>
<Div3>LANGUAGE<br/><Div2>EN</Div2></Div3>
<Hr1/>
<Div1>SIZE<br/><Div2>485</Div2>KB</Div1>
<Hr1/>
<Div3>DOWNLOAD<br/><Div2>{myNum}</Div2></Div3>
</Detail>
<Hr/>
<div><Image src={i1}/><Image2 src={i2}/></div>

</Section>
<Div4>About this kit :</Div4>
<Div5>No matter if you are a new Blender user or have been using Blender already for a while, it comes with a lot of keyboard shortcuts. If you know them you can improve your workflow and work much faster. This app was built to help you get to know the different keyboard shortcuts.

This app contains more than 100+ keyboard shortcuts for the 3D software Blender version 2.8 and up. All keyboard shortcuts are available offline and are sorted by various categories. We also added some helpful descriptions to each shortcut explaining it.
</Div5>
<Div6>How to Install :</Div6>
<Div7>Install...
Run Blender, access it's preferences Edit -> Preferences and switch to Add-ons tab. Then use Install... button and search for scs_blender_tools_addon.zip you downloaded in step one. </Div7>
</div>
  );
}

export default Download;
