type ErrorOptions = {
  errorMessage: string;
};

export class NaviaryError extends Error {
  errorMessage: string;
  status: number;

  constructor(
    status: number,
    message: string,
    options?: {
      errorMessage: string;
    }
  ) {
    super(message);
    this.name = "NaviaryError";
    this.errorMessage = options?.errorMessage || "Internal Server Error";
    this.status = status;
  }
}

export function badRequest(message: string, options?: ErrorOptions) {
  return new NaviaryError(400, message, options);
}

export function unauthorized(message: string, options?: ErrorOptions) {
  return new NaviaryError(401, message, options);
}

export function forbidden(message: string, options?: ErrorOptions) {
  return new NaviaryError(403, message, options);
}

export function notFound(message: string, options?: ErrorOptions) {
  return new NaviaryError(404, message, options);
}

export function conflict(message: string, options?: ErrorOptions) {
  return new NaviaryError(409, message, options);
}

export function unprocessableEntity(message: string, options?: ErrorOptions) {
  return new NaviaryError(422, message, options);
}

export function internalServerError(message: string, options?: ErrorOptions) {
  return new NaviaryError(500, message, options);
}

export function serviceUnavailable(message: string, options?: ErrorOptions) {
  return new NaviaryError(503, message, options);
}
