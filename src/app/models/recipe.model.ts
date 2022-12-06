export interface Recipe {

  id: string,
  name: string,
  edit: boolean,
  image: string,
  preptime: number,
  waittime: number,
  cooktime: number,
  servings: number,
  comments: string,
  calories: number,
  fat: number,
  satfat: number,
  carbs: number,
  fiber: number,
  sugar: number,
  protein: number,
  instructions: string,
  ingredients: string[],
  tags: string[]
}
