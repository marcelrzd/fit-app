"use client";

import { useState, useEffect, useMemo } from "react";
import data from "@/data/taco.json";
import { FoodItem } from "@/app/nutritional_info/types";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "./ui/input";

export function MacrosTable() {
  const [foodSearch, setFoodSearch] = useState("");
  const [qty, setQty] = useState("100");
  const [foodData, setFoodData] = useState("");
  const [macros, setMacros] = useState<FoodItem[]>([]);
  const [selectedFood, setSelectedFood] = useState<number | null>(null);

  // handle food search start
  const parseFatValue = (value: number | string): number => {
    const num = parseFloat(value as string);
    return isNaN(num) ? 0 : num;
  };

  useEffect(() => {
    if (foodSearch.trim() === "") {
      setMacros([]);
      setFoodData("");
      setSelectedFood(null);
      return;
    }

    const filteredData = data
      .filter((item) =>
        item.description.toLowerCase().includes(foodSearch.toLowerCase())
      )
      .map((item) => {
        const saturated = parseFatValue(item.saturated_g);
        const monounsaturated = parseFatValue(item.monounsaturated_g);
        const polyunsaturated = parseFatValue(item.polyunsaturated_g);

        const total_fat = saturated + monounsaturated + polyunsaturated;

        return {
          id: item.id,
          description: item.description,
          category: item.category,
          energy_kcal: item.energy_kcal,
          carbohydrate_g: item.carbohydrate_g,
          protein_g: item.protein_g,
          total_fat: total_fat,
          sodium_mg: item.sodium_mg,
          fiber_g: item.fiber_g,
        } as FoodItem;
      });

    setMacros(filteredData);
  }, [foodSearch]);

  const formatValue = (value: number, unit: string) => {
    return typeof value === "number" ? `${value.toFixed(1)}${unit}` : "-";
  };

  const handleFoodSelect = (food: FoodItem) => {
    setFoodData(food);
    setSelectedFood(food.id);
    setQty("100");
  };
  // handle food search end

  // handle qty change start
  const calculatedData = useMemo(() => {
    if (foodData && qty) {
      const qtyValue = parseFloat(qty);
      if (isNaN(qtyValue) || qtyValue <= 0) {
        return null;
      }
      const factor = qtyValue / 100;

      return {
        ...foodData,
        energy_kcal: foodData.energy_kcal * factor,
        carbohydrate_g: foodData.carbohydrate_g * factor,
        protein_g: foodData.protein_g * factor,
        total_fat: foodData.total_fat * factor,
        sodium_mg: foodData.sodium_mg * factor,
        fiber_g: foodData.fiber_g * factor,
      };
    }
    return null;
  }, [foodData, qty]);
  // handle qty change end

  return (
    <div className="flex flex-row items-start w-full p-4 gap-6">
      <div className="w-[30%]">
        <div className="text-left text-lg font-semibold mb-4 flex justify-between">
          <span className="p-2">Food</span>
          <Input
            className="w-[80%] bg-slate-100"
            placeholder="Type the food name"
            value={foodSearch}
            onChange={(e) => setFoodSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-col rounded-md max-h-[50vh] overflow-auto">
          {macros && macros.length > 0 ? (
            macros.map((item: FoodItem, index) => (
              <span
                key={item.id}
                onClick={() => handleFoodSelect(item)}
                className={`p-2 cursor-pointer ${
                  item.id === selectedFood
                    ? "bg-blue-200 text-blue-800 font-semibold"
                    : index % 2 === 0
                    ? "bg-slate-100"
                    : ""
                }`}
              >
                {item.description}
              </span>
            ))
          ) : (
            <span className="p-2">No food found</span>
          )}
        </div>
      </div>
      <div className="w-[60%] rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg" colSpan={3}>
                Macros of{" "}
                <span className="font-bold">
                  {foodData?.description
                    ? `"${foodData.description}"`
                    : `" - "`}
                </span>{" "}
                in {qty}g
              </TableHead>
              <TableHead className="text-lg text-right">
                <Input
                  type="number"
                  className="w-[50%] bg-slate-100 float-right"
                  placeholder="Qty in grams"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-slate-100">
              <TableCell className="font-medium" colSpan={3}>
                Calories
              </TableCell>
              <TableCell className="text-right">
                {formatValue(calculatedData?.energy_kcal, " kcal")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium" colSpan={3}>
                Carbs
              </TableCell>
              <TableCell className="text-right">
                {formatValue(calculatedData?.carbohydrate_g, " g")}
              </TableCell>
            </TableRow>
            <TableRow className="bg-slate-100">
              <TableCell className="font-medium" colSpan={3}>
                Protein
              </TableCell>
              <TableCell className="text-right">
                {formatValue(calculatedData?.protein_g, " g")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium" colSpan={3}>
                Total Fat
              </TableCell>
              <TableCell className="text-right">
                {formatValue(calculatedData?.total_fat, " g")}
              </TableCell>
            </TableRow>
            <TableRow className="bg-slate-100">
              <TableCell className="font-medium" colSpan={3}>
                Fibers
              </TableCell>
              <TableCell className="text-right">
                {formatValue(calculatedData?.fiber_g, " g")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium" colSpan={3}>
                Sodium
              </TableCell>
              <TableCell className="text-right">
                {formatValue(
                  calculatedData?.sodium_mg ? calculatedData?.sodium_mg : "-",
                  " mg"
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
