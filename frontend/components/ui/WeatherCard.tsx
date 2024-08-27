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

export default function WeatherCard() {
  const [weather, setWeather] = useState({
    current: { last_updated: "" },
    location: { name: "", region: "", country: "" },
    forecast: {
      forecastday: [
        {
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

  const formatTime = (time: string) => {
    return new Date(time).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
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
      <div className="w-[100%] lg:w-[50%] p-6">
        <div className="text-black bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="p-3 text-black rounded-t font-unilever-bold bg-bd-primary">
            <h1 className="text-2xl text-left">{weather.location.name}</h1>
            <h1 className="text-md text-left">
              Last updated: {formatTime(weather.current.last_updated)}
              {/* {weather.forecast.forecastday[0].hour[0].chance_of_rain}% */}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
