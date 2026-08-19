import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const enabled = import.meta.env.PROD && Boolean(import.meta.env.VITE_GA_TRACKING_ID);

if (enabled) {
  ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);
}

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (enabled) {
      ReactGA.send({ hitType: 'pageview', page: pathname });
    }
  }, [pathname]);

  return null;
};

export default Analytics;
