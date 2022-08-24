import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export const Accordion = styled(MuiAccordion)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  [theme.breakpoints.up("md")]: { paddingLeft: theme.spacing(4) },
  [theme.breakpoints.up("lg")]: { paddingLeft: theme.spacing(10) },

  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, .05)",
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
  paddingLeft: theme.spacing(3),
  [theme.breakpoints.up("md")]: { paddingLeft: theme.spacing(4) },
  [theme.breakpoints.up("lg")]: { paddingLeft: theme.spacing(10) },
}));

export default function Question({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      disableGutters
      elevation={0}
      square
    >
      <AccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        aria-controls={title}
        id={title + "_id"}
      >
        <Typography variant="body1" fontWeight={500}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
