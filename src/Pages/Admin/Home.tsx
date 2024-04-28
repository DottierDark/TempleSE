import { Table ,   
	     TableBody,
	     TableCaption,
	     TableCell,
	     TableFooter,
	     TableHead,
	     TableHeader,
	     TableRow } 
		 from "../../Components/shadcn/ui/table";
import { useNavigate } from "react-router-dom";

export default function AdminHome() {
	const navigate = useNavigate();
	const handleClick = (category: string) => {
		navigate(`/donor/${category}`);
	};

	const lists = [
		{
		  View: "Organizations Submissions and Requests List",
		 
		},
		{
	      View: "Donors Submissions and Requests List",
		
		},
		{
	      View: "Registered Organizations List",
		
		},	
		
	  ]


	return (
		<Table>
			<TableCaption>Click on the list you wish to see.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[200px]">View</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{lists.map((list: { View: string }) => (
					<TableRow key={list.View}>
						<TableCell className="font-medium" onClick={() => { 
							if (list.View === "Organizations Submissions and Requests List") {
								handleClick("OrganizationRequests");
							} else if (list.View === "Donors Submissions and Requests List") {
								handleClick("DonorRequests");
							} else if (list.View === "Registered Organizations List") {
								handleClick("RegisteredOrganizations");
							}
						}}>
							{list.View}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
			</TableFooter>
		</Table>
	)

}
