import React from 'react';
import ProTypes from 'prop-types';

function Movie({id, year, title, summary, poster}) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title}/>
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__summary">{summary}</p>
            </div>
        </div>
    )
}

Movie.proTypes ={
    id: ProTypes.string.isRequired
    , year: ProTypes.number.isRequired
    , title: ProTypes.string.isRequired
    , summary: ProTypes.string.isRequired
    , poster: ProTypes.string
};

export default Movie;