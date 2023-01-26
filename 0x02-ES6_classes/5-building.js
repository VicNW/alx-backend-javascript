/* eslint-disable no-underscore-dangle */

export default class Building {
  constructor(sqft) {
    if (this.target !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    } else {
      this._sqft = sqft;
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
