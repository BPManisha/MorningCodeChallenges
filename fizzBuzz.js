// Write your solution below this line:
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz, divisible by 3 and 5")
  } else if (i % 3 === 0) {
    console.log("fizz, divisible by 3")
  } else if (i % 5 === 0) {
    console.log("buzz, divisible by 5")
  } else {
    console.log(i)
  }
}