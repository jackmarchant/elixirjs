const mapNew = (enumerable = [], transform = x => x) => {
  if (enumerable) {
    return enumerable.reduce((acc, val) => {
      const firstKey = Object.keys(val)[0];
      acc[firstKey] = transform(val[firstKey]);
      return acc;
    }, {});
  }

  return {};
};

const put = (map = {}, key, value) => {
  return { ...map, [key]: value };
};

const merge = (firstMap = {}, secondMap = {}) => {
  return { ...firstMap, ...secondMap };
};

const keys = map => Object.keys(map);

const Map = {
  new: mapNew,
  put,
  merge,
  keys,
};

export default Map;