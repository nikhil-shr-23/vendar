import { Sheet, SheetContent, SheetHeader,SheetTitle } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link";

interface NavbarItem{
    href: string,
    children: React.ReactNode,
}

interface Props{
    items:NavbarItem[],
    open: boolean,
    onOpenChange: (open:boolean)=>void;

}

export const NavbarSidebar=({
    items,open,onOpenChange
           }:Props)=>{

    return(
        <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="p-0 transition-none" side="left">
            <SheetHeader className="p-4 border-b-2 ">
              
                    <SheetTitle>
                        Menu
                    </SheetTitle>
     
            </SheetHeader>
            <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2 font-medium"> 
                {items.map((item)=>(
                    <Link key={item.href} 
                          href={item.href} 
                          onClick={()=>onOpenChange(false)}
                          className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center">
                            {item.children} 
                          
                    </Link>
                ))}
                <div className="border-t-2">
                    <Link  
                    onClick={()=>onOpenChange(false)}
                    className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center"
                    href='/sign-in'> Log-In
                    </Link>
                    <Link 
                    onClick={()=>onOpenChange(false)}
                    className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center"
                    href='/sign-up'> Start Selling
                    </Link>


                </div>

            </ScrollArea>

        </SheetContent>
        </Sheet>

    )
}