import Upload from "./Component/Upload";
import { Box, Stack } from "@mui/system";
import Feed from "./Component/Feed";
import Header from "./Component/Header";
import Rightbar from "./Component/Rightbar";
import Sidebar from "./Component/Sidebar";
import { createTheme } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import React from 'react';



function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Header />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Upload />
      </Box>
    </ThemeProvider>
  );
}

export default App;
