import { NextPage } from "next";
import Article from "../components/Article";
import { useSprings, animated } from 'react-spring'
import {
    Typography, ImageList, ImageListItem, ImageListItemBar,
} from "@mui/material";

import slika1 from "../public/images/aktualno/1.jpg";
import slika2 from "../public/images/aktualno/2.jpg";
import slika3 from "../public/images/aktualno/3.png";
import slika4 from "../public/images/aktualno/4.png";
import slika5 from "../public/images/aktualno/5.png";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

type Data = {
    title: string;
    image: StaticImageData;
    hover: boolean
}

const itemData: Data[] = [
    {
        title: "JAVNI POZIV ZA ZBIRANJE PREDLOGOV ZA PRIZNANJE OBČINE DOLENJSKE TOPLICE ZA LETO 2022",
        image: slika1,
        hover: false,
    },
    {
        title: "SKUPINA ZA SAMOPOMOČ LJUDEM Z EPILEPSIJO",
        image: slika2,
        hover: false,
    },
    {
        title: "LETOVANJE OTROK NA DEBELEM RTIČU 2022",
        image: slika3,
        hover: false,
    },
    {
        title: "LIKOVNO SREČANJE PETIH ELEMENTOV - ZRAK, KONCERT MEPZ IN GLEDALIŠKA PREDSTAVA LEGENDA O BRBUČU",
        image: slika4,
        hover: false,
    },
    {
        title: "19. ČEBELARSKI PRAZNIK IN 5. SVETOVNI DAN ČEBEL V DOLENJSKIH TOPLICAH",
        image: slika5,
        hover: false,
    },
]

const Aktualno: NextPage = () => {
    const [data, setData] = useState<Data[]>(itemData);
    const springs = useSprings(5, data.map(item => {
        console.log(item)
        return ({
            scale: item.hover ? 1.1 : 1
        })
    }));

    return (
        <Article title="Aktualno">
            <ImageList cols={3} rowHeight={164} sx={{ /* overflow: "hidden" */ }}>
                {itemData.map((item, i) => {
                    let styles = springs[0][i];
                    return (
                        <ImageListItem key={item.title}>
                            <animated.div
                                style={styles}
                                onMouseEnter={() => {
                                    let newData = data;
                                    newData[i].hover = true;
                                    setData(newData)
                                }}
                                onMouseLeave={() => {
                                    let newData = data;
                                    let i = 0;
                                    for (let i = 0; i < newData.length; i++) {
                                        newData[i] = data[i];
                                        newData[i].hover = false;
                                    }
                                    setData(newData)
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    position="bottom"
                                    sx={{
                                        width: "100%",
                                        textOverflow: "ellipsis",
                                    }}
                                />
                            </animated.div>
                        </ImageListItem>
                    )
                })}
            </ImageList>
        </Article >
    );
}

export default Aktualno;