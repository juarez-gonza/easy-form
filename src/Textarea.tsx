import React from "react";

import {Textarea as FlowbiteTextarea} from "flowbite-react";
import {useFormContext, Path, RegisterOptions} from "react-hook-form";

import {FormInputs} from "./Form";

import {MaybeInputError} from "./InputError";

type AddedProps<Inputs extends FormInputs> = {name: keyof Inputs, options?: RegisterOptions<Inputs>};

type TextareaProps<Inputs extends FormInputs> = Omit<React.ComponentProps<typeof FlowbiteTextarea>, keyof AddedProps<Inputs>> & AddedProps<Inputs>;

export function Textarea<Inputs extends FormInputs>(props: TextareaProps<Inputs>): React.ReactElement {
    const {name, options = {}, ...rest} = props;
    const {register, formState: {errors}} = useFormContext<Inputs>();

    // cast to string: Message type defined by flowbite-react is an alias for string, but TS fails to recognize this.
    const hasError = errors[name] !== undefined ? true : false;
    const errorMessage: string = errors[name]?.message ? errors[name]?.message as string : "Hay un error en el campo, volver a intentar.";

    return (
        <>
            <MaybeInputError doRender={hasError}>
                <span>{errorMessage}</span>
            </MaybeInputError>
            <FlowbiteTextarea {...rest} {...register(name as Path<Inputs>, {...options})}/>
        </>
    );
}
