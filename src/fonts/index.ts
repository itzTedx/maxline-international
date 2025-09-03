import localFont from "next/font/local";

const generalSans = localFont({
  src: [
    {
      path: "./general-sans/GeneralSans-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./general-sans/GeneralSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./general-sans/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./general-sans/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./general-sans/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./general-sans/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
});
const polysans = localFont({
  src: [
    {
      path: "./polysans/PolySans-Slim.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./polysans/PolySans-Neutral.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./polysans/PolySans-Median.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-poly-sans",
  display: "swap",
});
export { generalSans, polysans };
