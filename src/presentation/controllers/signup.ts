import type { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const params = ["name", "email"];

    for (const param of params) {
      if (!httpRequest.body[param]) {
        return {
          statusCode: 400,
          body: new Error(`Missing param: ${param}`),
        };
      }
    }

    return {
      statusCode: 200,
      body: true,
    };
  }
}
