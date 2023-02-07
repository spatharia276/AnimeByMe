import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { dislike, fetchSuccess, like } from "../redux/videoSlice";
import { format } from "timeago.js";
import { subscription } from "../redux/userSlice";
import SortIcon from '@mui/icons-material/Sort';
import Recommendation from "../components/Recommendation";
const Container = styled.div`
  display: flex;
  flex-direction:column;
  gap: 24px;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction:column;
  height:auto;
  width: 1000px;
`;

const Div2 = styled.div`
font-size:28px;
  color:white;
  font-weight:bold;
  color: ${({ theme }) => theme.text};
`;

const Liked = ({video}) => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  console.log("video.likes", video?.likes);
  const path = useLocation().pathname.split("/")[2];

  const [videoComments, setVideoComments] = useState([]);
  const [currentCommentsLength, setcurrentCommentsLength] = useState([]);

  const [commentDesc, setCommentDesc] = useState("");
  const [buttonText, setButtonText] = useState("SUBSCRIBE");


  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);

        const commentRes = await axios.get(`/comments/${path}`)
        setVideoComments(commentRes.data);
        setcurrentCommentsLength(commentRes.data.length);

        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {}
    };
    fetchData();
  }, [path, dispatch]);

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };
  return (
    <Container>
    <Div2> Liked Video</Div2>


    <Div1>
        <Recommendation tags={currentVideo.tags} />
    </Div1>   
    </Container>
  );
};

export default Liked;