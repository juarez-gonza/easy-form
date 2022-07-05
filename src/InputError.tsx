import React from "react";

import {withCondition} from "./Helpers";

const base = "flex flex-col gap-2 p-4 text-sm";
const color = "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300";
const border = "rounded-lg";
const borderAccent = "border-t-4";

interface InputErrorProps {
    children: React.ReactNode
}

export function InputError(props: InputErrorProps): React.ReactElement {
    const {children} = props;
    return (
        <div
            className={`${base} ${color} ${border} ${borderAccent}`}
            role="alert"
        >
            <div className="flex items-center">
                <div>{children}</div>
            </div>
        </div>
    );
}

export const MaybeInputError = withCondition<InputErrorProps>(InputError);
