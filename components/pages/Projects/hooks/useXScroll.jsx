import { useEffect, useRef, useState, useContext } from 'react'; 
import { isBrowser, isMobile } from 'react-device-detect'; 
import { PageContext } from '../../../../pages/index'; 
import throttle from '../../../helpers/throttle'; 

// Horizontal scroll for carousel 
const useXScroll = (loading) => { 

    const { page, style } = useContext(PageContext);

    const [trigger, setTrigger] = useState(null); 
    const [wait, setWait] = useState(false); 
    const elRef = useRef(); 

    // trigger reattaches the ref to the conditionally rendered comp in the parent comp

    useEffect(() => {
        if (!elRef.current) {
            setTrigger(loading);
        }
        if (elRef.current) {
            setTrigger(elRef);
        }
    }, [loading]);

}

export default useXScroll;
