import * as React from 'react';
import Attribute from './attribute';

interface CharacterProps {
    name: string;
    height: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
}

const Character: React.FunctionComponent<CharacterProps> = ({name, height, hair_color, skin_color, eye_color, birth_year, gender}: CharacterProps): JSX.Element => {

    return (
        <div className="character-card">
            <div className="character-card__name">
                {name}
            </div>
            <div className="character-card__row">
                <Attribute
                    label="Height"
                    value={height}
                    label2="cm"
                />
                <Attribute
                    label="Birth"
                    value={birth_year}
                />
                <Attribute
                    label="Gender"
                    value={gender}
                />
            </div>
            <div className="character-card__row">
                <Attribute
                    label="Hair"
                    value={hair_color}
                />
                <Attribute
                    label="Skin"
                    value={skin_color}
                />
                <Attribute
                    label="Eyes"
                    value={eye_color}
                />
            </div>

            { /*language=SCSS*/}
            <style jsx>{`
              .character-card {
                display: flex;
                flex-direction: column;
                background-color: #272b30;
                color: #ffe300;
                padding: 10px;
                border-radius: 5px;
              }

              .character-card__name {
                font-size: 20px;
                font-weight: 600;
              }

              .character-card__row {
                display: flex;
                flex-wrap: wrap;
              }
            `}
            </style>
        </div>

    );
};

export default Character;
