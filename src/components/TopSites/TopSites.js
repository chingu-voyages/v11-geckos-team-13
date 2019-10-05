import React, { useState, useEffect } from 'react';
import pify from 'pify';
import Card from '../Card/Card';
import { isAppLoadedAsExtension } from '../GoogleCalendar/api';

function TopSites() {
  const [topSites, setTopSites] = useState([]);

  const renderTopSites = async () => {
    const getTopSitesPromisified = pify(window.chrome.topSites.get, {
      errorFirst: false // Needed for Chrome Extensions APIs
    });
    setTopSites(await getTopSitesPromisified());
  };

  useEffect(() => {
    if (isAppLoadedAsExtension()) {
      renderTopSites();
    }
  });

  return (
    <Card>
      {isAppLoadedAsExtension() ? (
        topSites.map(site => (
          <div>
            <div>{site.title}</div>
            <div>{site.url}</div>
          </div>
        ))
      ) : (
        <div>
          If you want to check your top visited sites, please run this app as an
          extension :)
        </div>
      )}
    </Card>
  );
}

export default TopSites;
