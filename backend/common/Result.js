class Result {
  value = null;
  errors = [];
  successes = [];
  isSuccess = false;
  isFailed = false;
  statusCode = 500;

  constructor() {}

  Ok(value) {
    this.value = value;
    this.isSuccess = true;
    return this;
  }

  Fail() {
    this.isFailed = true;
    return this;
  }

  WithError(error) {
    this.errors.push(error);
    this.isFailed = true;
    return this;
  }

  WithSuccess(success) {
    
    this.successes.push(success);
    this.isSuccess = true;
    return this;
  }

  SetStatusCode(statusCode) {
    this.statusCode = statusCode;
    return this;
  }
}

exports.Result = Result;