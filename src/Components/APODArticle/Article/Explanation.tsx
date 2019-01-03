import React from 'react';


interface IExplanationProps extends React.Props<any> {
    explanation: string;
}

function Explanation({ explanation }: IExplanationProps) {
    return (
        <p className="explanation">
            {explanation}
        </p>
    );
}

export default Explanation;
