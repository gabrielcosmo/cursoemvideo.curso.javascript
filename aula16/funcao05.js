// Recursividade:
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1) // chamada da própria função;
    }
}

console.log(1)