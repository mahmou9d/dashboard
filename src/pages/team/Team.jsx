import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import NamePage from "../../component/NamePage";

const Team = () => {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              // width: "99px",
              height:"85%",
              mx:"20px",
              my:"4px",
              borderRadius: "3px",
              textAlign: "center",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems:"center",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlinedIcon sx={{color:"#fff"}} fontSize="small" />
            )}
            {access === "manager" && <LockOutlinedIcon sx={{color:"#fff"}} fontSize="small" />}
            {access === "User" && <SecurityOutlinedIcon sx={{color:"#fff"}} fontSize="small" />}
            <Typography color="#fff" fontSize={18} variant="body1">
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <div
      style={{
        height: 600,
        width: "100%",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        marginLeft:"auto",
        marginRight:"auto",
        // flexDirection:"column",
        // flexGrow:1
      }}
    >
      <NamePage  title={"TEAM"} subTitle={"Managing the Team Member"}/>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        
      />
    </div>
  );
};

export default Team;
