export const parseSearch = (search) => {
  const result = {};
  const regex = /([a-zA-Z0-9\_])=([a-zA-Z0-9\_])/g;
  let arr = regex.exec(search);
  while (arr) {
    result[arr[1]] = arr[2];
  }
  return result;
};
