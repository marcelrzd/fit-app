"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";
import axios from "axios";

export default function WeatherCard() {
  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=Uberlandia&aqi=no`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="md:w-[100%] lg:w-[50%] p-6">
        <div className="text-black bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="p-3 text-black rounded-t font-unilever-bold bg-bd-primary">
            <span className="text-xl ">jose</span>
          </div>
        </div>
      </div>
    </>
  );
}
