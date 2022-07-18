function calcDistance(A, B)
{
    let X = [B[0] - A[0], B[1] - A[1]];
    
    return Math.sqrt(X[0] * X[0] + X[1] * X[1]);
}
console.log(calcDistance([4, 1], [1, 1]));