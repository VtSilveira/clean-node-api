export class ServerError extends Error {
  constructor() {
    super(`An internal error has occurred, try again later.`);
    this.name = "ServerError";
  }
}
