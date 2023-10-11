function sockMerchant(n, ar) {
  const sockCount = ar.reduce((count, sockColor) => {
        count[sockColor] = (count[sockColor] || 0) + 1;
        return count;
    }, {});

    return Object.values(sockCount).reduce((totalPairs, count) => {
        return totalPairs + Math.floor(count / 2);
    }, 0);

}
console.log(sockMerchant(7, [1,2,1,4,3,2,5]))