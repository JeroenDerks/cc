import p5Types from "p5";
import { charW, charH, ShikiData, charHOffset } from "./HeroAnimatedSketch";

export class TokenRow {
  private tokens: ShikiData[];
  private xOff: number = 0;
  private yOff: number = 0;
  private letters: ShikiData[] = [];
  private incr = 0;
  private opacityIncr = 1;
  public isActive = true;

  constructor(tokens: ShikiData[], xOff: number, yOff: number) {
    this.tokens = tokens;
    this.xOff = xOff;
    this.yOff = yOff;

    tokens.forEach((token) => {
      const letter = token.content.split("");
      this.letters.push(
        ...letter.map((letter) => ({ ...token, content: letter }))
      );
    });
  }

  draw(p5: p5Types) {
    if (this.incr < charW) this.incr += 0.1;
    else if (this.opacityIncr >= 0) this.opacityIncr -= 0.01;
    else this.isActive = false;

    p5.noStroke();
    this.letters.forEach(({ content, color }, index) => {
      p5.fill(color[0], color[1], color[2], 150 * this.opacityIncr);
      const w = charW + this.incr;
      const x = this.xOff + w * index;
      const y = this.yOff;

      p5.rect(x, y, w, charH);

      p5.fill(color[0], color[1], color[2], 255 * this.opacityIncr);
      p5.text(content, x, y + charHOffset, w, charH);
    });
  }
}
