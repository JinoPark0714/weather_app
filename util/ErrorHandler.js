class ErrorHandler{
  constructor(){}

  /**
   * 404 Error
   * @param {object} response - 응답 객체
   * @param {string} message - 메시지
   * @returns 
   */
  responseNotFound = (response, message) => {
    return response.status(404).json({
      status: 404,
      message : message
    });
  }

  /**
   * 500 Error
   * @param {object} response - 응답 객체
   * @param {string} message - 메시지
   */
  responseInternalError = (response, message) => {
    return response.status(500).json({
      status : 500,
      message : message
    });
  }

}

module.exports = { 
  ErrorHandler : new ErrorHandler()
};