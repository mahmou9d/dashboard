import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import NamePage from "../../component/NamePage";





const data = [
  {
    id: "japan",
    data: [
      {
        x: "plane",
        y: 219,
      },
      {
        x: "helicopter",
        y: 83,
      },
      {
        x: "boat",
        y: 276,
      },
      {
        x: "train",
        y: 278,
      },
      {
        x: "subway",
        y: 191,
      },
      {
        x: "bus",
        y: 71,
      },
      {
        x: "car",
        y: 33,
      },
      {
        x: "moto",
        y: 27,
      },
      {
        x: "bicycle",
        y: 1,
      },
      {
        x: "horse",
        y: 187,
      },
      {
        x: "skateboard",
        y: 166,
      },
      {
        x: "others",
        y: 60,
      },
    ],
  },
  {
    id: "france",
    data: [
      {
        x: "plane",
        y: 230,
      },
      {
        x: "helicopter",
        y: 101,
      },
      {
        x: "boat",
        y: 240,
      },
      {
        x: "train",
        y: 76,
      },
      {
        x: "subway",
        y: 221,
      },
      {
        x: "bus",
        y: 28,
      },
      {
        x: "car",
        y: 67,
      },
      {
        x: "moto",
        y: 208,
      },
      {
        x: "bicycle",
        y: 18,
      },
      {
        x: "horse",
        y: 71,
      },
      {
        x: "skateboard",
        y: 115,
      },
      {
        x: "others",
        y: 170,
      },
    ],
  },
  {
    id: "us",
    data: [
      {
        x: "plane",
        y: 35,
      },
      {
        x: "helicopter",
        y: 228,
      },
      {
        x: "boat",
        y: 254,
      },
      {
        x: "train",
        y: 52,
      },
      {
        x: "subway",
        y: 265,
      },
      {
        x: "bus",
        y: 200,
      },
      {
        x: "car",
        y: 179,
      },
      {
        x: "moto",
        y: 132,
      },
      {
        x: "bicycle",
        y: 65,
      },
      {
        x: "horse",
        y: 96,
      },
      {
        x: "skateboard",
        y: 234,
      },
      {
        x: "others",
        y: 67,
      },
    ],
  },
  {
    id: "germany",
    data: [
      {
        x: "plane",
        y: 288,
      },
      {
        x: "helicopter",
        y: 67,
      },
      {
        x: "boat",
        y: 189,
      },
      {
        x: "train",
        y: 91,
      },
      {
        x: "subway",
        y: 105,
      },
      {
        x: "bus",
        y: 42,
      },
      {
        x: "car",
        y: 149,
      },
      {
        x: "moto",
        y: 262,
      },
      {
        x: "bicycle",
        y: 36,
      },
      {
        x: "horse",
        y: 57,
      },
      {
        x: "skateboard",
        y: 128,
      },
      {
        x: "others",
        y: 16,
      },
    ],
  },
  {
    id: "norway",
    data: [
      {
        x: "plane",
        y: 56,
      },
      {
        x: "helicopter",
        y: 123,
      },
      {
        x: "boat",
        y: 243,
      },
      {
        x: "train",
        y: 55,
      },
      {
        x: "subway",
        y: 171,
      },
      {
        x: "bus",
        y: 38,
      },
      {
        x: "car",
        y: 261,
      },
      {
        x: "moto",
        y: 60,
      },
      {
        x: "bicycle",
        y: 115,
      },
      {
        x: "horse",
        y: 190,
      },
      {
        x: "skateboard",
        y: 286,
      },
      {
        x: "others",
        y: 68,
      },
    ],
  },
];



function Line({isheight = false}) {
  const theme = useTheme();

  return (
    <Box sx={{ height:isheight?"280px": "75vh" }}>
      {!isheight&& <NamePage title={"Line"} subTitle={undefined}/>}
      <ResponsiveLine /* or Line for fixed dimensions */
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        curve="cardinal"
        axisBottom={{ legend:isheight?null: "transportation", legendOffset: 36 }}
        axisLeft={{ legend:isheight?null: "Count", legendOffset: -45 }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={3}
        pointBorderColor={{ from: "seriesColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: "circle",
          },
        ]}
        theme={{
          // "background": "#ffffff",
          text: {
            fontSize: 11,
            fill: "#333333",
            outlineWidth: 0,
            outlineColor: "#ffffff",
          },
          axis: {
            domain: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
            ticks: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
          },
          grid: {
            line: {
              stroke: "#dddddd",
              strokeWidth: 0.1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "#ffffff",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: "#333333",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            // @ts-ignore
            wrapper: {},
            container: {
              background: "#ffffff",
              color: "#333333",
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
      />
    </Box>
  );
}

export default Line
