import { Table ,   
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow } 
    from "../../../Components/shadcn/ui/table"; 

import { useNavigate } from "react-router-dom";

export default function RegisteredOrganizations() {

const navigate = useNavigate();

const handleClick = (category: string) => {
   navigate(`/admin/${category}`);
};

const lists = [
    {
      name: "Hope Shelter",
      type: "Non-profit",
      adress: "123 Main St, Anytown, CA 12345",
      email: "hope@shelter.com",
    },
    {
      name: "Salavation Army",
      type: "Non-profit",
      adress: "789 Oak St, Anytown, CA 12345",
      email: "sal@gmail.com",
    },
   
  ]
return (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Adress</TableHead>
                <TableHead>Email</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
                {lists.map((list) => (
                        <TableRow key={list.name}>
                                <TableCell className="font-medium">{list.name}</TableCell>
                                <TableCell>{list.type}</TableCell>
                                <TableCell>{list.adress}</TableCell>
                                <TableCell>{list.email}</TableCell>
                                
                        </TableRow>
                ))}
        </TableBody>
        <TableFooter>
            <TableRow>
                
            </TableRow>
        </TableFooter>
    </Table>
)
}