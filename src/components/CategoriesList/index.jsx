import React, { useState, useEffect } from 'react';
import Category from '../Category/index';

import { List, Item } from './styles';

import Loading from '../Loading/index';
import Error from '../Error';

import API_URL from '../../constants';

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/categories`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  useEffect(() => {
    const target = document.getElementById('categories-list');
    const fixedList = document.getElementById('fixed-list');

    if (target && fixedList) {
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!fixedList.classList.contains('invisible'))
              fixedList.classList.add('invisible');
          } else {
            fixedList.classList.remove('invisible');
          }
        });
      };

      const intersectionObserver = new IntersectionObserver(handleIntersection);

      intersectionObserver.observe(target);
    }
  }, [categories, loading]);

  if (loading) return <Loading />;

  if (!loading && error) return <Error />;

  return (
    <>
      <List id="categories-list">
        {categories.map((category) => (
          <Item key={category.id}>
            <Category
              cover={category.cover}
              path={`/pet/${category.id}`}
              emoji={category.emoji}
            />
          </Item>
        ))}
      </List>
      <List className="fixed invisible" id="fixed-list">
        {categories.map((category) => (
          <Item key={category.id}>
            <Category
              cover={category.cover}
              path={`/pet/${category.id}`}
              emoji={category.emoji}
            />
          </Item>
        ))}
      </List>
    </>
  );
};

export default CategoriesList;
