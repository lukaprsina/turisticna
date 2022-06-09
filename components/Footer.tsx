import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CallIcon from "@mui/icons-material/Call";

function Footer() {
    return (
        <Paper
            sx={{
                marginTop: "50px",
                maxWidth: "800px",
                margin: "20px auto",
                padding: "50px",
                display: "flex",
                justifyContent: "space-between"
            }}
        >
            <Box>
                <Typography variant="h5">Osnovni podatki</Typography>
                <Typography>Občina Dolenjske Toplice</Typography>
                <Typography>Sokolski trg 4</Typography>
                <Typography>8350 Dolenjske Toplice</Typography>
                <Box sx={{ marginTop: "20px" }}>
                    <CallIcon />
                    {"  "} 07 384 51 80
                </Box>
                <br />
                <Typography variant="h5">Oblikovanje</Typography>
                <Typography variant="caption">Luka Pršina</Typography>
                <br />
                <Typography variant="caption">Mentor: Mile Božič</Typography>
            </Box>
            <Box>
                <Typography variant="h5">Uradne ure</Typography>
                <Typography variant="caption">ponedeljek: od 8.00 do 15.00</Typography>
                <br />
                <Typography variant="caption">torek: od 8.00 do 15.00</Typography>
                <br />
                <Typography variant="caption">sreda: od 8.00 do 17.00</Typography>
                <br />
                <Typography variant="caption">četrtek: od 8.00 do 15.00</Typography>
                <br />
                <Typography variant="caption">petek: od 8.00 do 13.00</Typography>
                <br />
                <br />
                <Typography variant="h5">Uradne ure - občinska uprava</Typography>
                <Typography variant="caption">
                    ponedeljek: od 8.00 do 11.00 in od 12.00 do 15.00
                </Typography>
                <br />
                <Typography variant="caption">
                    sreda: od 8.00 do 11.00 in od 13.00 do 17.00
                </Typography>
                <br />
                <Typography variant="caption">
                    petek: od 8.00 do 11.00 in od 12.00 do 13.00
                </Typography>
                <br />
            </Box>
        </Paper>
    );
}

export default Footer;
