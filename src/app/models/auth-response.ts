import {User} from "./User";

export class AuthResponse {
  constructor(
    public token: string,
    public user: User
  ) {}
}
