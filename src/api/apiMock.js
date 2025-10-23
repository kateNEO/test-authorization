const generateRandomCode = () => {
    const arr = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10));
    return arr.join("");
};

export const fetchMockAuthCode = async () => {
    await new Promise((res) => setTimeout(res, 300));
    const code = generateRandomCode();
    console.log("Valid code:", code);
    return {
        code,
        expiresIn: 30,
    };
};
