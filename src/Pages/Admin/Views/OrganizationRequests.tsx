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

export default function OrganizationRequests() {

const navigate = useNavigate();

const handleClick = (category: string) => {
   navigate(`/admin/${category}`);
};

const lists = [
   {
     View: "Goodwill's Request", 
   },
   {
     View: "Red Cross's Request",
   },
 		
 ]


return (
   <Table>

       <TableCaption>Click on Request to View More Details.</TableCaption>

       <TableHeader>

           <TableRow>

               <TableHead className="w-[200px]">Requests</TableHead>

           </TableRow>

       </TableHeader>

       <TableBody>

           {lists.map((list: { View: string }) => (

               <TableRow key={list.View}>

                   <TableCell className="font-large" onClick={() => { 
                           handleClick("OrganizationRequestsDetails");
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
