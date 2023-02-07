import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {format} from "timeago.js";
import styled from "styled-components";

const Card = ({video, type}) => {
  const [channel, setChannel] = useState({});
  const navigate = useNavigate();

  useEffect(()=> {
      const fetchChannel = async () => {
         const res = await axios.get(`/users/find/${video.userId}`)
         setChannel(res.data);
      }
      fetchChannel();
  }, [video.userId]);

  const addViewVideo = async () => {
       await axios.put(`/videos/view/${video._id}`);
  };

  const navigateToVideo = async () => {
        navigate(`/video/${video._id}`);
  };

  const clickEvents = async () => {
    addViewVideo();
    navigateToVideo();
  };

  const Container = styled.div`
  min-width: 245px;
  max-width: 245px;
  margin-bottom: 30px;
  margin-left:13px;
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  `;

  const Image = styled.img`
  width: 100%;
  height: 150px;
  border-radius:10px;
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

  return (
    <Container onClick={clickEvents} >
    <Image src={video.imgUrl} />


    <Details type={type}>
    <ChannelImage type={type} src={channel?.img}/>
    <Texts>
      <Title>{video.title}</Title>
      <ChannelName>{channel?.name}</ChannelName>
      <Info>{video.views} views • {format(video.createdAt)}</Info>
    </Texts>
  </Details>
    </Container>
  )
};

export default Card;