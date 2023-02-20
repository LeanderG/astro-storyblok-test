export function setTheme(Highcharts) {
  Highcharts.theme = {
    colors: [
      "#ffe100",
      "#50B432",
      "#ED561B",
      "#DDDF00",
      "#24CBE5",
      "#64E572",
      "#FF9655",
      "#FFF263",
      "#6AF9C4",
    ],
    chart: {
      //   backgroundColor: {
      //     linearGradient: [0, 0, 500, 500],
      //     stops: [
      //       [0, "rgb(255, 255, 255)"],
      //       [1, "rgb(240, 240, 255)"],
      //     ],
      //   },
    },
    title: {
      style: {
        color: "#000",
      },
    },
    subtitle: {
      style: {
        color: "#666666",
      },
    },
    legend: {
      itemStyle: {
        color: "black",
      },
      itemHoverStyle: {
        color: "gray",
      },
    },
  };
  // Apply the theme
  Highcharts.setOptions(Highcharts.theme);
}
