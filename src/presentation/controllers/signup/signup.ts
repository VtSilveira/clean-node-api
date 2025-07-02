import { InvalidParamError, MissingParamError } from "../../errors";
import { badRequest, serverError } from "../../helpers/http-helper";
import type {
  AddAccount,
  Controller,
  EmailValidator,
  HttpRequest,
  HttpResponse,
} from "./signup-protocols";

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;
  private readonly addAccount: AddAccount;

  constructor(emailValidator: EmailValidator, addAccount: AddAccount) {
    this.emailValidator = emailValidator;
    this.addAccount = addAccount;
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    try {
      const params = ["name", "email", "password", "passwordConfirmation"];

      for (const param of params) {
        if (!httpRequest.body[param]) {
          return badRequest(new MissingParamError(param));
        }
      }

      const { name, email, password, passwordConfirmation } = httpRequest.body;

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError("passwordConfirmation"));
      }

      const isValid = this.emailValidator.isValid(email);

      if (!isValid) {
        return badRequest(new InvalidParamError("email"));
      }

      this.addAccount.add({
        name,
        email,
        password,
      });
    } catch (error) {
      return serverError();
    }

    return {
      statusCode: 200,
      body: true,
    };
  }
}
