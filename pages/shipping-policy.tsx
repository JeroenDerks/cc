import React from "react";
import Section from "components/Section";
import SeparatorLine from "components/SeparatorLine";
import { Box, Typography } from "@mui/material";
import { gridP } from "theme";

const LegalNotice = () => {
  return (
    <Section>
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
        <table>
          <tbody>
            <tr>
              <td>Australia</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Austria</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Belgium</td>
              <td>1-2 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Brazil</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Canada</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Chile</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>China</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Czech Republic</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Denmark</td>
              <td>1-2 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>France</td>
              <td>1-2 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Germany</td>
              <td>1-2 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Greece</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>India</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Ireland</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Italy</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Japan</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Malaysia</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Mexico</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Netherlands</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>New Zealand</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Norway</td>
              <td>1-2 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Poland</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Portugal</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Singapore</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>South Africa</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>South Korea</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Spain</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Sweden</td>
              <td>1-2 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Switzerland</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Turkey</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>USA</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>United Arab Emirates</td>
              <td>2-3 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>United Kingdom</td>
              <td>1-2 days</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td> Afghanistan</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td>Aland Islands</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td>Albania</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td>Algeria</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td>American Samoa</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Andorra</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Angola</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Anguilla</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Antigua and Barbuda</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Argentina</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Armenia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Aruba</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Azerbaijan</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Bahamas</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Bahrain</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Bangladesh</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Barbados</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Belarus</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Belize</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Benin</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Bermuda</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Bhutan</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Bolivia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Bonaire</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Bosnia and Herzegovina</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> British Virgin Islands</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Brunei</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Bulgaria</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Burkina Faso</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Cambodia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Cameroon</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Cayman Islands</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Chad</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Colombia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Comoros</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Congo (Congo-Brazzaville)</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Cook Islands</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Costa Rica</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Croatia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Curaçao</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Cyprus</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Djibouti</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Dominica</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Dominican Republic</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Ecuador</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Egypt</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> El Salvador</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Equatorial Guinea</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Eritrea</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Estonia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Ethiopia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Falkland Islands</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Faroe Islands</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Fiji</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Finland</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> French Polynesia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Gabon</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Gambia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Georgia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Ghana</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Gibraltar</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Greenland</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Grenada</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Guadeloupe</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Guatemala</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Guernsey</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Guinea</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Guinea-Bissau</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Guyana</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Haiti</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Honduras</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Hong Kong</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Hungary</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Iceland</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Indonesia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Israel</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Ivory Coast</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Jamaica</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Jersey</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Jordan</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Kazakhstan</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Kenya</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Kiribati</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Kuwait</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Kyrgyzstan</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Laos</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Latvia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Lebanon</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Liechtenstein</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Lithuania</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Luxembourg</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Macao</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Madagascar</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Malawi</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Maldives</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Mali</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Malta</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Marshall-Islands</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Martinique</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Mauritania</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Mauritius</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Micronesia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Monaco</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Mongolia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Montenegro</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Montserrat</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Morocco</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Mozambique</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Myanmar</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Namibia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Nauru</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Nepal</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> New Caledonia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Nicaragua</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Nigeria</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> North Macedonia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Oman</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Pakistan</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Panama</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Papua New Guinea</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Paraguay</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Peru</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Philippines</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Puerto Rico</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Qatar</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Republic of Moldova</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Romania</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Russia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Rwanda</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Saint Kitts and Nevis</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Saint Lucia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Saint Pierre and Miquelon</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Samoa</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> San Marino</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Saudi Arabia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Senegal</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Serbia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Sierra Leone</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Slovakia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Slovenia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Somalia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> South Sudan</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Sri Lanka</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> St Vincent and the Grenadines</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> St. Helena</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Suriname</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Taiwan</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Tanzania</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Thailand</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Trinidad and Tobago</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Tunisia</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Turks and Caicos</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> US Virgin Islands</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Uganda</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Ukraine</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Uruguay</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Uzbekistan</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Vanuatu</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Vatican City State</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Venezuela</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Vietnam</td>
              <td>4-6 days</td>
              <td>Regional</td>
            </tr>
            <tr>
              <td> Botswana</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> British Indian Ocean Territory</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Cape Verde</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Congo</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Eswatini</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> French Guiana</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> French Southern Territories</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Guam</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Iraq</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Lesotho</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Liberia</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Mayotte</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Niger</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Niue</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Palau</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Pitcairn</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Réunion</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Sao Tome and Principe</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Seychelles</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Solomon Islands</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> St. Maarten</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Tajikistan</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Timor-Leste</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Togo</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Tonga</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Tristan da Cunha</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Turkmenistan</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Tuvalu</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Wallis and Futuna</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Yemen</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
            <tr>
              <td> Zambia</td>
              <td>Not enough data</td>
              <td>NA</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Section>
  );
};

export default LegalNotice;
