import { Box, Grid, Typography } from "@mui/material";
import Navbar from "./Navbar";
import HeroImage from "./HeroImage";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Ad from "./Ad";

type ArticleProps = {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>> | readonly React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
    title: string;
};

function Article({ children, title }: ArticleProps) {
    return (
        <>
            <Gallery site={children}></Gallery>
            <Navbar />
            <HeroImage />
            <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                    <Ad />
                </Grid>
                <Grid item>
                    <Box
                        sx={{
                            maxWidth: "820px",
                            margin: "auto",
                            padding: "10px"
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                margin: "50px 0"
                            }}
                        >
                            {title}
                        </Typography>
                        {children}
                    </Box>
                </Grid>
                <Grid item>
                    <Ad />
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}

export default Article;
