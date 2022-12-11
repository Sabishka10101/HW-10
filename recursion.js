function recursionFunc(x, n) {
    if (n == 1) {
      return x;
    }
return x * recursionFunc(x, n - 1);
}

console.log(recursionFunc(7,2));