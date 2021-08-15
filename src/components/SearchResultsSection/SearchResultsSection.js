import React, { useState, useEffect } from "react";

import "./SearchResultsSection.css";
import Cards from "../Cards/Cards";
import newsApi from "../../utils/NewsApi";

function SearchResultsSection(props) {
  const allCardsShown = props.cards.length >= props.totalCards.length;

  return (
    <section className='searchResults'>
      <Cards
        cards={props.cards}
        isHomePage={props.isHomePage}
        keyword={props.keyword}
        isLoggedIn={props.isLoggedIn}
        onArticleSave={props.onArticleSave}
        onArticleDelete={props.onArticleDelete}
        savedArticles={props.savedArticles}
      />
      {props.cards.length !== 0 && !allCardsShown && props.isHomePage ? (
        <button
          className='searchResults__showmoreButton'
          type='button'
          aria-label='show more'
          onClick={props.showMore}>
          Show more
        </button>
      ) : null}
    </section>
  );
}

export default SearchResultsSection;
