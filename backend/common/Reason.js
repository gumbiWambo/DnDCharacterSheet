class Reason {
  statusCode = 200;
  reason = "Ok";
  constructor(statusCode, reason) {
    if (statusCode) {
      this.statusCode = statusCode;
    }

    if (reason) {
      this.reason = reason;
    }
  }
}

exports.Reason = Reason;