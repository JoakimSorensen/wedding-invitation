import { styled } from "@stitches/react";

const Container = styled("div", {
    display: "flex",
  alignItems: "center",
  justifyContent: "center",
    marginTop: "1.5em",
});

const Title = styled("span", {
  fontSize: "1.4em",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
    margin: "0 0",
});

const TitleImg = styled("img", {
    display: "block",
    maxWidth: "2em",
});

const TitleImgFlip = styled("img", {
    display: "block",
    maxWidth: "2em",
    transform: "scale(-1, 1)",
});

type HeaderProps = {
    title: string;
    imgType: "flower" | "leaf";
}

export default function Header ({title, imgType}: HeaderProps) {
    const imgSrcs = {
        "flower": "./assets/Flower_1.PNG",
        "leaf": "./assets/Flower_2.PNG",
    }
    return (
    <Container>
        <TitleImgFlip src={imgSrcs[imgType]}/>
        <Title>
                {title}
        </Title>
        <TitleImg src={imgSrcs[imgType]}/>
    </Container>
    )
}
