import type { AccountModel } from "../../../domain/models/account";
import type {
  AddAccount,
  AddAccountModel,
} from "../../../domain/usecases/add-account";
import type { Encrypter } from "../../protocols/encrypter";

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter;

  constructor(encrypter: Encrypter) {
    this.encrypter = encrypter;
  }

  async add(account: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(account.password);
    const addedAccount: AccountModel = {
      id: "1",
      name: account.name,
      email: account.email,
      password: hashedPassword,
    };

    return addedAccount;
  }
}
