import { Button, Stack } from "@mui/material"
import Row1 from "./Row1"
import Row2 from "./Row2"
import Row3 from "./Row3"
import { Download } from "@mui/icons-material"
import NamePage from "../../component/NamePage"

const Dashboard = () => {
  return (
    <div>
      <NamePage title={"DASHBOARD"} subTitle={"Welcome to your dashboard"} />

      <Stack alignItems={"flex-end"}>
        <Button variant="contained">
          <Download />
          Download Reports
        </Button>
      </Stack>

      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

export default Dashboard
