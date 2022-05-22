import React from "react"

import { Typography, Box } from "@mui/material"
import NextjsImage, { StaticImageData } from "next/image"
import Link from "next/link"

type ArticleImageProps = {
    src: StaticImageData,
    caption: string,
    center?: boolean,
    noGallery?: boolean,
    noBorder?: boolean,
    priority?: boolean,
    maxHeight?: number,
}

const extension_regex = /(?:\.([^.]+))?$/;

function ArticleImage({ src, caption, center = false, noBorder = false, priority = false, maxHeight = 0, noGallery }: ArticleImageProps) {
    const result = extension_regex.exec(src.src);
    const extension = result ? result[1] : "";

    const name = src.src.split(".")[0].split("/").pop()
    const blur = extension === "jpg" || extension === "png" || extension === "webp" || extension === "avif";

    return (
        <Box sx={{
            margin: "20px 0",
            "& img": {
                width: "100%",
                maxHeight: (maxHeight == 0) ? "1500px" : `${maxHeight}px!important`,
                borderRadius: noBorder ? "0" : "7px",
            }
        }}>
            {noGallery ? (
                <Box sx={{ textAlign: "center" }} component="a">
                    <NextjsImage
                        src={src}
                        alt={caption}
                        placeholder={blur ? "blur" : "empty"}
                        priority={priority}
                        lazyBoundary="900px"
                    />
                </Box>
            ) : (
                <Link
                    href={`?image=${name}`}
                    passHref
                    shallow={true}
                    scroll={false}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                        component="a"
                    >
                        <NextjsImage
                            src={src}
                            alt={caption}
                            placeholder={blur ? "blur" : "empty"}
                            priority={priority}
                            lazyBoundary="900px"
                        />
                    </Box>
                </Link>
            )}
            <Typography
                variant="caption"
                paragraph
                align={center ? "center" : "left"}
                sx={{
                    mt: "10px",
                }}
            >
                {caption}
            </Typography>
        </Box >
    )
}

export default ArticleImage
