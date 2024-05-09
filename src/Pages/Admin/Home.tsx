import { useNavigate } from "react-router-dom";
import DonorRequestsList from "../../assets/Images/DonorsRequestsLists.jpeg";
import OrganizationRequestsList from "../../assets/Images/OrganizationsRequestsLists.jpeg";
import RegistredOrganizations from "../../assets/Images/RegistredOrganizations.jpeg";
export default function AdminHome() {
    const navigate = useNavigate();
    const handleClick = (category: string) => {
        navigate(`/admin/${category}`);
    };
    const imgsrc = {
        DonorRequestsList: DonorRequestsList,
        OrganizationRequestsList: OrganizationRequestsList,
        RegistredOrganizations: RegistredOrganizations,
    };
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="grid h-[50%] w-[50%] grid-cols-3 grid-rows-2 items-center justify-center gap-20">
                <div
                    className="flex h-full w-full flex-col items-center justify-center transition-all hover:scale-[125%]"
                    onClick={() => {
                        handleClick("RegisteredOrganizations");
                    }}
                >
                    <img
                        src={imgsrc.RegistredOrganizations}
                        alt="RegistredOrganizations"
                        style={{ width: "100%", height: "auto" }}
                    />
                    <h1>Registered Organizations</h1>
                </div>
                <div
                    className="flex h-full w-full flex-col items-center justify-center  transition-all hover:scale-[125%]"
                    onClick={() => {
                        handleClick("OrganizationsRequests");
                    }}
                >
                    <img
                        src={imgsrc.OrganizationRequestsList}
                        alt="OrganizationRequestsList"
                        style={{ width: "100%", height: "auto" }}
                    />
                    <h1>Requests from Organizations</h1>
                </div>
                <div
                    className="flex h-full w-full flex-col items-center justify-center  transition-all hover:scale-[125%]"
                    onClick={() => {
                        handleClick("DonorRequests");
                    }}
                >
                    <img
                        src={imgsrc.DonorRequestsList}
                        alt="DonorRequestsLists"
                        style={{ width: "100%", height: "auto" }}
                    />
                    <h1>Requests from Donor</h1>
                </div>
            </div>
        </div>
    );
}

