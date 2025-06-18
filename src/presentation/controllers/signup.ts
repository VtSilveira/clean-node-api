import { MissingParamError } from "../errors/missing-param-error";
import { badRequest } from "../helpers/http-helper";
import type { Controller } from "../protocols/controller";
import type { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const params = ["name", "email", "password", "passwordConfirmation"];

    for (const param of params) {
      if (!httpRequest.body[param]) {
        return badRequest(new MissingParamError(param));
      }
    }

    return {
      statusCode: 200,
      body: true,
    };
  }
}
