import React from 'react';
import {shallow} from 'enzyme';

import Character from './index';

const CHARACTER = {
    name: 'Luke Skywalker',
    height: '172',
    birth_year: '19BBY',
    gender: 'male',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
};

describe('Character details render', () => {
    const character = shallow(<Character
        name={CHARACTER.name}
        height={CHARACTER.height}
        birth_year={CHARACTER.birth_year}
        gender={CHARACTER.gender}
        hair_color={CHARACTER.hair_color}
        skin_color={CHARACTER.skin_color}
        eye_color={CHARACTER.eye_color}
    />);

    it('renders correct name', () => {
        expect(character.find('.character-card__name').text()).toEqual('Luke Skywalker');
    });
    it('renders correct gender with label', () => {
        expect(character.find('.character-card__attribute').get(2).props.children).toEqual(['Gender: ', 'male']);
    });
});
