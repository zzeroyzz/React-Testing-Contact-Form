import React from "react";
import { render, fireEvent } from "@testing-library/react"
import ContactForm from "./ContactForm";
import App from "../App";

test("renders App without crashing or errors", () =>{
    render(<App />);
});

test("tests, the firstname field, and it's validilty", () =>{
    const {getByTestId} = render(<ContactForm />)
    const firstNameInput = getByTestId("firstname")
    fireEvent.change(firstNameInput, {target:{value:"Fuji"}})
    expect(firstNameInput).toHaveValue("Fuji")
})

test("tests, the firstname field, and it's validilty", () =>{
    const {getByTestId} = render(<ContactForm />)
    const lastNameInput = getByTestId("lastname")
    fireEvent.change(lastNameInput, {target:{value:"hernandez"}})
    expect(lastNameInput).toHaveValue("hernandez")
})


test('this test tests the email field, and its validilty', () =>{
    const {getByTestId} = render(<ContactForm />)
    const emailInput = getByTestId("email")
    fireEvent.change(emailInput, {target:{value:"email@email.com"}})
    expect(emailInput).toHaveValue("email@email.com")
})

