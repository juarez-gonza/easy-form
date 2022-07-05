import React from "react";

import {Radio as FlowbiteRadio} from "flowbite-react";
import {useFormContext, Path, RegisterOptions} from "react-hook-form";

import {FormInputs} from "./Form";

type AddedProps<Inputs extends FormInputs> = {name: keyof Inputs, options?: RegisterOptions<Inputs>};

type RadioProps<Inputs extends FormInputs> = Omit<React.ComponentProps<typeof FlowbiteRadio>, keyof AddedProps<Inputs>>
& AddedProps<Inputs>;

export function Radio<Inputs extends FormInputs>(props: RadioProps<Inputs>): React.ReactElement {
    const {name, options = {}, ...rest} = props;
    const {register} = useFormContext<Inputs>();

    return <FlowbiteRadio {...rest} {...register(name as Path<Inputs>, {...options})}/>;
}
