// Task 1: Deret Angka Kelipatan 5 dari 50 sampai 100
function solveTask1() {
  for (let number = 50; number <= 100; number += 5) {
    if (number <= 60) {
      console.log(number + " KURANG");
    } else if (number <= 70) {
      console.log(number + " CUKUP");
    } else if (number <= 80) {
      console.log(number + " BAIK");
    } else {
      console.log(number + " LUAR BIASA");
    }
  }
}

// Task 2: Deret Bilangan Fibonacci sebanyak 20
function solveTask2() {
  let a = 0;
  let b = 1;
  console.log(a);
  console.log(b);
  for (let i = 3; i <= 20; i++) {
    const c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

// Task 3: Tampilkan pola berdasarkan nilai x
function solveTask3(x: number) {
  for (let i = 1; i <= x; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
}

// Task 4: Tampilkan terbilang dari angka 4 digit (>2000)
function solveTask4(num: number) {
  if (num < 2000 || num > 9999) {
    console.log("Angka harus 4 digit dan lebih besar dari 2000");
    return;
  }
  const thousands = Math.floor(num / 1000);
  const remainder = num % 1000;
  const hundreds = Math.floor(remainder / 100);
  const tensOnes = remainder % 100;
  const tens = Math.floor(tensOnes / 10);
  const ones = tensOnes % 10;

  let result = numberToWord(thousands) + " Ribu";
  if (hundreds > 0) {
    result += " " + numberToWord(hundreds) + " Ratus";
  }
  if (tens > 0) {
    result += " " + numberToWord(tens) + " Puluh";
  }
  if (ones > 0) {
    result += " " + numberToWord(ones);
  }
  console.log(result);
}

function numberToWord(n: number): string {
  switch (n) {
    case 1:
      return "Satu";
    case 2:
      return "Dua";
    case 3:
      return "Tiga";
    case 4:
      return "Empat";
    case 5:
      return "Lima";
    case 6:
      return "Enam";
    case 7:
      return "Tujuh";
    case 8:
      return "Delapan";
    case 9:
      return "Sembilan";
    case 0:
      return "";
    default:
      return "";
  }
}

console.log("Task 1 Output:");
solveTask1();
console.log("\nTask 2 Output:");
solveTask2();
console.log("\nTask 3 Output for x=3:");
solveTask3(3);
console.log("\nTask 4 Output for num=2234:");
solveTask4(2234);
