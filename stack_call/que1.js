function one(){
  return 1;
}
function two(){
  return one()+one();
}
function three(){
  let ans=two()+two();
  console.log(ans);
}

three();