import htmlImage from "../images/html5.png";
import cssImage from "../images/css.png";
import jsImage from "../images/js.png";
import responsiveImage from "../images/responsive.png";
import flexboxImage from "../images/flexbox.png";

const coursesImages: Object = {
  html: htmlImage,
  css: cssImage,
  js: jsImage,
  "responsive-design": responsiveImage,
  flexbox: flexboxImage,
};

export const getCourseImage = (type: string): any => {
  return coursesImages[type as keyof Object];
};
