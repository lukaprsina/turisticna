import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function Ad() {
    return <Box sx={{
        margin: "50px 0",
    }}>
        <img
            width="500px"
            src="https://the-slovenia.com/wp-content/uploads/2020/04/F013496-aquafun_naravna_zdravilisca_terme_catez_ciril_jazbec_17-photo-s.jpg"
            alt="oglas" /><br />
        <Typography variant="caption" component="p" textAlign="center">Pridite v Toplice DANES!</Typography>
    </Box>
}

export default Ad