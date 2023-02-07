import React, { useEffect, useState } from "react";
import "./video.css";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Comment from "../components/Comment.jsx"
import { FaShare } from "react-icons/fa";
import { MdTask } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { dislike, fetchSuccess, like } from "../redux/videoSlice";
import { format } from "timeago.js";
import { subscription } from "../redux/userSlice";
import Recommendation from "../components/Recommendation";

const Container = styled.div`
  display: flex;
  gap: 24px;
  
`;

const Content = styled.div`
  flex: 5;
  width:0px;
`;
const VideoWrapper = styled.div`
min-width:400px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: rgb(222,160,7);
  font-weight: 500;
  font-size:17px;
  color: white;
  border: none;
  border-radius: 50px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Span = styled.span`
color:${({ theme }) => theme.text};
`;

const Input = styled.input`
color: ${({ theme }) => theme.text};
font-size: 18px;
`;

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo, loading } = useSelector((state) => state.video);
  const dispatch = useDispatch();

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
  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  // const handleSub = async () => {
  //   currentUser?.subscribedUsers.includes(channel._id)
  //     ? await axios.put(`/users/unsub/${channel._id}`)
  //     : await axios.put(`/users/sub/${channel._id}`);
  //   dispatch(subscription(channel._id));
  // };

  const handleSub = async() => {
    currentUser.subscribedUser.includes(channel._id)
     ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
      dispatch(subscription(channel._id));
  };

  const changeText = (text) => setButtonText(text);


  const handleComment = async () => {
    await axios.post(`/comments`, {
      desc: commentDesc,
      videoId: currentVideo._id
    });
}

  //TODO: DELETE VIDEO FUNCTIONALITY
console.log(channel);
  return (
    <Container>
      <Content> 
        <VideoWrapper>
          <VideoFrame src={currentVideo?.videoUrl} controls />
        </VideoWrapper>
        <Title>{currentVideo && currentVideo.title}</Title>
        <Details>
          <Info>
            {currentVideo && currentVideo.views + 1} views •{" "} {format(currentVideo?.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={handleLike}>
              {currentVideo?.likes?.includes(currentUser?._id) ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpOutlinedIcon />
              )}{" "}
              {currentVideo?.likes?.length}
            </Button>
            <Button onClick={handleDislike}>
              {currentVideo?.dislikes?.includes(currentUser?._id) ? (
                <ThumbDownIcon />
              ) : (
                <ThumbDownOffAltOutlinedIcon />
              )}{" "}
              {currentVideo?.dislikes?.length}
            </Button>
            <Button>
              <FaShare size={23} /> Share
            </Button>
            <Button>
              <MdTask size={24} /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={channel?.img} />
            <ChannelDetail>
              <ChannelName>{channel?.name}</ChannelName>
              <ChannelCounter>{channel?.subscribers} subscribers</ChannelCounter>
              <Description>{currentVideo?.desc}</Description>
            </ChannelDetail>
          </ChannelInfo>

          <Subscribe >
            <Button onClick={() => changeText("SUBSCRIBED")}>{buttonText}</Button>
          </Subscribe>
          <Subscribe onClick={handleSub}>
          {currentUser.subscribedUsers?.includes(channel?._id)
            ? "SUBSCRIBED"
            : "SUBSCRIBE"}
        </Subscribe>


        </Channel>
        <br/>
        <br/>
        <Recommendation tags={currentVideo?.tags} />
        <Hr />
        <div className="commentsHeader">
               <div className="commentsLength">
               
                 <Span>{currentCommentsLength} Comments </Span>
               </div>

               
            </div>

            <div className="addComment">
              <div className="addCommentLeft">
                <img className="addCommentPerson" src={channel?.profile_image} alt="" />
              </div>

              <div className="addCommentRight">
                <Input className="addCommentInput" placeholder="Add a comment." onSubmit={(event)=> {event.preventDefault()}} onChange={(event)=> {
                  const commentDesc = event.target.value;
                  setCommentDesc(commentDesc);
                }}>
                </Input>
                <hr className="addCommentHr" />
                <span className="addCommentButton" onClick={handleComment}>Add Comment</span>
              </div>
            </div>
            {videoComments.map(comment=> (
               <Comment key={comment._id} comment={comment}></Comment>
            ))}
        
      </Content>
      
    </Container>
  );
};

export default Video;