function filter_list(l) {
  const filtered_l = l.filter(idx => Number.isFinite(idx));
  return filtered_l;
}


// test cases
filter_list([1,2,'a','b'])// == [1,2]
filter_list([1,'a','b',0,15])// == [1,0,15]
filter_list([1,2,'aasf','1','123',123])// == [1,2,123]