import InputField from "./InputField";
import React, {useState} from "react";

import mailIcon from '../assets/mail.svg';
import passwordIcon from '../assets/password.svg';

function SignInContent() {
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

            <button
                disabled={isDisabled}
                className={`w-full py-2 rounded-md text-sm font-light transition ${
                    isDisabled
                        ? "bg-gray-100 border border-gray-200 text-gray-400 opacity-80 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}>
                Log in
            </button>
        </div>
    )
}
export default SignInContent
