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
     View: "Organization 1", 
   },
   {
     View: "Organization 2",
   },
   {
     View: "Organization 3",
   },		
 ]


return (
   <Table>

       <TableCaption>Click on Request to View More Details.</TableCaption>

       <TableHeader>

           <TableRow>

               <TableHead className="w-[200px]">View</TableHead>

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
