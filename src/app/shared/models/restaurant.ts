export class Restaurant {
  constructor(
    public id: number,
    public name: string,
    public hours: JSON,
    public postalCode: string,
    public address: string,
    public city: string,
    public description: string,
    public visible: boolean = true,
    public image?: string
  ) {}
}
