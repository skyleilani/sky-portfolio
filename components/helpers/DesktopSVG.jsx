import React from 'react';

const DesktopSVG = ({ data, type, customClass }) => {
  const st0 = {
    fill: '#CCCCCC',
  };
  const st1 = {
    fill: '#B3B3B3',
  };
  // filllller!!!!!!!!!!!!!
  const st2 = {
    fill: 'url(#SVG_ID_1)',
  };

  const renderVisual = () => {
    if (type === 'video') {
      return <video src={data} autoplay={true} playsInline={true} muted loop />;
    }
    };
    return ( 
        <div className={`slide-img--desktop ${customClass}`}>
             <div className="masking">{renderVisual()}</div>
      <svg
        id="computer"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 350 350"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="175"
            y1="312.22"
            x2="175"
            y2="331.11"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3" stopColor="#ccc" />
            <stop offset="0.42" stopColor="#c8c8c8" />
            <stop offset="0.55" stopColor="#bcbcbc" />
            <stop offset="0.67" stopColor="#a8a8a8" />
            <stop offset="0.8" stopColor="#8b8b8b" />
            <stop offset="0.92" stopColor="#676767" />
            <stop offset="1" stopColor="#4d4d4d" />
          </linearGradient>
        </defs>
        <rect width="350" height="340.55" style={{ fill: "#ccc" }} />
        <path
          d="M0,331.11H350a0,0,0,0,1,0,0V344a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6V331.11A0,0,0,0,1,0,331.11Z"
          style={{ fill: "#b3b3b3" }}
        />
        <rect
          y="312.22"
          width="350"
          height="18.89"
          style={{ fill: "url(#linear-gradient)" }}
        />
      </svg>
        </div>
    )
};

export default DesktopSVG;
