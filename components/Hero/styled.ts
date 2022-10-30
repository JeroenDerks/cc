import { styled } from "@mui/material";
import Button from "@mui/material/Button";

export const HeroButton = styled(Button)({
  position: "relative",
  zIndex: 0,
  height: 48,
  width: 168,
  borderRadius: 10,
  fontWeight: "bold",
  overflow: "hidden",
  padding: `8px 16px`,

  "@keyframes rotate": {
    "100%": {
      transform: "rotate(1turn)",
    },
  },

  "&::before": {
    content: '""',
    position: "absolute",
    zIndex: -2,
    left: "2%",
    top: "-140%",
    width: "100%",
    height: "400%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "50% 50%, 50% 50%",
    backgroundPosition: "0 0, 100% 0, 100% 100%, 0 100%",
    backgroundImage:
      "linear-gradient(#e963db, #e963db), linear-gradient(#9edbfc, #9edbfc), linear-gradient(#d6965d, #d6965d), linear-gradient(#4ec8ae, #4ec8ae)",
    animation: "rotate 12s linear infinite",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    zIndex: -1,
    left: 3,
    top: 3,
    width: "calc(100% - 6px)",
    height: "calc(100% - 6px)",
    background: "#000",
    borderRadius: 4,
  },
});

export const HeroButtonMobile = styled(HeroButton)({
  color: "#000",
  "&::after": {
    background: "#fff",
  },
});
