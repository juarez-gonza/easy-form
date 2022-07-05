import React from "react";

import {Select as FlowbiteSelect} from "flowbite-react";
import {useFormContext, Path, RegisterOptions} from "react-hook-form";

import {FormInputs} from "./Form";

import {WithChildren} from "./Helpers";
import {MaybeInputError} from "./InputError";

type AddedProps<Inputs extends FormInputs> = {options?: RegisterOptions<Inputs>, name: keyof Inputs};

type SelectProps<Inputs extends FormInputs> = WithChildren<React.ComponentProps<typeof FlowbiteSelect> & AddedProps<Inputs>>;

export function Select<Inputs extends FormInputs>(props: SelectProps<Inputs>): React.ReactElement {
    const {children, name, options = {}, ...rest} = props;
    const {register, formState: {errors}} = useFormContext<Inputs>();

    // cast to string: Message type defined by flowbite-react is an alias for string, but TS fails to recognize this.
    const hasError = errors[name] !== undefined ? true : false;
    const errorMessage: string = errors[name]?.message ? errors[name]?.message as string : "Hay un error en el campo, volver a intentar.";

    return (
        <>
            <MaybeInputError doRender={hasError}>
                <span>{errorMessage}</span>
            </MaybeInputError>
            <FlowbiteSelect {...rest} {...register(name as Path<Inputs>, {...options})}>
                {children}
            </FlowbiteSelect>
        </>
    );
}
