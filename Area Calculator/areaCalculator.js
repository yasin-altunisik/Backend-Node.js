const arguments = process.argv.slice(2)
const pi = 3.14;

function areaCalculator(r){
    let area = pi * r * r;
    console.log(`Yarıçapı ${arguments[0] * 1} olan dairenin alanı: ${area}`)
}

areaCalculator(arguments[0] * 1);