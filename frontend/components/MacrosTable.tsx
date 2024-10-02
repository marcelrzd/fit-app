"use client";

import { useState, useEffect } from "react";
import data from "@/app/data/taco.json";
import { FoodItem } from "./types";

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
  const [food, setFood] = useState("");
  const [macros, setMacros] = useState<FoodItem[]>([]);

  useEffect(() => {
    if (food.trim() === "") {
      setMacros([]);
      return;
    }

    const filteredData = data.filter((item: FoodItem) =>
      item.description.toLowerCase().includes(food.toLowerCase())
    );
    setMacros(filteredData);
    console.log(filteredData);
  }, [food]);

  return (
    <div className="flex w-full p-4 gap-6">
      <div className="w-[35%]">
        <div className="text-left text-lg font-semibold mb-4 flex justify-between">
          <span className="p-2">Food</span>
          <Input
            className="w-[80%] bg-slate-100"
            placeholder="Type the food name"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
        </div>
        <div className="flex flex-col rounded-md">
          <span className="p-2">Frango, Peito, Cozido</span>
          <span className="bg-slate-100 p-2">Frango, Peito, Cozido</span>
          <span className="p-2">Frango, Peito, Cozido</span>
          <span className="bg-slate-100 p-2">Frango, Peito, Cozido</span>
          <span className="p-2">Frango, Peito, Cozido</span>
          <span className="bg-slate-100 p-2">Frango, Peito, Cozido</span>
          <span className="p-2">Frango, Peito, Cozido</span>
        </div>
      </div>
      <div className="w-[50%] rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg" colSpan={3}>
                Macros
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-slate-100">
              <TableCell className="font-medium" colSpan={3}>
                Calories
              </TableCell>
              <TableCell className="text-right">100kcal</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium" colSpan={3}>
                Carbs
              </TableCell>
              <TableCell className="text-right">100g</TableCell>
            </TableRow>
            <TableRow className="bg-slate-100">
              <TableCell className="font-medium" colSpan={3}>
                Protein
              </TableCell>
              <TableCell className="text-right">100g</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium" colSpan={3}>
                Fat
              </TableCell>
              <TableCell className="text-right">100g</TableCell>
            </TableRow>
            <TableRow className="bg-slate-100">
              <TableCell className="font-medium" colSpan={3}>
                Fibers
              </TableCell>
              <TableCell className="text-right">100g</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium" colSpan={3}>
                Sodium
              </TableCell>
              <TableCell className="text-right">100mg</TableCell>
            </TableRow>
          </TableBody>
          {/* <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter> */}
        </Table>
      </div>
    </div>
  );
}
