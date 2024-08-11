import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";
import Wrapper from "@/components/Wrapper";
import Header from "./Header";

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

const TitleImg = styled("img", {
    maxWidth: "3em",
});

export default function Gallery() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Header title={"우리의 아름다운 순간"} imgType={"flower"}/>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
}
