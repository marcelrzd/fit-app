export interface FoodItem {
  id: number;
  description: string;
  energy_kcal: number;
  category: string;
  carbohydrate_g: number;
  protein_g: number;
  saturated_g: number | string;
  monounsaturated_g: number | string;
  polyunsaturated_g: number | string;
  total_fat: number;
  sodium_mg: number;
  fiber_g: number;
}
