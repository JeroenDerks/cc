import P5 from "p5";
import { ColoredRow } from "types";

const letterWidth = 8;
const letterHeight = 16;

export class LineOfCode {
  _p5: P5;
  _position: P5.Vector;
  _lineOfExampleCode: ColoredRow;
  _opacity: number;
  _count: number;
  _letterWidth: number;

  constructor(p5: P5, initPosition: P5.Vector, lineOfExampleCode: ColoredRow) {
    this._p5 = p5;
    this._position = initPosition;
    this._lineOfExampleCode = lineOfExampleCode;
    this._opacity = 255;
    this._count = 0;
    this._letterWidth = letterWidth;
  }

  display() {
    let x = (this._position.x += 3);
    let y = this._position.y;

    this._letterWidth += 0.05;
    let lw = this._letterWidth;

    if (this._lineOfExampleCode.length * 2 < this._count) {
      this._opacity -= 3;
    }

    this._lineOfExampleCode.forEach(({ char, background: col }, i) => {
      if (i <= this._count) {
        this._p5.fill(col[0], col[1], col[2], this._opacity);
        this._p5.text(char, x + i * lw, y + letterHeight);
      }

      if (this._lineOfExampleCode.length + (i - 1) <= this._count) {
        this._p5.fill(col[0], col[1], col[2], this._opacity);
        this._p5.rect(x + i * lw, y + 4, lw, letterHeight);
      }
    });

    this._count++;
  }
}
