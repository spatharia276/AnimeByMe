import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  flex-wrap: wrap;
`;

const Home = ({type, video}) => {
  const [videos, setVideos] = useState([]);


  
  const [channel, setChannel] = useState({});
  const { currentUser } = useSelector((state) => state.user);



  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video}/>
      ))}
    </Container>
  );
};  

export default Home;