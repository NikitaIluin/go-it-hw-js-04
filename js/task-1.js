// task-1.js

function isEnoughCapacity(products, containerSize) {
    // Обчислюємо загальну кількість товарів в об’єкті products
    let totalProducts = Object.values(products).reduce((acc, val) => acc + val, 0);

    // Перевіряємо, чи загальна кількість товарів менше або дорівнює containerSize
    return totalProducts <= containerSize;
}

// Перевірка роботи функції за допомогою виводу у консоль
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
