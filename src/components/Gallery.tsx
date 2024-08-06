import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontSize: "2.4vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const images = [
  {
    original: "./assets/Gallery_Photo_0.jpg",
    thumbnail: "./assets/Gallery_Photo_0.jpg",
  },
  {
    original: "./assets/Gallery_Photo_1.jpg",
    thumbnail: "./assets/Gallery_Photo_1.jpg",
  },
  {
    original: "./assets/Gallery_Photo_2.jpg",
    thumbnail: "./assets/Gallery_Photo_2.jpg",
  },
  {
    original: "./assets/Gallery_Photo_3.jpg",
    thumbnail: "./assets/Gallery_Photo_3.jpg",
  },
  {
    original: "./assets/Gallery_Photo_4.jpg",
    thumbnail: "./assets/Gallery_Photo_4.jpg",
  },
  {
    original: "./assets/Gallery_Photo_5.jpg",
    thumbnail: "./assets/Gallery_Photo_5.jpg",
  },
  {
    original: "./assets/Gallery_Photo_6.jpg",
    thumbnail: "./assets/Gallery_Photo_6.jpg",
  },
];

export default function Gallery() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
}
