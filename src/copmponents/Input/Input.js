import React  , { memo }from 'react';

const Input = (props) => {
    console.log("render input")

    return (
        <div className="row">

            <div className="input-field col s12">
                <input
                    className="validate"
                    {...props}
                />
            </div>
        </div>
    );
};

export default memo(Input);