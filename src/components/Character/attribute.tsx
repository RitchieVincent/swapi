import * as React from 'react';

interface AttributeProps {
    label: string;
    value: string;
    label2?: string;
}

const Attribute: React.FunctionComponent<AttributeProps> = ({label, value, label2}: AttributeProps): JSX.Element => (
    <span className="character-card__attribute">
        {label}: {value}{label2 && label2}

        { /*language=SCSS*/}
        <style jsx>{`
          .character-card__attribute {
            flex: 1;
            margin-top: 10px;
          }

          .character-card__attribute:not(:last-child) {
            margin-right: 10px;
            padding-right: 10px;
          }
        `}</style>
    </span>
);

export default Attribute;
