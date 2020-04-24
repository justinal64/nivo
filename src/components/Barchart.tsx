import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    country: "AD",
    "hot dog": 169,
    burger: 18,
    sandwich: 90,
    kebab: 191,
    fries: 45,
    donut: 155,
  },
  {
    country: "AE",
    "hot dog": 58,
    burger: 110,
    sandwich: 114,
    kebab: 57,
    fries: 9,
    donut: 32,
  },
  {
    country: "AF",
    "hot dog": 57,
    burger: 153,
    sandwich: 28,
    kebab: 116,
    fries: 165,
    donut: 43,
  },
  {
    country: "AG",
    "hot dog": 174,
    burger: 140,
    sandwich: 33,
    kebab: 75,
    fries: 50,
    donut: 113,
  },
];

function Barchart() {
  return (
    <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      colors={["pink", "purple", "red", "tomato", "#0000FF", "#00FF00"]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
}

export { Barchart };
