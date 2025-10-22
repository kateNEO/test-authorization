import InputField from "./InputField";
import {useState} from "react";
import Button from "./Button.jsx";

import mailIcon from '../assets/mail.svg';
import passwordIcon from '../assets/password.svg';

function SignInContent({showVerification}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isDisabled = !email || !password;

    return (
        <div className='flex flex-col gap-4'>
            <h1 className="text-2xl font-medium leading-8 align-middle  tracking-wider">
                Sign in to your account to continue
            </h1>

            <InputField
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={mailIcon}
            />

            <InputField
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={passwordIcon}
            />

            <Button text='Log in' isDisabled={isDisabled} handlerClick={showVerification} />
        </div>
    )
}

export default SignInContent
