import { NextPage } from "next";
import Article from "../components/Article";
import ArticleImage from "../components/ArticleImage";

import Aerial from "../public/images/aerial.jpg";
import Baza20 from "../public/images/baza20.jpg";
import Bazen from "../public/images/bazen.jpg";
import Turn from "../public/images/turn.jpg";

/* 
.js -> javascript
.jsx -> javascript + html -> react
.tsx -> typescript = react + types
*/

const Home: NextPage = () => {
    return (
        <Article title="Občina Dolenjske Toplice">
            <ArticleImage
                src={Aerial}
                caption="Zračni posnetek Toplice"
            />
            <ArticleImage
                src={Turn}
                caption="Hudičev turn"
            />
            <ArticleImage
                src={Baza20}
                caption="Baza 20"
            />
            <ArticleImage
                src={Bazen}
                caption="Bazen"
            />
        </Article>
    );
}

export default Home;