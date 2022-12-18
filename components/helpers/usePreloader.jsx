import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const usePreloader = dataList => {
  const [loaded, setLoaded] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (!dataList) return;
    setLoading(true);

    const loadImage = img => {
      return new Promise((res, rej) => {
        const loadingImg = new Image();
        loadingImg.src = img;

        loadingImg.onload = () => res(img);

        loadingImg.onerror = err => rej(err);
      });
    };
    const loadVideo = async vid => {
      const req = new XMLHttpRequest();
      req.open('GET', vid, true);
      req.responseType = 'blob';

      req.onloadstart = () => {
        setLoaded(arr => [...arr, req]);
      };

      req.onerror = err => console.log(err);

      req.send();
    };

    const canplayVid = vid => {};

    dataList.forEach(async (data, index) => {
      const fileType = data.slice(-3);
      if (fileType !== 'mp4') {
        const res = await loadImage(data);
        if (res) {
          setLoaded(arr => [...arr, res]);
        }
      }
      if (fileType === 'mp4') {
        setLoaded(arr => [...arr, index]);
      }
    });
  }, []);

  useEffect(() => {
    let timeoutId;
    setLoadingProgress(
      Math.round(((loaded.length + 1) / dataList?.length) * 100)
    );
    if (loaded.length >= dataList.length) {
      setLoading(false);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [loaded]);

  const renderProgress = () => {
    if (loadingProgress <= 100) return <span> {loadingProgress}%</span>;
    if (loadingProgress > 100) return <span> 100%</span>;
  };

  const Loading = (
    <motion.div
      className='loading_container'
      key='loader'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='loading_animated-div'> {renderProgress()}</div>
    </motion.div>
  );
  return { loading, Loading };
};
export default usePreloader;
