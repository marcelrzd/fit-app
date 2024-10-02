import { MacrosTable } from "@/components/MacrosTable";

export default function NutricionalInfoPage() {
  return (
    <div className="p-6 flex justify-center items-center flex-col">
      <h1 className="capitalize text-xl font-semibold">
        Food nutritional info table
      </h1>
      <MacrosTable />
    </div>
  );
}
