import loadImage from "blueimp-load-image";
import { isNull } from "lodash";

const fixRotationOfFile = file => {
  return new Promise(resolve => {
    if (isNull(file)) resolve(null);
    loadImage(
      file,
      img => {
        img.toBlob(blob => {
          resolve(blob);
        }, "image/jpeg");
      },
      { orientation: true }
    );
  });
};

export default fixRotationOfFile;
