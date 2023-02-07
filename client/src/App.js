import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import Profile from "./components/profile";
import Download from "./components/download";
import Setting from "./components/Setting";
import Help from "./components/help";
import Liked from "./components/liked";
import LibraryPage from "./components/librarypage";
import Store from "./components/Store/Store";
import Download1 from "./components/Store/Download/Download1";
import Download2 from "./components/Store/Download/Download2";
import Download3 from "./components/Store/Download/Download3";
import Download4 from "./components/Store/Download/Download4";
import Download5 from "./components/Store/Download/Download5";
const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
            <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="trends" element={<Home type="trend" />} />
                  <Route path="subscriptions" element={<Home type="sub" />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="setting" element={<Setting />} />
                  <Route path="liked" element={<Liked />} />
                  <Route path="help" element={<Help />} />
                  <Route path="librarypage" element={<LibraryPage />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="store" element={<Store />} />
                  <Route path="store/download1" element={<Download1 />} />
                  <Route path="store/download2" element={<Download2 />} />
                  <Route path="store/download3" element={<Download3 />} />
                  <Route path="store/download4" element={<Download4 />} />
                  <Route path="store/download5" element={<Download5 />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
