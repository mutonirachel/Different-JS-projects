// Christmas Tree

function christmasTree(x) {
    if (x === 1) return console.log("*");
    for (let i = 1; i <= x; i++) {
      console.log("  ".repeat(x - i) + "*".repeat(2 * i - 1));
    }
}
console.log(christmasTree(5));