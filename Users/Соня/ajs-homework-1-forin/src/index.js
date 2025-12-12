export function orderByProps(obj, order = []) {
  const result = [];
  
  for (const key of order) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push({ key, value: obj[key] });
    }
  }
  
  const restKeys = [];
  for (const key in obj) {
    if (!order.includes(key)) {
      restKeys.push(key);
    }
  }
  
  restKeys.sort();
  for (const key of restKeys) {
    result.push({ key, value: obj[key] });
  }
  
  return result;
}
