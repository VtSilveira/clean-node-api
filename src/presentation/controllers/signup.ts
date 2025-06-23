import { InvalidParamError, MissingParamError } from "../errors";
import { badRequest, serverError } from "../helpers/http-helper";
import type {
  EmailValidator,
  HttpResponse,
  HttpRequest,
  Controller,
} from "../protocols";

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

      const { email, password, passwordConfirmation } = httpRequest.body;

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError("passwordConfirmation"));
      }

      const isValid = this.emailValidator.isValid(email);

      if (!isValid) {
        return badRequest(new InvalidParamError("email"));
      }
    } catch (error) {
      return serverError();
    }

    return {
      statusCode: 200,
      body: true,
    };
  }
}
