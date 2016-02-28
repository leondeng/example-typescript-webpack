export class TestClass {
  private _name = '';

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
