import { Box, Grid, Typography } from "@mui/material";
import Section from "components/Section";
import React from "react";
import { border, gridP } from "theme";
import Question from "./Question";

const questionsColumn1 = [
  {
    title: "What are the shipping costs?",
    answerParagraphs: ["Shipping is always free."],
  },
  {
    title: "How long is the delivery?",
    answerParagraphs: [
      "Delivery depends on your location, but generally varies between 3 - 5 business days.",
      "This product is fulfilled in 19 countries: Australia, Brazil, Canada, France, Germany, Italy, India, Ireland, Malaysia, Mexico, the Netherlands, New Zealand, Singapore, South Africa, Spain, Sweden, the United Arab Emirates, the United Kingdom, and the United States.",
      "Fulfillment country for each order is carefully selected by our advanced routing algorithm at the time of ordering.",
      "In most cases, products are fulfilled at the closest production center. Sometimes due to reasons such as stock availability, orders may be shipped internationally even if a fulfillment center exists within the same country.",
    ],
  },
  {
    title: "What are the dimensions?",
    answerParagraphs: [
      "The canvas is 70 centimeters wide and 50 centimeters tall. ",
      "In the imperial system this is 20 x 28 inch.",
      'The canvas has a 2-3 cm (0.8-1.2") thick frame.',
    ],
  },
];

const questionsColumn2 = [
  {
    title: "How do you asure safe packaging?",
    answerParagraphs: [
      "Canvas prints are packaged with strong edges to protect the items. ",
      "In addition, we wrap the items in bubble wrap or kraft paper for additional protection.",
    ],
  },
  {
    title: "What materials do you use?",
    answerParagraphs: [
      "Canvas frames are made of FSC® certified wood. When not available PEFC or equivalent.",
    ],
  },
  {
    title: "Do you have other sizes available?",
    answerParagraphs: [
      "Currently we only offer 70 x 50 cm, but write us on email at info@celebratecode.com and we'll make sure you get the size you want.",
    ],
  },
];

const FAQ = () => {
  return (
    <Section>
      <Box p={gridP} pb={{ ...gridP, lg: 4 }} width={1} borderBottom={border}>
        <Typography variant="h4">FAQs</Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          {questionsColumn1.map(({ title, answerParagraphs }, i) => (
            <Question title={title} key={i}>
              {answerParagraphs.map((paragraph, j) => (
                <Typography variant="body1" paragraph={true} key={j}>
                  {paragraph}
                </Typography>
              ))}
            </Question>
          ))}
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          {questionsColumn2.map(({ title, answerParagraphs }, i) => (
            <Question title={title} key={i}>
              {answerParagraphs.map((paragraph, j) => (
                <Typography variant="body1" paragraph={true} key={j}>
                  {paragraph}
                </Typography>
              ))}
            </Question>
          ))}
        </Grid>
      </Grid>
    </Section>
  );
};

export default FAQ;
