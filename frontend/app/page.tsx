import WeatherCard from "@/components/ui/WeatherCard";

export default function Home() {
  return (
    <div className="h-full w-full ">
      <div>
        <h1 className="text-4xl text-center">Good Evening Marcel!</h1>
      </div>
      <div className="container flex flex-row flex-wrap items-center justify-center w-full">
        <WeatherCard />
      </div>
    </div>
  );
}
