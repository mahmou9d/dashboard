import { Box, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material'
import Line from '../../pages/line/Line';
import React from 'react'
import { Download } from '@mui/icons-material';

function Row2() {
    const theme =useTheme()
  return (
    <Stack direction={"row"} marginTop={"30px"} gap={"10px"} flexWrap={"wrap"}>
      <Paper sx={{ height:340,maxWidth: 1000, flexGrow: 1, width: "74%" }}>
        <Stack
          px={"10px"}
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              p={1.2}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>
          <IconButton>
            <Download />
          </IconButton>
        </Stack>
        <Line isheight={true} />
      </Paper>
      <Box sx={{ height: 340, width: "25%", flexGrow: 1, overflow: "auto" }}>
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
        {/* repeat */}
        <Paper
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "10px",
          }}
        >
          <Box>
            <Typography variant="body1" fontSize="600">
              uuuuuuuuuu
            </Typography>
            <Typography variant="body2">uuuuuuuuuu</Typography>
          </Box>
          <Typography variant="body1">uuuuuuuuuu</Typography>
          <Typography
            variant="body1"
            borderRadius={1.4}
            p={1}
            bgcolor={theme.palette.error.main}
            color={theme.palette.getContrastText(theme.palette.error.main)}
          >
            $55
          </Typography>
        </Paper>
        <Paper
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "10px",
          }}
        >
          <Box>
            <Typography variant="body1" fontSize="600">
              uuuuuuuuuu
            </Typography>
            <Typography variant="body2">uuuuuuuuuu</Typography>
          </Box>
          <Typography variant="body1">uuuuuuuuuu</Typography>
          <Typography
            variant="body1"
            borderRadius={1.4}
            p={1}
            bgcolor={theme.palette.error.main}
            color={theme.palette.getContrastText(theme.palette.error.main)}
          >
            $55
          </Typography>
        </Paper>
        <Paper
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "10px",
          }}
        >
          <Box>
            <Typography variant="body1" fontSize="600">
              uuuuuuuuuu
            </Typography>
            <Typography variant="body2">uuuuuuuuuu</Typography>
          </Box>
          <Typography variant="body1">uuuuuuuuuu</Typography>
          <Typography
            variant="body1"
            borderRadius={1.4}
            p={1}
            bgcolor={theme.palette.error.main}
            color={theme.palette.getContrastText(theme.palette.error.main)}
          >
            $55
          </Typography>
        </Paper>
        <Paper
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "10px",
          }}
        >
          <Box>
            <Typography variant="body1" fontSize="600">
              uuuuuuuuuu
            </Typography>
            <Typography variant="body2">uuuuuuuuuu</Typography>
          </Box>
          <Typography variant="body1">uuuuuuuuuu</Typography>
          <Typography
            variant="body1"
            borderRadius={1.4}
            p={1}
            bgcolor={theme.palette.error.main}
            color={theme.palette.getContrastText(theme.palette.error.main)}
          >
            $55
          </Typography>
        </Paper>
        <Paper
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "10px",
          }}
        >
          <Box>
            <Typography variant="body1" fontSize="600">
              uuuuuuuuuu
            </Typography>
            <Typography variant="body2">uuuuuuuuuu</Typography>
          </Box>
          <Typography variant="body1">uuuuuuuuuu</Typography>
          <Typography
            variant="body1"
            borderRadius={1.4}
            p={1}
            bgcolor={theme.palette.error.main}
            color={theme.palette.getContrastText(theme.palette.error.main)}
          >
            $55
          </Typography>
        </Paper>
      </Box>
    </Stack>
  );
}

export default Row2
