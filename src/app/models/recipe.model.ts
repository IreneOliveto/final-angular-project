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

  // public get tags(): string[] {
  //   return this.tags;
  // }
  // public set tags(value: string[]) {
  //   this.tags = value;
  // }
  // public get ingredients(): string[] {
  //   return this.ingredients;
  // }
  // public set ingredients(value: string[]) {
  //   this.ingredients = value;
  // }
  // public get instructions(): string {
  //   return this.instructions;
  // }
  // public set instructions(value: string) {
  //   this.instructions = value;
  // }
  // public get protein(): number {
  //   return this.protein;
  // }
  // public set protein(value: number) {
  //   this.protein = value;
  // }
  // public get sugar(): number {
  //   return this.sugar;
  // }
  // public set sugar(value: number) {
  //   this.sugar = value;
  // }
  // public get fiber(): number {
  //   return this.fiber;
  // }
  // public set fiber(value: number) {
  //   this.fiber = value;
  // }

  // public get carbs(): number {
  //   return this.carbs;
  // }
  // public set carbs(value: number) {
  //   this.carbs = value;
  // }
  // public get satfat(): number {
  //   return this.satfat;
  // }
  // public set satfat(value: number) {
  //   this.satfat = value;
  // }
  // public get fat(): number {
  //   return this.fat;
  // }
  // public set fat(value: number) {
  //   this.fat = value;
  // }
  // public get calories(): number {
  //   return this.calories;
  // }
  // public set calories(value: number) {
  //   this.calories = value;
  // }
  // public get comments(): string {
  //   return this.comments;
  // }
  // public set comments(value: string) {
  //   this.comments = value;
  // }
  // public get servings(): number {
  //   return this.servings;
  // }
  // public set servings(value: number) {
  //   this.servings = value;
  // }
  // public get cooktime(): number {
  //   return this.cooktime;
  // }
  // public set cooktime(value: number) {
  //   this.cooktime = value;
  // }
  // public get waittime(): number {
  //   return this.waittime;
  // }
  // public set waittime(value: number) {
  //   this.waittime = value;
  // }
  // public get preptime(): number {
  //   return this.preptime;
  // }
  // public set preptime(value: number) {
  //   this.preptime = value;
  // }
  // public get image(): string {
  //   return this.image;
  // }
  // public set image(value: string) {
  //   this.image = value;
  // }
  // public get edit(): boolean {
  //   return this.edit;
  // }
  // public set edit(value: boolean) {
  //   this.edit = value;
  // }
  // public get name(): string {
  //   return this.name;
  // }
  // public set name(value: string) {
  //   this.name = value;
  // }
  // public get id(): string {
  //   return this.id;
  // }
  // public set id(value: string) {
  //   this.id = value;
  // }
}
