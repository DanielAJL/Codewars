function descendingOrder(n){
  if(n.length === 1) return n;
  const descending_nums = Array.from(n.toString());
  descending_nums.sort((a, b) =>  {
    return b - a
  })
  return Number(descending_nums.join(''));
}


// test cases
descendingOrder(0) // return 0
descendingOrder(1) // return 1
descendingOrder(123456789) // return 987654321