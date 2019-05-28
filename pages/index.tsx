import fetch from 'isomorphic-unfetch';
import Character from '../src/components/Character';
import * as React from "react";

const Index = props => (
    <div className="character-list">
        {props.characters && props.characters.map((character, index) => (
            <Character
                key={index}
                name={character.name}
                height={character.height}
                hair_color={character.hair_color}
                skin_color={character.skin_color}
                eye_color={character.eye_color}
                birth_year={character.birth_year}
                gender={character.gender}
            />
        ))}

        { /*language=SCSS*/}
        <style
            jsx
            global
        >{`
          body {
            background-color: #000;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
          }
        `}
        </style>

        { /*language=SCSS*/}
        <style jsx>{`
          .character-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: 10px;
          }
        `}
        </style>
    </div>
);

Index.getInitialProps = async () => {
    const data = await (await fetch('https://swapi.co/api/people/')).json();

    return {
        characters: [...data.results]
    }
};

export default Index;
