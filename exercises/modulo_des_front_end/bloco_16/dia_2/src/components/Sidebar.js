import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selectMovie from '../actions/movieAction';

class Sidebar extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <aside>
        {
          categories.map((category) => (
            <div key={ category.id }>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map((movie) => (
                    <li key={ movie.id }>
                      {movie.title}
                      {' '}
                      was released in
                      {' '}
                      {movie.released}
                      <button
                        type="button"
                        onClick={ () => selectMovie(category, movie) }
                      >
                        Selecionar
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    );
  }
}

Sidebar.propTypes = {
  categories: PropTypes.shape.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.movieReducer.categories,
});

const mapDispatchToProps = (dispatch) => ({
  selectMovie: (category, movie) => dispatch(selectMovie(category, movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
