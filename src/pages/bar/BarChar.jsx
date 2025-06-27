import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";






const data = [
  {
    year: 2019,
    Spain: 900,
    france: 1400,
    germany: 1700,
  },
  {
    year: 2020,
    Spain: 900,
    france: 1400,
    germany: 1600,
  },
  {
    year: 2021,
    Spain: 900,
    france: 1400,
    germany: 1800,
  },
  {
    year: 2022,
    Spain: 900,
    france: 1400,
    germany: 1900,
  },
];
  
function BarChar({isbar=false}) {
      const theme = useTheme()
    
      return (
        <Box sx={{height:isbar?"45vh":"75vh"}}>
            
          <ResponsiveBar /* or Bar for fixed dimensions */
            data={data}
            keys={["Spain", "france", "germany"]}
            indexBy="year"
            labelSkipWidth={12}
            labelSkipHeight={12}
            colors={{ scheme: "paired" }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                translateX: 120,
                itemsSpacing: 3,
                itemWidth: 100,
                itemHeight: 16,
              },
            ]}
            theme={{
              // "background": "#ffffff",
              "text": {
                  "fontSize": 11,
                  "fill": "#333333",
                  "outlineWidth": 0,
                  "outlineColor": "#ffffff"
              },
              "axis": {
                  "domain": {
                      "line": {
                          "stroke": "#777777",
                          "strokeWidth": 1
                      }
                  },
                  "legend": {
                      "text": {
                          "fontSize": 12,
                          "fill": theme.palette.text.primary,
                          "outlineWidth": 0,
                          "outlineColor": "#ffffff"
                      }
                  },
                  "ticks": {
                      "line": {
                          "stroke": "#777777",
                          "strokeWidth": 1
                      },
                      "text": {
                          "fontSize": 11,
                          "fill": theme.palette.text.secondary,
                          "outlineWidth": 0,
                          "outlineColor": "#ffffff"
                      }
                  }
              },
              "grid": {
                  "line": {
                      "stroke": "#dddddd",
                      "strokeWidth": 1
                  }
              },
              "legends": {
                  "title": {
                      "text": {
                          "fontSize": 11,
                          "fill": "#333333",
                          "outlineWidth": 0,
                          "outlineColor": "#ffffff"
                      }
                  },
                  "text": {
                      "fontSize": 11,
                      "fill": theme.palette.text.primary,
                      "outlineWidth": 0,
                      "outlineColor": "#ffffff"
                  },
                  "ticks": {
                      "line": {},
                      "text": {
                          "fontSize": 10,
                          "fill": "#333333",
                          "outlineWidth": 0,
                          "outlineColor": "#ffffff"
                      }
                  }
              },
              "annotations": {
                  "text": {
                      "fontSize": 13,
                      "fill": "#333333",
                      "outlineWidth": 2,
                      "outlineColor": "#ffffff",
                      "outlineOpacity": 1
                  },
                  "link": {
                      "stroke": "#000000",
                      "strokeWidth": 1,
                      "outlineWidth": 2,
                      "outlineColor": "#ffffff",
                      "outlineOpacity": 1
                  },
                  "outline": {
                      "stroke": "#000000",
                      "strokeWidth": 2,
                      "outlineWidth": 2,
                      "outlineColor": "#ffffff",
                      "outlineOpacity": 1
                  },
                  "symbol": {
                      "fill": "#000000",
                      "outlineWidth": 2,
                      "outlineColor": "#ffffff",
                      "outlineOpacity": 1
                  }
              },
              "tooltip": {
                  // @ts-ignore
                  "wrapper": {},
                  "container": {
                      "background": "#ffffff",
                      "color": "#333333",
                      "fontSize": 12
                  },
                  "basic": {},
                  "chip": {},
                  "table": {},
                  "tableCell": {},
                  "tableCellValue": {}
              }
          }
          
          }
            axisBottom={{ legend:isbar?null: "year", legendOffset: 35 }}
            axisLeft={{ legend:isbar?null: "salary/month", legendOffset: -50 }}
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          />
        </Box>
      );
}

export default BarChar;
