import React, { useState, useEffect } from 'react';
import pify from 'pify';
import { PropTypes } from 'prop-types';
import Card from '../Card/Card';
import { isAppLoadedAsExtension } from '../GoogleCalendar/api';
import './TopSites.css';

function SiteElement(props) {
  const { title, url } = props;
  return (
    <a className="SiteElement" href={url}>
      <div className="SiteElement-title">{title}</div>
      <img
        className="SiteElement-img"
        key={url}
        src={`https://plus.google.com/_/favicon?domain=${url}`}
        alt={`${url} favicon`}
      />
    </a>
  );
}

SiteElement.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

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
    <Card className="TopSites-Card">
      {isAppLoadedAsExtension() ? (
        topSites.map(site => <SiteElement title={site.title} url={site.url} />)
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
