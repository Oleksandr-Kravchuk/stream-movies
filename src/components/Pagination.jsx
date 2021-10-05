import React from 'react';

import { Pagination } from 'react-bootstrap';

const PaginationMovies = ({totalPage, changePage, active}) => {
  const getPagesArray = (totalPage) => {
    let pagesArray = [];
  
    for (let i = 1; i <= totalPage; i++) {
      const pageItem = (
        <Pagination.Item key={i} number={i} active={i === active} onClick={() => changePage(i)}>
          {i}
        </Pagination.Item>
      );

      pagesArray.push(pageItem);
    }

    const activePage = pagesArray.find(item => item.props.active);

    if(activePage) {
      return pagesArray.filter(page => {
        const prev = activePage.props.number - 3;
        const next = activePage.props.number + 3;
        let prev1 = next - totalPage > 0 ? prev - (next - totalPage) + 1 : prev;
        let next1 = prev < 0 ? next - prev : next;
        
        return page.props.number > prev1 && page.props.number < next1;
      });
    }

    return pagesArray;
  };

  const pagesArray = getPagesArray(totalPage);
  return (
    <Pagination className="justify-content-end flex-wrap">
      {pagesArray}
    </Pagination>
  );
};

export default PaginationMovies;