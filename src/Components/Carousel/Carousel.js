import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "./Carousel.css";

export default function Carousel() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img
          src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/1.png"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img
          src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/2.png"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img
          src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/3.png"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img
          src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/4.png"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={5}>
        <img
          src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/5.png"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
