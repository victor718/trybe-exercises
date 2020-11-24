const fatorial = (n) => n > 0 ? n * fatorial(n - 1) : 1;

console.log(fatorial(8));


// const arranjos = (n, p) =>  fatorial(n) / (fatorial(n - p));

// console.log(arranjos(4, 4));