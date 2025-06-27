import { rows, columns } from "./data";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import NamePage from "../../component/NamePage";





function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <Typography fontWeight="medium" sx={{ flex: 1, mx: 0.5 }}>
        {/* text */}
      </Typography>
      <GridToolbarColumnsButton placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
      <GridToolbarFilterButton placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
      <GridToolbarDensitySelector
        // @ts-ignore
        slotProps={{ tooltip: { title: "Change density" } }}
      />
      <GridToolbarExport
        slotProps={{
          tooltip: { title: "Export data" },
          button: { material: { variant: "outlined" } },
        }}
      />
    </GridToolbarContainer>
  );
}
const Contacts = () => {
  return (
    <div
      style={{
        height: 600,
        width: "100%",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <NamePage title={"CONTACRS"} subTitle={"List Contacts for future reference"}/>
      <DataGrid
        components={{ Toolbar: CustomToolbar }}
        showToolbar
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </div>
  );
};

export default Contacts;
