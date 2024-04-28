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
     View: "Red Cross", 
   },
   {
     View: "UNICEF",
   },
   {
     View: "Doctors Without Borders",
   },		
 ]


return (
   <Table>

       <TableCaption>Click on Organization to View More Details.</TableCaption>

       <TableHeader>

           <TableRow>

               <TableHead className="w-[200px]">Organizations</TableHead>

           </TableRow>

       </TableHeader>

       <TableBody>

           {lists.map((list: { View: string }) => (

               <TableRow key={list.View}>

                   <TableCell className="font-large" onClick={() => { 
                           handleClick("RegisteredOrganizationsDetails");
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
