// import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="109" rx="0" ry="0" width="118" height="164" />
    <rect x="150" y="112" rx="0" ry="0" width="122" height="164" />
    <rect x="297" y="114" rx="0" ry="0" width="112" height="169" />
  </ContentLoader>
);

export default Loader;
