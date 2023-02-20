import { createEffect } from "solid-js";
import Highcharts from "highcharts/highstock";
import Hollowcandlestick from "highcharts/modules/hollowcandlestick";
import Data from "highcharts/modules/data";

export function Highchart3() {
  createEffect(() => {
    Highcharts.setOptions({
      chart: {
        style: {
          fontFamily: "Mark, serif",
        },
      },
    });
    Hollowcandlestick(Highcharts);
    Data(Highcharts);
    Highcharts.getJSON(
      "https://demo-live-data.highcharts.com/aapl-ohlcv.json",
      function (data) {
        Highcharts.stockChart("container-highchart-3", {
          rangeSelector: {
            selected: 1,
          },
          navigator: {
            series: {
              color: Highcharts.getOptions().colors[0],
            },
          },
          series: [
            {
              type: "hollowcandlestick",
              name: "Hollow Candlestick",
              data: data,
            },
          ],
        });
      }
    );
  });
  return (
    <div id="container-highchart-3" style="width: 500px; height: 700px;"></div>
  );
}
