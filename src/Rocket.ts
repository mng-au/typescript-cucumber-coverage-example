
 export class Rocket {
  public isInSpace: boolean = false;
  public boostersLanded: boolean = false;

  public launch() {
    this.isInSpace = true;
    this.boostersLanded = true;
  }
}
