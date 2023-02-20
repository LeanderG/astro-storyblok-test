import { createEffect } from "solid-js";
import Highcharts from "highcharts/highstock";
import { setTheme } from "./theme";

export function Highchart2() {
  createEffect(() => {
    setTheme(Highcharts);

    Highcharts.getJSON(
      "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/large-dataset.json",
      function (data) {
        // Create a timer
        var start = +new Date();

        // Create the chart
        Highcharts.stockChart("container-highchart-2", {
          chart: {
            zoomType: "x",
          },

          rangeSelector: {
            buttons: [
              {
                type: "day",
                count: 3,
                text: "3d",
              },
              {
                type: "week",
                count: 1,
                text: "1w",
              },
              {
                type: "month",
                count: 1,
                text: "1m",
              },
              {
                type: "month",
                count: 6,
                text: "6m",
              },
              {
                type: "year",
                count: 1,
                text: "1y",
              },
              {
                type: "all",
                text: "All",
              },
            ],
            selected: 3,
          },

          yAxis: {
            title: {
              text: "Temperature (°C)",
            },
          },

          title: {
            text: "Hourly temperatures in Vik i Sogn, Norway, 2009-2017",
            align: "left",
          },

          series: [
            {
              name: "Temperature",
              data: data.data,
              pointStart: data.pointStart,
              pointInterval: data.pointInterval,
              tooltip: {
                valueDecimals: 1,
                valueSuffix: "°C",
              },
            },
          ],
        });
      }
    );
  });
  return (
    <div>
      <div id="container-highchart-2"></div>
    </div>
  );
}
