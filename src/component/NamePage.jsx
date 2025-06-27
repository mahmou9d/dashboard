import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'

function NamePage({ title, subTitle }) {
  const theme = useTheme();
  return (
    <Box sx={{marginBottom:"10px"}}>
      <Typography
        variant="h5"
        // @ts-ignore
        sx={{ color: theme.palette.info.light, fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <Typography variant="body1">{subTitle}</Typography>
    </Box>
  );
}

export default NamePage
