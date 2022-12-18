// defining swipes by implementing touch listener
import { useState } from 'react';

const useSwipeDefine = () => { 
    const [touchStart, setTouchStart] = useState(null);
    const [touchStop, setTouchStop] = useState(null);

    // minimum distance between touchStart and touchStop to be detected as a swipe 
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        // prevent swipe from being fired with normal touches
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX); 

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe || isRightSwipe)
          console.log("swipe", isLeftSwipe ? "left" : "right");
        // add your conditional logic here
      };
    return { onTouchStart, onTouchMove, onTouchEnd };
}

export default useSwipeDefine; 