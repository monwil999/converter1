import React from "react";


export const Result = ({ result }) => (
    <p className="result">
        {result !== undefined && (
            <>
            {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
            {""}
            <strong>
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>
            </>
        )}
    </p>

);