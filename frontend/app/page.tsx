import WeatherCard from "@/components/WeatherCard";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col gap-8">
      <div className="pt-8">
        <h1 className="text-4xl text-center">Good Evening Marcel!</h1>
      </div>
      <div className="container flex flex-row flex-wrap items-center justify-center w-full">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
  );
}
