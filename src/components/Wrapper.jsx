import SignInContent from "./SignInContent";


function Wrapper() {


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white rounded-md w-[440px] h-[374px] p-8 text-center">
                <div className="flex justify-center items-center mb-6">
                    <div className="w-[24px] h-[24px] rounded-full bg-blue-600 mr-2 flex items-center justify-center">
                        <div className="w-[12px] h-[12px] rounded-full bg-white"></div>
                    </div>
                    <span className="font-medium text-sm">Company</span>
                </div>
                <SignInContent/>
            </div>
        </div>
    );
}

export default Wrapper
