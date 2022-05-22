import {
  Table,
  TableContainer,
  Paper,
  TableRow,
  TableCell,
  Typography,
  TableBody
} from "@mui/material";
import { NextPage } from "next";

import Article from "../components/Article";
import ArticleImage from "../components/ArticleImage";

import Map from "../public/images/map.jpg";

const About: NextPage = () => {
  return (
    <Article title="O občini">
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Župan</TableCell>
              <TableCell>Franc VOVK</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Število prebivalcev</TableCell>
              <TableCell>3.543</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Površina občine</TableCell>
              <TableCell>110 km2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Statistična regija</TableCell>
              <TableCell>Jugovzhodna</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Število naselij</TableCell>
              <TableCell>29</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <ArticleImage
        src={Map}
        caption="Zemljevid občine"
      />

      <Typography>
        “Kar se tiče toplic, so ene na Srednjem Kranjskem nadvse dobre, da jih
        od daleč obiskujejo.” so besede, ki jih je v drugi polovici
        sedemnajstega stoletja v svoji knjigi uporabil polihistor Janez Vajkard
        Valvasor in s tem potrdil večstoletno turistično dejavnost kraja, saj so
        Dolenjske Toplice še danes eden najbolj obiskanih zdraviliških območij v
        Sloveniji.
      </Typography>
    </Article>
  );
}

export default About;
