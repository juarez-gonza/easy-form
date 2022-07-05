import React, {useState} from "react";
import "./App.css";

import {Button, Label, Modal} from "flowbite-react";

import {Form, FormInputs, FormSubmitHandler} from "./Form";
import {Input} from "./Input";
import {Select} from "./Select";
import {Checkbox} from "./Checkbox";
import {Radio} from "./Radio";
import {Textarea} from "./Textarea";

interface Inputs extends FormInputs {
    email: string;
    country: string;
    starwars: string;
    textfield: string;
    accept: boolean;
    age: boolean;
}

function App(): React.ReactElement {

    const [show, setShow] = useState(false);

    const onSubmit: FormSubmitHandler<Inputs> = (data) => {
        console.log("============== Inicio FormSubmitHandler() ==============");
        console.log(data);
        console.log("============== Fin FormSubmitHandler() ==============");
    };

    function showModal(): void {
        setShow(true);
    }

    return (
        <div className="App">
            <Button onClick={showModal}>Mostrar formulario</Button>
            <Modal show={show}>
                <Modal.Header>Form Demo</Modal.Header>
                <Form<Inputs> onSubmit={onSubmit}>
                    <Modal.Body>
                        <div className="py-2">
                            <Input<Inputs> type="text" name="email" options={{minLength: {message: "Needs at least 10 characters", value: 10}, required: true}}/>
                        </div>
                        <div className="py-2">
                            <Select<Inputs> name="country" options={{required: true}}>
                                <option>Argentina</option>
                                <option>Spain</option>
                                <option>United States</option>
                            </Select>
                        </div>
                        <div className="py-2">
                            <Textarea<Inputs> name="textfield" options={{maxLength: {message: "Has to be least than 255 characters", value: 255}}}/>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio<Inputs> value="starwars1" id="starwars1" name="starwars" options={{required: true}}/>
                            <Label htmlFor="starwars1" value="Chapter I"/>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio<Inputs> value="starwars2" id="starwars2" name="starwars"/>
                            <Label htmlFor="starwars2" value="Chapter II"/>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio<Inputs> value="starwars3" id="starwars3" name="starwars"/>
                            <Label htmlFor="starwars3" value="Chapter III"/>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio<Inputs> value="starwars4" id="starwars4" name="starwars"/>
                            <Label htmlFor="starwars4" value="Chapter IV"/>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio<Inputs> value="starwars5" id="starwars5" name="starwars"/>
                            <Label htmlFor="starwars5" value="Chapter V"/>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio<Inputs> value="starwars6" id="starwars6" name="starwars"/>
                            <Label htmlFor="starwars6" value="Chapter VI"/>
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox<Inputs> name="accept" options={{required: true}}/>
                            <Label htmlFor="accept">
                                I agree to the{" "}
                                <a
                                    href="/forms"
                                    className="text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    terms and conditions
                                </a>
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox<Inputs> name="age" id="age"/>
                            <Label htmlFor="age">
                                I am 18 years or older
                            </Label>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit">Submit!</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}


/* eslint-disable */
export default App;
/* eslint-enable */
