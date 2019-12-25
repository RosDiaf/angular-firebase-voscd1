export const getSingleObject = (posts) => {
  let arrTemp = [];
  for(let k of Object.keys(posts)) {
    for(let i of Object.keys(posts[k])) {
      if(i !== 'id') arrTemp.push(posts[k][i])
    }
  };
  return arrTemp
}