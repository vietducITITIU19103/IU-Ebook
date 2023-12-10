import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Download from "yet-another-react-lightbox/plugins/download";
import NextJsImage from "./light-box-image";
import Box from "@mui/material/Box";

export default function LightBoxModal({ open, setOpen, data, children }: { open: boolean, setOpen: any, data: any, children: React.ReactNode }) {
  return (
    <>
      <Box onClick={() => setOpen(true)}>
        {children}
      </Box>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[ Zoom, Fullscreen, Download]}
        zoom={{ maxZoomPixelRatio: 3 }}
        slides={data}
        render={{ slide: NextJsImage }}
      />
    </>
  );
}

// [
//   {
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5e36PC6yHGC9oIpx7YgHbAVlh9MHIUwVd4hQ6nk-1-go4-aCS_4V6ofnZtwOILBBWBo0&usqp=CAU",
//     alt: "image 1",
//     // width: 3840,
//     // height: 2560,
//     // srcSet: [
//     //   { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5e36PC6yHGC9oIpx7YgHbAVlh9MHIUwVd4hQ6nk-1-go4-aCS_4V6ofnZtwOILBBWBo0&usqp=CAU", width: 320, height: 213 },
//     //   { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5e36PC6yHGC9oIpx7YgHbAVlh9MHIUwVd4hQ6nk-1-go4-aCS_4V6ofnZtwOILBBWBo0&usqp=CAU", width: 640, height: 427 },
//     //   { src: "/image1x1200.jpg", width: 1200, height: 800 },
//     //   { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5e36PC6yHGC9oIpx7YgHbAVlh9MHIUwVd4hQ6nk-1-go4-aCS_4V6ofnZtwOILBBWBo0&usqp=CAU", width: 2048, height: 1365 },
//     //   { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5e36PC6yHGC9oIpx7YgHbAVlh9MHIUwVd4hQ6nk-1-go4-aCS_4V6ofnZtwOILBBWBo0&usqp=CAU", width: 3840, height: 2560 },
//     // ],
//   },
//   // ...
// ]