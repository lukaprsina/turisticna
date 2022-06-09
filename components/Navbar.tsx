import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

type NavbarTextProps = {
    children?: React.ReactNode;
    link: string;
};

function NavbarText({ children, link }: NavbarTextProps) {
    return (
        <Button href={link}>
            {children}
        </Button>
    );
}

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                color="primary"
                sx={{
                    display: "flex!important",
                    justifyContent: "center!important",
                    textAlign: "center!important",
                    flexDirection: "row!important"
                }}
            >
                <Toolbar
                    disableGutters
                    color="primary"
                    sx={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <NavbarText link="/">domov</NavbarText>
                    <NavbarText link="o_obcini">o občini</NavbarText>
                    <NavbarText link="aktualno">aktualno</NavbarText>
                    <NavbarText link="kkc">kkc</NavbarText>
                    <NavbarText link="turizem">turizem</NavbarText>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
