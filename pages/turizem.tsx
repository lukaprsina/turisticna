import { NextPage } from "next";
import Article from "../components/Article";
import ArticleImage from "../components/ArticleImage";
import {
    Table,
    TableContainer,
    Paper,
    TableRow,
    TableCell,
    Typography,
    TableBody,
    Link
} from "@mui/material";

import Tic from "../public/images/tic.jpg";

const Turizem: NextPage = () => {
    return (
        <Article title="Turizem">
            <ArticleImage
                src={Tic}
                caption="Logo turistično informacijskega centra"
                maxHeight={200}
                center
            />
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Naslov</TableCell>
                            <TableCell>Sokolski trg 4, 8350 Dolenjske Toplice</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Vodja</TableCell>
                            <TableCell>Franc Vovk</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>ID za DDV (davčna št.):</TableCell>
                            <TableCell>29941318</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Matična številka:</TableCell>
                            <TableCell>1365720000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Transakcijski račun (TRR):</TableCell>
                            <TableCell>SI56 0110 0010 0015 763</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>BIC / SWIFT koda banke:</TableCell>
                            <TableCell>Banka Slovenije</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Stacionarni telefon:</TableCell>
                            <TableCell>
                                <Link href="tel: 07 38 45 188">07 38 45 188</Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Elektronska pošta:</TableCell>
                            <TableCell>
                                <Link href="mailto:tic@dolenjske-toplice.si">tic@dolenjske-toplice.si</Link>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Article>
    );
}

export default Turizem;