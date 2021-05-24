import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, Icon, Text } from './styles/SignIn';

const SignIn = () => {
    return (
        <>
            <Container>
                <Icon to="/">
                    dolla
                </Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormInput type="email" required/>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormInput type="password" required/>
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </Container>
        </>
    )
}

export default SignIn;
