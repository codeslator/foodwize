import { useState, useEffect, ChangeEvent } from 'react';

/**
 * @callback onSearchChange
 * @callback filter
 */

/**
 * @typedef {Object} ReturnObjectOfUserSearch
 * @property {Function} handleSearch - The handle input on change
 * @property {string} search - The value of input on change
 * @property {Array} matches - ...
 */

/**
 * @param onSearchChange
 * @param {Array} list
 *
 * @returns {ReturnObjectOfUserSearch}
 */

interface UseSearchHookParams<T> {
  filter: (items: T, value: string) => void;
  list: T[];
}

const useSearch = <T>({ filter, list }: UseSearchHookParams<T>) => {
  const [search, setSearch] = useState<string>('');
  const [matches, setMatches] = useState<T[]>(list);

  const handleSearch = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
    if (value.length > 2) {
      setMatches(list.filter((matchItem: T) => filter(matchItem, value)));
    } else {
      setMatches(list);
    }
  };

  useEffect(() => {
    setMatches(list);
  }, [list]);

  return {
    handleSearch,
    search,
    matches,
  };
};

export default useSearch;
