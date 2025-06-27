import { Box, Paper, Typography, useTheme } from '@mui/material'
import Pie from '../../pages/pie/Pie'
import React from 'react'
import BarChar from '../../pages/bar/BarChar'
import Geograghy from '../../pages/geograghy/Geograghy';

function Row3() {
      const theme = useTheme();
    
  return (
    <Box
      sx={{
        mt: "20px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { md: "space-between", xs: "center" },
        flexWrap: "wrap",
        gap: "5px",
      }}
    >
      <Paper
        sx={{
          minWidth: "300",
          width: { md: "33%" },
          flexGrow: "1",
          display: "flex",
          flexDirection: "column",
          height: { xs: "54vh", md: "45vh" },
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          fontWeight={"bold"}
          sx={{ padding: "30px 30px 0 30px" ,marginBottom:"15px"}}
          variant="h6"
        >
          Campaign
        </Typography>
        <Pie ispie={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue Generated
        </Typography>
        <Typography variant="body2" align="center" px={0.7} pb={3}>
          Include extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper
        sx={{
          minWidth: "300",
          width: { md: "33%" },
          flexGrow: "1",
          display: "flex",
          flexDirection: "column",
          height: { xs: "54vh", md: "45vh" },
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          fontWeight={"bold"}
          sx={{ padding: "30px 30px 0 30px" ,marginBottom:"15px"}}
          variant="h6"
        >
          Sales Quantity
        </Typography>
        <BarChar isbar={true} />
      </Paper>
      <Paper
        sx={{
          minWidth: "300",
          width: { md: "33%" },
          flexGrow: "1",
          display: "flex",
          flexDirection: "column",
          height: { xs: "54vh", md: "45vh" },
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          fontWeight={"bold"}
          sx={{ padding: "30px 30px 0 30px" ,marginBottom:"15px"}}
          variant="h6"
        >
          geograghy Based Traffic
        </Typography>
        <Geograghy isgeo={true} />
      </Paper>
    </Box>
  );
}

export default Row3
