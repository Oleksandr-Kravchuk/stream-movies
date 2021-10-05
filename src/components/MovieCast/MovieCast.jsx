import React from 'react';
import cls from './MovieCast.module.scss';

const MovieCast = ({cast}) => {
  return (
    <div className={cls.cast}>
      <h3>Cast</h3>
      <ul>
        {cast.map(item => {
          const {person, character} = item;
          return (
            <li key={person.id} className={cls.card}>
              <img src={person.image.medium} alt={person.name} />
              <div className={cls.body}>
                <h4>{person.name}</h4>
                <p className={cls.role}>
                  <span>as</span> {character.name}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
      
    </div>
  );
};

export default MovieCast;