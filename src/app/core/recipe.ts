export class Recipe {
    constructor(
        public name: string,
        public title: string,
        public image: string,
        public rating: number,
        public durationInMinutes: number,
        public sliderImages: Array<string>,
        public serves: number,
        public prepTimeInMinutes: number,
        public calories: number,
        public description: string,
        public ingredients: Array<string>,
        public directions: Array<string>,
        public reviews?: Array<{}>
    ) { }
}
