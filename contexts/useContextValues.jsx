import { useState } from 'react';

const useContextValues = touch => {
  // page context
  const [currPage, setCurrPage] = useState(null);
  const [projectsPage, setProjectsPage] = useState(null);
  const [subPage, setSubPage] = useState('landing');

  // theme context
  const [theme, setTheme] = useState({ color: 'black', subColor: 'white' });
  const [prevTheme, setPrevTheme] = useState({
    color: 'black',
    subColor: 'white',
  });

  // style context
  const [activeSubPageStylePosition, setActiveSubPageStylePosition] = useState({
    transform: 'translateY(0vh)',
  });
  const [projectsNavWidth, setProjectsNavWidth] = useState(0);
  const [slideScroll, setSlideScroll] = useState(0);
  const [cursor, setCursor] = useState({ show: false, type: 'scroll' });

  // url context

  const urlContextValue = {
    currPage: ['home', 'projects', 'about', 'contact', 'notfound'],
    projectsPage: ['equation-game', 'to-do-list', 'portfolio'],
    subPage: ['landing', 'overview', 'carousel'],
  };

    const projectContextValue = [
        
    {
      name: urlContextValue.projectsPage[0].split('-').join(' '),
      color: 'white',
    },
    {
      name: urlContextValue.projectsPage[1].split('-').join(' '),
      color: 'blue',
    },
    {
      name: urlContextValue.projectsPage[2].split('-').join(' '),
      color: 'white',
    },
    
  ];

  const pageContextValue = {
    currPage,
    setCurrPage,
    projectsPage,
    setProjectsPage,
    subPage,
    setSubPage,
  };

  const themeContextValue = {
    theme,
    setTheme,
    prevTheme,
    setPrevTheme,
  };
  const styleContextValue = {
    activeSubPageStylePosition,
    setActiveSubPageStylePosition,
    projectsNavWidth,
    setProjectsNavWidth,
    slideScroll,
    setSlideScroll,
    cursor,
    setCursor,
  };
  const [mobileShowNav, setMobileShowNav] = useState(false);

  const contextValues = {
    urls: { ...urlContextValue },
    page: { ...pageContextValue },
    projects: [...projectContextValue],
    theme: { ...themeContextValue },
    mobile: {
      mobileShowNav,
      setMobileShowNav,
    },
    style: { ...styleContextValue },
    touch: {
      action: touch.action,
      sticky: touch.sticky,
    },
  };

  return { contextValues };
};

export default useContextValues;
