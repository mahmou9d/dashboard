// import { Box, Typography} from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
export const rows = [
  { id: 1, name: "Data Grid", age: 40, phone: 776456365, access: "Admin" },
  { id: 2, name: "Data Grid Pro", age: 40, phone: 776456365, access: "Admin" },
  { id: 3, name: "Data Grid Pro", age: 40, phone: 776456365, access: "Admin" },
  {
    id: 4,
    name: "Data Grid Pro",
    age: 40,
    phone: 776456365,
    access: "manager",
  },
  {
    id: 5,
    name: "Data Grid Pro",
    age: 40,
    phone: 776456365,
    access: "manager",
  },
  { id: 6, name: "Data Grid Pro", age: 40, phone: 776456365, access: "User" },
  { id: 6, name: "Data Grid Pro", age: 40, phone: 776456365, access: "User" },
  { id: 6, name: "Data Grid Pro", age: 40, phone: 776456365, access: "User" },
  { id: 6, name: "Data Grid Pro", age: 40, phone: 776456365, access: "User" },
];
export   const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
    align: "center",
    headerAlign: "center",
    width: 33,
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
    width: 33,
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
    // renderCell: ({ row: { access } }) => {
    //   return (
    //     <Box
    //       sx={{
    //         p: "5px",
    //         // width: "99px",
    //         height: "85%",
    //         mx: "20px",
    //         my: "4px",
    //         borderRadius: "3px",
    //         textAlign: "center",
    //         // backgroundColor:
    //         //   access === "Admin"
    //         //     ? theme.palette.primary.dark
    //         //     : access === "manager"
    //         //     ? theme.palette.secondary.dark
    //         //     : "#3da58a",
    //         display: "flex",
    //         justifyContent: "space-evenly",
    //         alignItems: "center",
    //       }}
    //     >
    //       {/* {access === "Admin" && (
    //         <AdminPanelSettingsOutlinedIcon
    //           sx={{ color: "#fff" }}
    //           fontSize="small"
    //         />
    //       )}
    //       {access === "manager" && (
    //         <LockOutlinedIcon sx={{ color: "#fff" }} fontSize="small" />
    //       )}
    //       {access === "User" && (
    //         <SecurityOutlinedIcon sx={{ color: "#fff" }} fontSize="small" />
    //       )}
    //       <Typography color="#fff" fontSize={18} variant="body1">
    //         {access}
    //       </Typography> */}
    //     </Box>
    //   );
    // },
  },
];