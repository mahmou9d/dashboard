import { Email, PersonAdd, PointOfSale, Traffic } from '@mui/icons-material';
import { Box, Paper, Stack, Typography } from '@mui/material'
import { ResponsivePie } from '@nivo/pie';
import React from 'react'







const data1 = [
  {
    id: "ruby",
    label: "ruby",
    value: 300,
    color: "hsl(181, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 700,
    color: "hsl(209, 70%, 50%)",
  }
];
const data2 = [
  {
    id: "ruby",
    label: "ruby",
    value: 700,
    color: "hsl(122, 70.20%, 50.00%)",
  },
  {
    id: "php",
    label: "php",
    value: 300,
    color: "hsl(0, 70.20%, 50.00%)",
  },
];
const data3 = [
  {
    id: "ruby",
    label: "ruby",
    value: 200,
    color: "hsl(244, 70.20%, 50.00%)",
  },
  {
    id: "php",
    label: "php",
    value: 900,
    color: "hsl(0, 0.00%, 100.00%)",
  },
];
const data4 = [
  {
    id: "ruby",
    label: "ruby",
    value: 50,
    color: "hsl(181, 100.00%, 50.00%)",
  },
  {
    id: "php",
    label: "php",
    value: 950,
    color: "hsl(283, 100.00%, 50.00%)",
  },
];
function Row1() {
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={"10px"}
      justifyContent={{ xs: "center", sm: "space-between" }}
      marginTop={"15px"}
    >
      <Paper
        sx={{
          display: "flex",
          minWidth: "333px",
          justifyContent: "space-between",
          padding: "15px",
          flexGrow:1
        }}
      >
        <Box>
          <Email sx={{ color: "#de4bf7" }} />
          <Typography>12,361</Typography>
          <Typography>Email Sent</Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <Box sx={{ height: "100px", width: "100px" }}>
            <ResponsivePie /* or Pie for fixed dimensions */
              colors={{ scheme: "category10" }}
              data={data1}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.6}
              cornerRadius={2}
              enableArcLinkLabels={false}
              enableArcLabels={false}
              activeOuterRadiusOffset={8}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
            />
          </Box>
          <Typography>+14%</Typography>
        </Box>
      </Paper>

      <Paper
        sx={{
          display: "flex",
          minWidth: "333px",
          justifyContent: "space-between",
          padding: "15px",
          flexGrow:1
        }}
      >
        <Box>
          <PointOfSale sx={{ color: "#de4bf7" }} />
          <Typography>431,225</Typography>
          <Typography>Sales Obtained</Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <Box sx={{ height: "100px", width: "100px" }}>
            <ResponsivePie /* or Pie for fixed dimensions */
              colors={{ scheme: "accent" }}
              data={data2}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.6}
              cornerRadius={2}
              enableArcLinkLabels={false}
              enableArcLabels={false}
              activeOuterRadiusOffset={8}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
            />
          </Box>
          <Typography>+21%</Typography>
        </Box>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          minWidth: "333px",
          justifyContent: "space-between",
          padding: "15px",
          flexGrow:1
        }}
      >
        <Box>
          <PersonAdd sx={{ color: "#de4bf7" }} />
          <Typography>32,441</Typography>
          <Typography>New Clients</Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <Box sx={{ height: "100px", width: "100px" }}>
            <ResponsivePie /* or Pie for fixed dimensions */
              colors={{ scheme: "dark2" }}
              data={data3}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.6}
              cornerRadius={2}
              enableArcLinkLabels={false}
              enableArcLabels={false}
              activeOuterRadiusOffset={8}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
            />
          </Box>
          <Typography>+5%</Typography>
        </Box>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          minWidth: "333px",
          justifyContent: "space-between",
          padding: "15px",
          flexGrow:1
        }}
      >
        <Box>
          <Traffic sx={{ color: "#de4bf7" }} />
          <Typography>1,325,123</Typography>
          <Typography>Traffic</Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <Box sx={{ height: "100px", width: "100px" }}>
            <ResponsivePie /* or Pie for fixed dimensions */
              data={data4}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.6}
              cornerRadius={2}
              enableArcLinkLabels={false}
              enableArcLabels={false}
              activeOuterRadiusOffset={8}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
            />
          </Box>
          <Typography>+43%</Typography>
        </Box>
      </Paper>
    </Stack>
  );
}

export default Row1
