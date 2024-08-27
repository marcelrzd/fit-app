"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import RainIcon from "@/img/266.webp";
import Nightbg from "@/img/night-bg.jpg";
import Daybg from "@/img/day-bg.jpg";

import { formatDateTime, formatIconUrl } from "@/utils/utils";

export default function WeatherCard() {
  const [weather, setWeather] = useState({
    current: { last_updated: "" },
    location: { name: "", region: "", country: "", localtime: "" },
    forecast: {
      forecastday: [
        {
          day: {
            maxtemp_c: 0,
            mintemp_c: 0,
          },

          hour: [
            {
              chance_of_rain: 0,
              temp_c: 0,
              condition: { text: "", icon: "" },
              humidity: 0,
            },
          ],
        },
      ],
    },
  });
  const [status, setStatus] = useState(0);

  const getBackgroundStyle = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 18) {
      // Daytime (6 AM to 6 PM)
      return {
        backgroundColor: "#87CEEB", // Light Blue Sky color
        backgroundImage: `url(${Daybg.src})`,
        border: "1px solid #87CEEB",
        color: "#000", // Black text
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    } else {
      // Nighttime (6 PM to 6 AM)
      return {
        backgroundColor: "#1a1a2e", // Dark Starry Sky color
        backgroundImage: `url(${Nightbg.src})`,
        color: "#fff", // White text color
        border: "1px solid #1a1a2e",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${
          process.env.NEXT_PUBLIC_WEATHER_API_KEY
        }&q=Uberlandia&aqi=no&hour=${new Date().getHours()}`
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
        setStatus(response.status);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {status !== 200 && <p>Loading...</p>}
      <div className="w-[100%] lg:w-[50%] p-6 ">
        <div
          style={getBackgroundStyle()}
          className="border border-[#87CEEB] rounded-lg shadow-lg w-full"
        >
          <div className="py-3 px-6  flex justify-between">
            <div className="flex flex-col">
              <h1 className="text-2xl">{weather.location.name}</h1>
              <h1 className="text-sm">
                {formatDateTime(weather.location.localtime)}
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="">
                <span className="font-semibold">Min:</span>{" "}
                {weather.forecast.forecastday[0].day.mintemp_c}°C /{" "}
                <span className="font-semibold">Max:</span>{" "}
                {weather.forecast.forecastday[0].day.maxtemp_c}°C
              </h1>
              <h1 className="text-right">
                <span className="font-semibold">Humidity:</span>{" "}
                {weather.forecast.forecastday[0].hour[0].humidity}%
              </h1>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between px-6">
            <div className="flex flex-row gap-2 items-center">
              <Image
                alt="Weather condition icon image"
                src={formatIconUrl(
                  weather.forecast.forecastday[0].hour[0].condition.icon
                )}
                width={80}
                height={80}
              />
              <h1 className="text-4xl font-semibold">
                {" "}
                {weather.forecast.forecastday[0].hour[0].temp_c}°C
              </h1>
            </div>
            <div className="flex flex-row gap-2 items-center py-3">
              <Image
                alt="Weather condition icon image"
                src={RainIcon}
                width={80}
                height={80}
              />
              <div className="flex flex-col">
                <h1 className="text-4xl font-semibold">
                  {weather.forecast.forecastday[0].hour[0].chance_of_rain}%
                </h1>
                <h1 className="text-xs">precipitation</h1>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-end w-full px-6 py-3">
            <h1 className="text-sm">
              Last updated: {formatTime(weather.current.last_updated)}
              
            </h1>
          </div> */}
        </div>
      </div>
    </>
  );
}
