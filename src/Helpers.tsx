import React from "react";

export function withCondition<T>(Component: React.ComponentType<T>) {
    return (props: Omit<T, "doRender"> & {doRender: boolean}): React.ReactElement => {
        const {doRender, ...childProps} = props;
        return doRender ? <Component {...(childProps as unknown as T)}/> : <></>;
        // explanation for double cast: TS lost info of childProps as type T
        // after destructuring props parameter.
    };
}

export type WithChildren<T> = Omit<T, "children"> & {children?: React.ReactNode};
