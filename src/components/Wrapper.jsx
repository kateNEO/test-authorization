import SignInContent from "./SignInContent";
import {useState} from "react";
import VerificationContent from "./VerificationContent.jsx";

import back from '../assets/back.svg';

function Wrapper() {
const [showVerification, setShowVerification] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="relative bg-white rounded-md w-[440px] h-[374px] p-8 text-center">
                {showVerification && (
                    <button
                        onClick={()=>setShowVerification(false)}
                        className='absolute left-6 top-10 -translate-y-1/2 p-2 rounded hover:bg-gray-100'>
                        <img src={back} alt='back'/>
                    </button>
                )}
                <div className="flex justify-center items-center mb-6">
                    <div className="w-[24px] h-[24px] rounded-full bg-blue-600 mr-2 flex items-center justify-center">
                        <div className="w-[12px] h-[12px] rounded-full bg-white"></div>
                    </div>
                    <span className="font-medium text-sm">Company</span>
                </div>
                {showVerification ? (<VerificationContent />) : (<SignInContent showVerification={setShowVerification} />)}
            </div>
        </div>
    );
}

export default Wrapper
