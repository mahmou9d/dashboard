import { Box, useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geo } from "./world_countries";
import NamePage from "../../component/NamePage";


const data = [
  {
    id: "AFG",
    value: 710478,
  },
  {
    id: "AGO",
    value: 947456,
  },
  {
    id: "ALB",
    value: 128618,
  },
  {
    id: "ARE",
    value: 644029,
  },
  {
    id: "ARG",
    value: 156210,
  },
  {
    id: "ARM",
    value: 442604,
  },
  {
    id: "ATA",
    value: 391053,
  },
  {
    id: "ATF",
    value: 976340,
  },
  {
    id: "AUT",
    value: 444859,
  },
  {
    id: "AZE",
    value: 781706,
  },
  {
    id: "BDI",
    value: 873508,
  },
  {
    id: "BEL",
    value: 101658,
  },
  {
    id: "BEN",
    value: 849098,
  },
  {
    id: "BFA",
    value: 23975,
  },
  {
    id: "BGD",
    value: 26245,
  },
  {
    id: "BGR",
    value: 432657,
  },
  {
    id: "BHS",
    value: 819167,
  },
  {
    id: "BIH",
    value: 733983,
  },
  {
    id: "BLR",
    value: 989775,
  },
  {
    id: "BLZ",
    value: 494818,
  },
  {
    id: "BOL",
    value: 15773,
  },
  {
    id: "BRN",
    value: 596651,
  },
  {
    id: "BTN",
    value: 590954,
  },
  {
    id: "BWA",
    value: 636255,
  },
  {
    id: "CAF",
    value: 977592,
  },
  {
    id: "CAN",
    value: 161929,
  },
  {
    id: "CHE",
    value: 58458,
  },
  {
    id: "CHL",
    value: 998894,
  },
  {
    id: "CHN",
    value: 874125,
  },
  {
    id: "CIV",
    value: 419866,
  },
  {
    id: "CMR",
    value: 211436,
  },
  {
    id: "COG",
    value: 324110,
  },
  {
    id: "COL",
    value: 356820,
  },
  {
    id: "CRI",
    value: 197859,
  },
  {
    id: "CUB",
    value: 641373,
  },
  {
    id: "-99",
    value: 723740,
  },
  {
    id: "CYP",
    value: 272324,
  },
  {
    id: "CZE",
    value: 385893,
  },
  {
    id: "DEU",
    value: 906618,
  },
  {
    id: "DJI",
    value: 639985,
  },
  {
    id: "DNK",
    value: 881117,
  },
  {
    id: "DOM",
    value: 833836,
  },
  {
    id: "DZA",
    value: 317530,
  },
  {
    id: "ECU",
    value: 291687,
  },
  {
    id: "EGY",
    value: 769104,
  },
  {
    id: "ERI",
    value: 171539,
  },
  {
    id: "ESP",
    value: 196312,
  },
  {
    id: "EST",
    value: 532483,
  },
  {
    id: "ETH",
    value: 898219,
  },
  {
    id: "FIN",
    value: 635878,
  },
  {
    id: "FJI",
    value: 270315,
  },
  {
    id: "FLK",
    value: 62174,
  },
  {
    id: "FRA",
    value: 587467,
  },
  {
    id: "GAB",
    value: 904052,
  },
  {
    id: "GBR",
    value: 297641,
  },
  {
    id: "GEO",
    value: 496514,
  },
  {
    id: "GHA",
    value: 404032,
  },
  {
    id: "GIN",
    value: 696275,
  },
  {
    id: "GMB",
    value: 558093,
  },
  {
    id: "GNB",
    value: 337127,
  },
  {
    id: "GNQ",
    value: 916438,
  },
  {
    id: "GRC",
    value: 782548,
  },
  {
    id: "GTM",
    value: 763065,
  },
  {
    id: "GUY",
    value: 363442,
  },
  {
    id: "HND",
    value: 791741,
  },
  {
    id: "HRV",
    value: 329363,
  },
  {
    id: "HTI",
    value: 519200,
  },
  {
    id: "HUN",
    value: 193791,
  },
  {
    id: "IDN",
    value: 824209,
  },
  {
    id: "IND",
    value: 140131,
  },
  {
    id: "IRL",
    value: 478069,
  },
  {
    id: "IRN",
    value: 609332,
  },
  {
    id: "IRQ",
    value: 425885,
  },
  {
    id: "ISL",
    value: 268313,
  },
  {
    id: "ISR",
    value: 767133,
  },
  {
    id: "ITA",
    value: 99870,
  },
  {
    id: "JAM",
    value: 293653,
  },
  {
    id: "JOR",
    value: 742374,
  },
  {
    id: "JPN",
    value: 342048,
  },
  {
    id: "KAZ",
    value: 764475,
  },
  {
    id: "KEN",
    value: 342995,
  },
  {
    id: "KGZ",
    value: 524859,
  },
  {
    id: "KHM",
    value: 444074,
  },
  {
    id: "OSA",
    value: 480420,
  },
  {
    id: "KWT",
    value: 872987,
  },
  {
    id: "LAO",
    value: 408574,
  },
  {
    id: "LBN",
    value: 653789,
  },
  {
    id: "LBR",
    value: 362216,
  },
  {
    id: "LBY",
    value: 959238,
  },
  {
    id: "LKA",
    value: 203709,
  },
  {
    id: "LSO",
    value: 582231,
  },
  {
    id: "LTU",
    value: 215667,
  },
  {
    id: "LUX",
    value: 792084,
  },
  {
    id: "LVA",
    value: 280292,
  },
  {
    id: "MAR",
    value: 529436,
  },
  {
    id: "MDA",
    value: 90342,
  },
  {
    id: "MDG",
    value: 840097,
  },
  {
    id: "MEX",
    value: 688565,
  },
  {
    id: "MKD",
    value: 242640,
  },
  {
    id: "MLI",
    value: 232156,
  },
  {
    id: "MMR",
    value: 951664,
  },
  {
    id: "MNE",
    value: 359303,
  },
  {
    id: "MNG",
    value: 301769,
  },
  {
    id: "MOZ",
    value: 757906,
  },
  {
    id: "MRT",
    value: 396246,
  },
  {
    id: "MWI",
    value: 787910,
  },
  {
    id: "MYS",
    value: 291672,
  },
  {
    id: "NAM",
    value: 375708,
  },
  {
    id: "NCL",
    value: 550755,
  },
  {
    id: "NER",
    value: 250019,
  },
  {
    id: "NGA",
    value: 865181,
  },
  {
    id: "NIC",
    value: 524728,
  },
  {
    id: "NLD",
    value: 240795,
  },
  {
    id: "NOR",
    value: 149567,
  },
  {
    id: "NPL",
    value: 835240,
  },
  {
    id: "NZL",
    value: 94523,
  },
  {
    id: "OMN",
    value: 799188,
  },
  {
    id: "PAK",
    value: 577283,
  },
  {
    id: "PAN",
    value: 347800,
  },
  {
    id: "PER",
    value: 218285,
  },
  {
    id: "PHL",
    value: 457299,
  },
  {
    id: "PNG",
    value: 818705,
  },
  {
    id: "POL",
    value: 883958,
  },
  {
    id: "PRI",
    value: 300209,
  },
  {
    id: "PRT",
    value: 956154,
  },
  {
    id: "PRY",
    value: 217182,
  },
  {
    id: "QAT",
    value: 723485,
  },
  {
    id: "ROU",
    value: 888303,
  },
  {
    id: "RUS",
    value: 228168,
  },
  {
    id: "RWA",
    value: 253305,
  },
  {
    id: "ESH",
    value: 373058,
  },
  {
    id: "SAU",
    value: 458691,
  },
  {
    id: "SDN",
    value: 897862,
  },
  {
    id: "SDS",
    value: 275493,
  },
  {
    id: "SEN",
    value: 467812,
  },
  {
    id: "SLB",
    value: 441791,
  },
  {
    id: "SLE",
    value: 931145,
  },
  {
    id: "SLV",
    value: 856194,
  },
  {
    id: "ABV",
    value: 370814,
  },
  {
    id: "SOM",
    value: 690456,
  },
  {
    id: "SRB",
    value: 927699,
  },
  {
    id: "SUR",
    value: 143436,
  },
  {
    id: "SVK",
    value: 358162,
  },
  {
    id: "SVN",
    value: 911742,
  },
  {
    id: "SWZ",
    value: 953846,
  },
  {
    id: "SYR",
    value: 495767,
  },
  {
    id: "TCD",
    value: 592255,
  },
  {
    id: "TGO",
    value: 56921,
  },
  {
    id: "THA",
    value: 593656,
  },
  {
    id: "TJK",
    value: 992780,
  },
  {
    id: "TKM",
    value: 95867,
  },
  {
    id: "TLS",
    value: 515523,
  },
  {
    id: "TTO",
    value: 377227,
  },
  {
    id: "TUN",
    value: 533852,
  },
  {
    id: "TUR",
    value: 214177,
  },
  {
    id: "TWN",
    value: 62401,
  },
  {
    id: "TZA",
    value: 994377,
  },
  {
    id: "UGA",
    value: 968029,
  },
  {
    id: "UKR",
    value: 334050,
  },
  {
    id: "URY",
    value: 579029,
  },
  {
    id: "USA",
    value: 176863,
  },
  {
    id: "UZB",
    value: 484927,
  },
  {
    id: "VEN",
    value: 60620,
  },
  {
    id: "VNM",
    value: 66175,
  },
  {
    id: "VUT",
    value: 668745,
  },
  {
    id: "PSE",
    value: 506535,
  },
  {
    id: "YEM",
    value: 271942,
  },
  {
    id: "ZAF",
    value: 701395,
  },
  {
    id: "ZMB",
    value: 246792,
  },
  {
    id: "ZWE",
    value: 412540,
  },
  {
    id: "KOR",
    value: 631692,
  },
];

function Geograghy({isgeo=false}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: "5px",
        height: isgeo ? "45vh" : "75vh",
        // border: isgeo ? null : `1px solid ${theme.palette.text.secondary}`,
      }}
    >
      {!isgeo && <NamePage title={"GEOGRAGHY"} subTitle={undefined} />}

      <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
        projectionScale={159}
        colors="spectral"
        data={data}
        features={geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: theme.palette.text.primary,
            itemOpacity: 0.85,
            symbolSize: 18,
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
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
          },
          grid: {
            line: {
              stroke: "#dddddd",
              strokeWidth: 1,
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

export default Geograghy
