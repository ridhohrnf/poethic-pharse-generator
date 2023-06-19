import { generateTextAndImage } from "./utils.js"

// 1. Change the value of the variable to your name
let name = "Muhammad Ridho Heranof"

// 2. Change the value of the variable to your favorite activity
let favoriteActivity = "Badminton "

// 3. Assign the favoritePlace variable your favorite place
// I.e. city, mountain, pub, forrest, beach, Manhattan, etc.
let favoritePlace = "Mountain"

// 4. Configure the AI by setting a temperature from 0 to 1
// The higher temperature, the more random & experimental output
let temperature = 0.8

// Optional: delete "avatar.jpg" and add a photo of yourself
// (remember to use "avatar.jpg" as the name of your photo)

generateTextAndImage(name, favoriteActivity, favoritePlace, temperature)
