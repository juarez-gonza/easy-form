import React from "react";

export function withCondition<T>(Component : React.ComponentType<T>) {
    return (props : Omit<T, "doRender"> & {doRender : boolean}): React.ReactElement => {
        const {doRender, ...childProps} = props;
        if (doRender)
            return <Component{...(childProps as unknown as T)} />;
        return <></>;
    };
}
