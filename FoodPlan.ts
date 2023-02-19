type Eats = {
  items: Item[]
}

type Item = {
  name: string,
  ingredients: string[],
  weight: number,
  quantity: number,
}

const food : Eats = {
  "items": [
    {
      "name": "couscous",
      "ingredients": [
        "couscous", 
        "olive oil",
        "salt",
        "pepper",
        "nuts",
        "dried fruit",
        "seeds"
      ],
      "weight": 160,
      "quantity": 8
    },
    {
      "name": "freeze dried coffee",
      "ingredients": [
        "coffee"
      ],
      "weight": 5,
      "quantity": 10
    },
    {
      "name": "oatmeal",
      "ingredients": [
        "oatmeal",
        "salt",
        "molasses",
        "cinnamon",
        "raisins",
        "coconut",
        "milk powder",
        "vanilla"
      ],
      "weight": 150,
      "quantity": 6
    },
    {
      "name": "scroggin",
      "ingredients": [
        "mixed nuts",
        "dried fruit",
        "seeds",
        "chocolate",
        "peanuts"
      ],
      "weight": 180,
      "quantity": 6
    },
    {
      "name": "Tararua biscuits",
      "ingredients": [
        "rolled oats",
        "wholemeal flour",
        "brown sugar",
        "butter",
        "golden syrup",
        "salt"
      ],
      "weight": 30,
      "quantity": 45
    },
    {
      "name": "vegetable stew",
      "ingredients": [
        "diced vegetables",
        "Japanese curry roux",
        "lentils",
        "olive oil"
      ],
      "weight": 200,
      "quantity": 3
    },
    {
      "name": "chocolate",
      "ingredients": [
        "chocolate"
      ],
      "weight": 267,
      "quantity": 1
    },
    {
      "name": "peanut butter",
      "ingredients": [
        "peanut butter"
      ],
      "weight": 420,
      "quantity": 1
    }
  ]
}

// function to calculate the total weight of food
function totalWeight(food: Eats) {
  let total = 0
  for (let i = 0; i < food.items.length; i++) {
    total += food.items[i].weight * food.items[i].quantity
  }
  return total
}

// function to print each item and its total weight
function printItems(food: Eats) {
  let out = "";
  for (let i = 0; i < food.items.length; i++) {
    out = `${out}\n${food.items[i].name}: ${food.items[i].weight * food.items[i].quantity}g`
  }
  return `${out}\n`
}

let fp = `Food Plan\n_________\n${printItems(food)}______________________\nTotal weight of food: ${totalWeight(food)}g`

Deno.writeTextFile("FoodPlan.txt", fp).then(() => {
  console.log(fp);
  console.log("Food plan written to FoodPlan.txt")
})
