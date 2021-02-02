const findScreenHeight = (width, ratio) => {
  ratio = ratio.split(':');
  const dimension = (val1, val2) => {
    return `${width}x${val2 / val1 * width}`;
  }
  
  return dimension(ratio[0], ratio[1]);
}


// test cases
findScreenHeight(1024,"4:3") // "1024x768"
findScreenHeight(1280,"16:9") // 1280x720
findScreenHeight(3840,"32:9") // "3840x1080"