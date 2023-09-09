let array_random = [];
let array_ganjil = [];
let array_genap = [];

let min_ganjil = 0;
let max_ganjil = 0;
let total_ganjil = 0;
let ratarata_ganjil = 0;

let min_genap = 0;
let max_genap = 0;
let total_genap = 0;
let ratarata_genap = 0;

function makeRandomValue() {
  let random_array = [];

  for (let i = 0; i < 100; i++) {
    random_array.push(Math.round(Math.random() * 50));
  }

  return random_array;
}

function oddEven(array) {
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      array_genap.push(array[i]);
    } else array_ganjil.push(array[i]);
  }
}

function getMinValue(array) {
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }

  return min;
}

function getMaxValue(array) {
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  return max;
}

function getTotalValue(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
}

function getAvgValue(array) {
  return getTotalValue(array) / array.length;
}

function compare(ganjil, genap) {
  if (ganjil == genap) {
    return "Nilai sama";
  } else if (ganjil > genap) {
    return "Nilai array ganjil lebih besar";
  } else if (ganjil < genap) {
    return "Nilai array genap lebih besar";
  }
}

array_random = makeRandomValue();
console.log("Array Random: " + array_random);

oddEven(array_random);
console.log("Array Ganjil: " + array_ganjil);
console.log("Array Genap: " + array_genap);

min_ganjil = getMinValue(array_ganjil);
min_genap = getMinValue(array_genap);
console.log("Min Ganjil: " + min_ganjil);
console.log("Min Genap: " + min_genap);

max_ganjil = getMaxValue(array_ganjil);
max_genap = getMaxValue(array_genap);
console.log("Max Ganjil: " + max_ganjil);
console.log("Max Genap: " + max_genap);

total_ganjil = getTotalValue(array_ganjil);
total_genap = getTotalValue(array_genap);
console.log("Total Ganjil: " + total_ganjil);
console.log("Total Genap: " + total_genap);

ratarata_ganjil = getAvgValue(array_ganjil);
ratarata_genap = getAvgValue(array_genap);
console.log("Rata-rata Ganjil: " + getAvgValue(array_ganjil));
console.log("Rata-rata Genap: " + getAvgValue(array_genap));

console.log("Perbandingan Nilai Min: " + compare(min_ganjil, min_genap));
console.log("Perbandingan Nilai Max: " + compare(max_ganjil, max_genap));
console.log("Perbandingan Nilai Total: " + compare(total_ganjil, total_genap));
console.log("Perbandingan Nilai Rata-rata: " + compare(ratarata_ganjil, ratarata_genap));
