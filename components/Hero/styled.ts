import { styled } from "@mui/material";
import Button from "@mui/material/Button";

export const HeroButton = styled(Button)({
  textDecoration: "none",
  position: "relative",
  height: 48,
  width: 168,
  display: "block",
  textAlign: "center",
  borderRadius: 10,
  animation: "rotate 2s linear infinite",
  backgroundImage:
    "linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b)",

  "@keyframes rotate": {
    "100%": {
      filter: "hue-rotate(-360deg)",
    },
  },
});

export const HeroButtonSpan = styled("span")({
  height: "88%",
  width: "96%",
  background: "#000",
  color: "#fff",
  display: "block",
  position: "absolute",
  fontWeight: "bold",
  padding: `8px 16px`,
  top: "50%",
  left: "50%",
  borderRadius: 6,
  transform: "translate(-50%, -50%)",
});

export const HeroButtonSpanMobile = styled(HeroButtonSpan)({
  background: "#fff",
  color: "#000",
});
