import p5Types from "p5";
import { charW, charH, ShikiData, charHOffset } from "./HeroAnimatedSketch";

export class TokenRow {
  private xOff: number = 0;
  private yOff: number = 0;
  private letters: ShikiData[] = [];
  private letterWidthIncrement = 0;
  private opacityIncr = 1;
  public isActive = true;
  private letterDisplayCount = 0;

  constructor(letters: ShikiData[], xOff: number, yOff: number) {
    this.xOff = xOff;
    this.yOff = yOff;
    this.letters = letters;
  }

  draw(p5: p5Types) {
    this.updateAnimationState();
    this.drawLetterBoxes(p5);
    this.drawLetterText(p5);
  }

  private updateAnimationState() {
    this.letterDisplayCount += 0.4;
    if (this.letterWidthIncrement < charW) {
      this.letterWidthIncrement += 0.02;
    } else if (this.opacityIncr >= 0) {
      this.opacityIncr -= 0.01;
    } else {
      // this.isActive = false;
    }
  }

  private drawLetterBoxes(p5: p5Types) {
    const w = charW + this.letterWidthIncrement;
    const y = this.yOff;
    const letterBoxDelay = 24;

    p5.noStroke();

    this.letters.forEach(({ content, color }, index) => {
      if (index + letterBoxDelay > this.letterDisplayCount || content === " ")
        return;

      const x = this.xOff + w * index;

      p5.fill(color[0], color[1], color[2]);
      p5.rect(x, y, w, charH);
    });
  }

  private drawLetterText(p5: p5Types) {
    const w = charW + this.letterWidthIncrement;
    const y = this.yOff;

    this.letters.forEach(({ content, color }, index) => {
      if (index > this.letterDisplayCount || content === " ") return;

      const x = this.xOff + w * index;

      p5.fill(color[0], color[1], color[2]);
      p5.text(content, x, y + charHOffset, w, charH);
    });
  }
}
