import p5Types from "p5";
import { charW, charH, ShikiData, charHOffset } from "./HeroAnimatedSketch";

export class TokenRow {
  private tokens: ShikiData[];
  private xOff: number = 0;
  private yOff: number = 0;
  private letters: ShikiData[] = [];
  private p5: p5Types;

  constructor(tokens: ShikiData[], xOff: number, yOff: number, p5: p5Types) {
    this.tokens = tokens;
    this.xOff = xOff;
    this.yOff = yOff;
    this.p5 = p5;

    tokens.forEach((token) => {
      const letter = token.content.split("");
      this.letters.push(
        ...letter.map((letter, i) => ({
          ...token,
          content: letter,
          offsetX: i + token.offsetX,
        }))
      );
    });
  }

  draw() {
    this.p5.noStroke();
    this.letters.forEach(({ content, color, offsetX }) => {
      this.p5.fill(color[0], color[1], color[2], 100);
      const _x = this.xOff + offsetX * charW;
      const _y = this.yOff;

      this.p5.rect(_x, _y, charW, charH);

      this.p5.fill(color);
      this.p5.text(content, _x, _y + charH - charHOffset);
    });
  }
}
