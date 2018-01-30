const pipe = (...fns) => initial => fns.reduce((acc, fn) => fn(acc), initial);

export default pipe;