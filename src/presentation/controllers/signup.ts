import { InvalidParamError } from "../errors/invalid-param-error";
import { MissingParamError } from "../errors/missing-param-error";
import { ServerError } from "../errors/server-error";
import { badRequest, serverError } from "../helpers/http-helper";
import type { Controller } from "../protocols/controller";
import type { EmailValidator } from "../protocols/email-validator";
import type { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator;
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    try {
      const params = ["name", "email", "password", "passwordConfirmation"];

      for (const param of params) {
        if (!httpRequest.body[param]) {
          return badRequest(new MissingParamError(param));
        }
      }

      const isValid = this.emailValidator.isValid(httpRequest.body.email);

      if (!isValid) {
        return badRequest(new InvalidParamError("email"));
      }
    } catch (error) {
      return serverError(new ServerError());
    }

    return {
      statusCode: 200,
      body: true,
    };
  }
}
