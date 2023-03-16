export class RestaurantResponse {
  constructor(
    public name: string,
    public hours: JSON,
    public postalCode: string,
    public address: string,
    public city: string,
    public description: string,
    public image?: string
  ) {}
}
