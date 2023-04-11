export class UserComment {
  constructor(
    public note: number,
    public comment: String,
    public user_id: number,
    public restaurant_id: number
  ) {}
}
