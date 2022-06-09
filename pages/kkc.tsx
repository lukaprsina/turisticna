import { NextPage } from "next";
import Article from "../components/Article";
import ArticleImage from "../components/ArticleImage";
import {
    Typography,
} from "@mui/material";

import KKC from "../public/images/kkc.jpg";

const Home: NextPage = () => {
    return (
        <Article title="Kulturno Kongresni center">
            <Typography>
                Kulturno kongresni center Dolenjske Toplice se nahaja v samem osrčju topliške doline, med naravnimi zdravilnimi vrelci in zavetjem mogočnega Kočevskega roga.
      </Typography>

            <Typography>
                Že skoraj 10 let uspešno krojimo zgodbo kongresnega in kulturnega turizma na tem delu Slovenije. Pod našim okriljem so bili med drugim izvedeni projekti podelitve dolenjsko-posavske Gazele podjetja Dnevnik d.d., praznovanje 45. in 50. obletnice podjetja FerroČrtalič d.o.o., organizirali smo strokovne posvete s področja zdravstva, šolstva, prava, izvedli sejo Evropskega sveta, imeli srečanje Slovenske turistične organizacije ter še veliko drugih, če omenimo samo nekatere.
      </Typography>

            <Typography>
                Kulturno kongresni center Dolenjske Toplice nudi sodobno opremljene prostore za prirejanje kulturnih prireditev, kongresov, seminarjev in ostalih strokovnih srečanj. Vsi prostori so klimatizirani in omogočajo uporabo sodobne avdiovizualne opreme, dostop do interneta, opremo za projiciranje, namizno in brezžično ozvočenje, itd.
      </Typography>
            <ArticleImage
                src={KKC}
                caption="Kulturno kongresni center"
            />
        </Article>
    );
}

export default Home;