import Navbar from "./Components/Navbar";
import PersonalData from "./Components/PersonalData";
import GeneralData from "./Components/GeneralData";
import { Stack } from "@mui/material"
import { Box } from "@mui/system";
import RenewBtn from "./Components/RenewBtn";

function App() {
  return (
    <>
      <Box bgcolor='lavender' maxWidth='100vw'>
        <Navbar />
        <Stack direction='row' spacing={2} sx={{ display: { xs: 'none', sm: 'flex' } }} >
          <PersonalData />
          <GeneralData />
        </Stack>
        <Stack direction='column' spacing={2} sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <PersonalData />
          <GeneralData />
        </Stack>
        <RenewBtn/>
      </Box>
    </>
  );
}

export default App;
