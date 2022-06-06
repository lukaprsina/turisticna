import { Box, Typography } from "@mui/material";

function HeroImage() {
    return (
        <Box
            sx={{
                background: "white",
                width: "100%",
                height: "300px",
                display: "flex",
                justifyContent: "center",
                position: "relative"
            }}
        >
            <img
                src="https://www.terme-krka.com/assets/Uploads/_resampled/FitWzE3MDAsODUwXQ/Balnea-FUN-Dolenjske.jpg"
                alt="Dolenjske Toplice"
                style={{
                    width: "calc(100% - 20px)",
                    maxHeight: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "7px",
                    margin: "10px 0"
                }}
            />
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    zIndex: "10",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        backgroundColor: "rgba(255,255,255,0.6)",
                        borderRadius: "7px"
                    }}
                >
                    DOLENJSKE TOPLICE
                </Typography>
            </Box>
        </Box>
    );
}

export default HeroImage;
