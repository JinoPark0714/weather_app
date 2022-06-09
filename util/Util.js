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


module.exports = {
  UtilService : new UtilService()
};