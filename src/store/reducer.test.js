import reducer from './reducer';

describe('reducer', () => {
  it('should return the initial state when no action is provided', () => {
    expect(reducer(undefined, {})).toEqual({
      movies: [],
      moviesFiltered: [],
      selectedMovie: {}
    });
  });
});

describe('reducer', () => {
  it('should store the initial movies', () => {
    expect(reducer({
      movies: [],
      moviesFiltered: [],
      selectedMovie: {}
  },{
    type: 'INITIAL_MOVIES',
    val: [{
      title: 'Episode VI - Return of the Jedi',
      summary: 'Luke Skywalker',
      director: 'Richard Marquand'
    }]
  })).toEqual(
    {
      movies: [{
        title: 'Episode VI - Return of the Jedi',
        summary: 'Luke Skywalker',
        director: 'Richard Marquand'
      }],
      moviesFiltered: [],
      selectedMovie: {}
    }
    );
  });
});

describe('reducer', () => {
  it('should store the filtered movies', () => {
    expect(reducer({
      movies: [],
      moviesFiltered: [],
      selectedMovie: {}
  },{
    type: 'MOVIES_FILTERED',
    val: [{
      title: 'Episode VI - Return of the Jedi',
      summary: 'Luke Skywalker',
      director: 'Richard Marquand'
    }]
  })).toEqual(
    {
      movies: [],
      moviesFiltered: [{
        title: 'Episode VI - Return of the Jedi',
        summary: 'Luke Skywalker',
        director: 'Richard Marquand'
      }],
      selectedMovie: {}
    }
    );
  });
});

describe('reducer', () => {
  it('should store the selected movie data', () => {
    expect(reducer({
      movies: [],
      moviesFiltered: [],
      selectedMovie: {}
  },{
    type: 'SELECT_MOVIE',
    val: {
      title: 'Episode VI - Return of the Jedi',
      summary: 'Luke Skywalker',
      director: 'Richard Marquand'
    }
  })).toEqual(
    {
      movies: [],
      moviesFiltered: [],
      selectedMovie: {
        title: 'Episode VI - Return of the Jedi',
        summary: 'Luke Skywalker',
        director: 'Richard Marquand'
      }
    }
    );
  });
});