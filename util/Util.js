class UtilService{
  constructor(){}

  isNull = (param) =>{
    return (param === null);
  }
  
  isUndefined = (param) => {
    return (param === undefined);
  }
  
  isVoidArray = (param) => {
    return (param.length === 0);
  }
  
  isFalse = (param) => {
    return (this.isNull(param) || this.isUndefined(param) || this.isVoid(param));
  }
  
  isVoid = (param) => {
    return (param === "");
  }
  
  isVoidObject = (param) => {
    return (Object.keys(param).length === 0);
  }
}

const isNull = (param) =>{
  return (param === null);
}

const isUndefined = (param) => {
  return (param === undefined);
}

const isVoidArray = (param) => {
  return (param.length === 0);
}

const isFalse = (param) => {
  return (isNull(param) || isUndefined(param) || isVoid(param));
}

const isVoid = (param) => {
  return (param === "");
}

const isVoidObject = (param) => {
  return (Object.keys(param).length === 0);
}



module.exports = {
  UtilService : new UtilService()
};

// module.exports = {
//   isFalse : isFalse,
//   isNull : isNull,
//   isUndefined : isUndefined,
//   isVoidArray : isVoidArray,
//   isVoidObject : isVoidObject
// };