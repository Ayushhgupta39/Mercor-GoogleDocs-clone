import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";


function App() {
  return (
    <div className="App">
      <Header />
      <Box height={"100vh"} display={"grid"} gridTemplateColumns={"95% 5%"}>
        <Box>
          <Toolbar />
        </Box>
        <Box bgColor={"green.900"}>Right</Box>
      </Box>
    </div>
  );
}

export default App;
