import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import './Search.css';

const Search = props => {
  const { className } = props;
  const query = useRef(null);
  const isUrl = () => {
    // Check if query is valid URL
    const regex = new RegExp(
      /^((((H|h)(T|t)|(F|f))(T|t)(P|p)((S|s)?)):\/\/)?(www.|[a-zA-Z0-9].)[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,6}(:[0-9]{1,5})*(\/($|[a-zA-Z0-9.,;?'\\+&amp;%$#=~_-]+))*$/
    );
    return query.current.value.match(regex) && true;
  };

  const onSubmit = e => {
    e.preventDefault();
    window.location.href = isUrl()
      ? // Redirect to valid url
        `https://${query.current.value}`
      : // Search google for input otherwise
        `https://google.com/search?q=${query.current.value}`;
  };

  return (
    <form onSubmit={onSubmit} className={className}>
      <input type="search" id="search" ref={query} />
      <input type="submit" value="Search" />
    </form>
  );
};

Search.propTypes = {
  className: PropTypes.string.isRequired
};

export default Search;
