import React from "react";

import {useForm, SubmitHandler, FormProvider} from "react-hook-form";

export type FormSubmitHandler<Inputs> = SubmitHandler<Inputs>;

export type FormInputs = {[key: string]: string | number | boolean};

interface FormProps<Inputs> {
    onSubmit: FormSubmitHandler<Inputs>
    children: React.ReactNode
}

export function Form<Inputs extends FormInputs>(props: FormProps<Inputs>): React.ReactElement {
    const {onSubmit, children} = props;
    const methods = useForm<Inputs>();
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    );
}
