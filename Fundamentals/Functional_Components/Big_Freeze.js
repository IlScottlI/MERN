// const arr = [1, 2, 3, 4];
// arr.push(300); // even though arr is declared with `const` we can still push new values into it 

// const arr = Object.freeze([1, 2, 3, 4]);
// arr.push(300); // we're no longer allowed to change `arr`

const groceryList = Object.freeze([
    { "item": "carrots", "haveIngredient": false },
    { "item": "onions", "haveIngredient": true },
    { "item": "celery", "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter", "haveIngredient": true }
]);

const needThyme = [...groceryList, { "item": "thyme", "haveIngredient": false }];