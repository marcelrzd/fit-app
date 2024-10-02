"use client";

import { useState, useEffect } from "react";
import data from "@/app/data/taco.json";
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
  const [foodData, setFoodData] = useState<FoodItem[]>([]);
  const [macros, setMacros] = useState<FoodItem[]>([]);
  const {
    description = "",
    energy_kcal,
    carbohydrate_g,
    protein_g,
    total_fat,
    fiber_g,
    sodium_mg,
  } = foodData || {};

  useEffect(() => {
    if (foodSearch.trim() === "") {
      setMacros([]);
      return;
    }

    const filteredData = data
      .filter((item) =>
        item.description.toLowerCase().includes(foodSearch.toLowerCase())
      )
      .map((item) => {
        // Parse fat values
        const saturated = parseFloat(item.saturated_g as string) || 0;
        const monounsaturated =
          parseFloat(item.monounsaturated_g as string) || 0;
        const polyunsaturated =
          parseFloat(item.polyunsaturated_g as string) || 0;

        // Calculate total_fat
        const total_fat = saturated + monounsaturated + polyunsaturated;

        // Return the mapped object
        return {
          id: item.id,
          description: item.description,
          category: item.category,
          energy_kcal: item.energy_kcal,
          carbohydrate_g: item.carbohydrate_g,
          protein_g: item.protein_g,
          saturated_g: item.saturated_g,
          monounsaturated_g: item.monounsaturated_g,
          polyunsaturated_g: item.polyunsaturated_g,
          total_fat: total_fat,
          sodium_mg: item.sodium_mg,
          fiber_g: item.fiber_g
        } as FoodItem;
      });

    setMacros(filteredData);
  }, [foodSearch]);

  const formatValue = (value: number, unit: string) => {
    return typeof value === "number" ? `${value.toFixed(2)}${unit}` : "-";
  };

  const handleFoodSelect = (food: FoodItem) => {
    setFoodData(food);
  };

  return (
    <div className="flex flex-row items-start w-full p-4 gap-6">
      <div className="w-[35%]">
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
                className={`p-2 cursor-pointer hover:bg-slate-200 transition-all ease-in-out ${
                  index % 2 === 0 ? "bg-slate-100" : ""
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
      <div className="w-[50%] rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg" colSpan={3}>
                Macros of {foodData?.description || ""}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-slate-100">
              <TableCell className="font-medium" colSpan={3}>
                Calories
              </TableCell>
              <TableCell className="text-right">
                {formatValue(foodData.energy_kcal, " kcal")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium" colSpan={3}>
                Carbs
              </TableCell>
              <TableCell className="text-right">
                {formatValue(foodData.carbohydrate_g, " g")}
              </TableCell>
            </TableRow>
            <TableRow className="bg-slate-100">
              <TableCell className="font-medium" colSpan={3}>
                Protein
              </TableCell>
              <TableCell className="text-right">
                {formatValue(foodData.protein_g, " g")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium" colSpan={3}>
                Total Fat
              </TableCell>
              <TableCell className="text-right">
                {formatValue(foodData.total_fat, " g")}
              </TableCell>
            </TableRow>
            <TableRow className="bg-slate-100">
              <TableCell className="font-medium" colSpan={3}>
                Fibers
              </TableCell>
              <TableCell className="text-right">{formatValue(foodData.fiber_g, " mg")}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium" colSpan={3}>
                Sodium
              </TableCell>
              <TableCell className="text-right">
                {formatValue(foodData.sodium_mg, " mg")}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
