const Util = (arr, numberPerPage) => {
  const numberOfPages = Math.ceil(arr.length / numberPerPage);
  return Array.from({ length: numberOfPages }, (_, index) => {
    let start = numberPerPage * index;
    return arr.slice(start, start + numberPerPage);
  });
};

/** 
 const Util = (arr, numberPerPage) => {
  return arr.length === numberPerPage
    ? [arr]
    : [
        arr.slice(0, numberPerPage),
        ...Util(arr.slice(numberPerPage), numberPerPage),
      ];
};
*/

export default Util;
