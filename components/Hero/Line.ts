import p5Types from "p5";
import { charW, charH, ShikiData, charHOffset } from "./HeroAnimatedSketch";

export class TokenRow {
  private xOff: number = 0;
  private yOff: number = 0;
  private letters: ShikiData[] = [];
  private incr = 0;
  private opacityIncr = 1;
  public isActive = true;
  private phase = 0;
  private typeCount = 0;

  constructor(tokens: ShikiData[], xOff: number, yOff: number) {
    this.xOff = xOff;
    this.yOff = yOff;

    tokens.forEach((token) => {
      const letter = token.content.split("");
      console.log(token);
      this.letters.push(
        ...letter.map((letter) => ({ ...token, content: letter }))
      );
    });
  }

  draw(p5: p5Types) {
    this.typeCount += 0.4;
    if (this.incr < charW) this.incr += 0.02;
    else if (this.opacityIncr >= 0) this.opacityIncr -= 0.01;
    else this.isActive = false;

    p5.noStroke();
    this.letters.forEach(({ content, color }, index) => {
      if (index > this.typeCount) return;

      const w = charW + this.incr;
      const x = this.xOff + w * index;
      const y = this.yOff;

      // p5.fill(color[0], color[1], color[2], Math.round(220 * this.opacityIncr));
      // p5.rect(x, y, w, charH);

      p5.fill(color[0], color[1], color[2], Math.round(255 * this.opacityIncr));
      p5.text(content, x, y + charHOffset, w, charH);
    });
  }
}
