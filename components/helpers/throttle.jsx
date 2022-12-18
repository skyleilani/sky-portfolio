// throttle will be used to 
// limit amount of times the useGalleryHoriScroll hook will be used 
// for horizontal scrolling in the carousel 
const throttle = (callback, tps) => {
  var wait = false;
  if (!wait) {
    callback(...args);
    wait = true;

    setTimeout(function () {
      wait = false;
    }, 1000 / tps);
  }
};

export default throttle;
