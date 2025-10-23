import Button from "./Button.jsx";
import {useEffect, useRef, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {fetchMockAuthCode} from "../api/apiMock.js";

function VerificationContent() {
    const [code, setCode] = useState(Array(6).fill(""));
    const [time, setTime] = useState(0);
    const [error, setError] = useState(null);

    const { data, refetch } = useQuery({
        queryKey: ["auth-code"],
        queryFn: fetchMockAuthCode,
        enabled: false,
    });

    const inputsRef = useRef([]);
    const timerRef = useRef(null);

    const isComplete = code.every((c) => c !== "");
    const isCodeRight = (code.join('') === data?.code);

    const handleChange = (value, index) => {
        if (!/^\d?$/.test(value)) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        setError("");

        if (value && index < 5) {
            inputsRef.current[index + 1].focus();
        }

        if (newCode.every(c => c !== "")) {
            if (newCode.join("") !== data?.code) {
                setError("invalid code");
            } else {
                setError("");
            }
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    }

    const startTimer = (seconds) => {
        setTime(seconds);
        timerRef.current = setInterval(() => {
            setTime((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
    };

    const getCode = async () => {
        clearInterval(timerRef.current);
        setCode(Array(6).fill(""));
        setError(null);
        try {
            const { data: newData } = await refetch();
            if (newData?.error) return setError(newData.error);
            if (newData?.expiresIn) startTimer(newData.expiresIn);
        } catch (err) {
            setError("Something went wrong");
        }
    };

    useEffect(() => {
        getCode();
        return () => clearInterval(timerRef.current);
    }, []);

    return (
        <div className='flex flex-col items-center gap-4'>
            <h1 className="text-2xl font-medium leading-8 align-middle  tracking-wider">
                Two-Factor Authentication
            </h1>
            <p className='text-base font-light tracking-wide'>Enter the 6-digit code from the Google Authenticator app</p>

            <div className="flex gap-2 mb-2">
                {code.map((value, index) => (
                    <input
                        key={index}
                        ref={(el) => (inputsRef.current[index] = el)}
                        type="text"
                        maxLength="1"
                        value={value}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className={`w-10 h-12 text-center text-lg border rounded-md focus:outline-none focus:ring-2 ${
                            error
                                ? "border-red-400 focus:ring-red-300"
                                : "border-gray-300 focus:ring-blue-300"
                        }`}
                    />
                ))}
            </div>

            {error && (
                <p className="text-red-500 text-xs w-full text-left mb-2">
                    {error}
                </p>
            )}

            {time <= 0 ? (
                <Button text="Get new" isDisabled={isCodeRight} handlerClick={getCode} />
            ) : (
                isComplete && <Button text="Continue" isDisabled={!isCodeRight} />
            )}

        </div>
    )
}
export default VerificationContent;
