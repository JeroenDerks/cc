import React from "react";
import Section from "components/Section";
import { Box, Grid, styled, Typography } from "@mui/material";
import { gridP } from "theme";

const Td = styled("td")`
  min-width: 250px;
`;
const LegalNotice = () => {
  return (
    <Section flexGrow={1}>
      <Box maxWidth={880} p={gridP}>
        <Typography variant="h2" paragraph>
          Shipping policy
        </Typography>
        <Typography paragraph>
          We offer <span style={{ fontWeight: 800 }}> FREE</span> shipping to
          many countries in Europe, the US and Canada.
        </Typography>
        <Typography variant="h4" paragraph mt={6}>
          Fulfillment
        </Typography>
        <Typography paragraph>
          It usually takes 1-4 business days to create your products.
        </Typography>

        <Typography variant="h4" paragraph mt={6}>
          Shipping
        </Typography>
        <Typography paragraph>
          It takes an average of 1-4 business days to ship your order for most
          products and destinations.
        </Typography>
        <Typography variant="h4" paragraph mt={6}>
          Delivery time
        </Typography>
        <Typography paragraph>
          Delivery time = fulfillment time + shipping time
          <br />
          For a more detailed overview, see the list below
        </Typography>
        <Typography variant="h4" paragraph mt={6}>
          Delivery time per country
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6}>
            <table>
              <tbody>
                <tr>
                  <Td>Australia</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Austria</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Belgium</Td>
                  <Td>1-2 days</Td>
                </tr>
                <tr>
                  <Td>Brazil</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Canada</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Chile</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>China</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Czech Republic</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Denmark</Td>
                  <Td>1-2 days</Td>
                </tr>
                <tr>
                  <Td>France</Td>
                  <Td>1-2 days</Td>
                </tr>
                <tr>
                  <Td>Germany</Td>
                  <Td>1-2 days</Td>
                </tr>
                <tr>
                  <Td>Greece</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>India</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Ireland</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Italy</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Japan</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Malaysia</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Mexico</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Netherlands</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>New Zealand</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Norway</Td>
                  <Td>1-2 days</Td>
                </tr>
                <tr>
                  <Td>Poland</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Portugal</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Singapore</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>South Africa</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>South Korea</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Spain</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Sweden</Td>
                  <Td>1-2 days</Td>
                </tr>
                <tr>
                  <Td>Switzerland</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>Turkey</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>USA</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>United Arab Emirates</Td>
                  <Td>2-3 days</Td>
                </tr>
                <tr>
                  <Td>United Kingdom</Td>
                  <Td>1-2 days</Td>
                </tr>
              </tbody>
            </table>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <table>
              <tbody>
                <tr>
                  <Td> Afghanistan</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td>Aland Islands</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td>Albania</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td>Algeria</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td>American Samoa</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Andorra</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Angola</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Anguilla</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Antigua and Barbuda</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Argentina</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Armenia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Aruba</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Azerbaijan</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Bahamas</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Bahrain</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Bangladesh</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Barbados</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Belarus</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Belize</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Benin</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Bermuda</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Bhutan</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Bolivia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Bonaire</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Bosnia and Herzegovina</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> British Virgin Islands</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Brunei</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Bulgaria</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Burkina Faso</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Cambodia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Cameroon</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Cayman Islands</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Chad</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Colombia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Comoros</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Congo (Congo-Brazzaville)</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Cook Islands</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Costa Rica</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Croatia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Curaçao</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Cyprus</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Djibouti</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Dominica</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Dominican Republic</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Ecuador</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Egypt</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> El Salvador</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Equatorial Guinea</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Eritrea</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Estonia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Ethiopia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Falkland Islands</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Faroe Islands</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Fiji</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Finland</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> French Polynesia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Gabon</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Gambia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Georgia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Ghana</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Gibraltar</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Greenland</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Grenada</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Guadeloupe</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Guatemala</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Guernsey</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Guinea</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Guinea-Bissau</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Guyana</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Haiti</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Honduras</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Hong Kong</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Hungary</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Iceland</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Indonesia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Israel</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Ivory Coast</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Jamaica</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Jersey</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Jordan</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Kazakhstan</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Kenya</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Kiribati</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Kuwait</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Kyrgyzstan</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Laos</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Latvia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Lebanon</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Liechtenstein</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Lithuania</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Luxembourg</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Macao</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Madagascar</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Malawi</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Maldives</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Mali</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Malta</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Marshall-Islands</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Martinique</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Mauritania</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Mauritius</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Micronesia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Monaco</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Mongolia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Montenegro</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Montserrat</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Morocco</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Mozambique</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Myanmar</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Namibia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Nauru</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Nepal</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> New Caledonia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Nicaragua</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Nigeria</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> North Macedonia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Oman</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Pakistan</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Panama</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Papua New Guinea</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Paraguay</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Peru</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Philippines</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Puerto Rico</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Qatar</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Republic of Moldova</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Romania</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Russia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Rwanda</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Saint Kitts and Nevis</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Saint Lucia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Saint Pierre and Miquelon</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Samoa</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> San Marino</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Saudi Arabia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Senegal</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Serbia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Sierra Leone</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Slovakia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Slovenia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Somalia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> South Sudan</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Sri Lanka</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> St Vincent and the Grenadines</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> St. Helena</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Suriname</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Taiwan</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Tanzania</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Thailand</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Trinidad and Tobago</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Tunisia</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Turks and Caicos</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> US Virgin Islands</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Uganda</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Ukraine</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Uruguay</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Uzbekistan</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Vanuatu</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Vatican City State</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Venezuela</Td>
                  <Td>4-6 days</Td>
                </tr>
                <tr>
                  <Td> Vietnam</Td>
                  <Td>4-6 days</Td>
                </tr>
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};

export default LegalNotice;
