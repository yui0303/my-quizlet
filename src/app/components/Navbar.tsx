import { Button } from "@nextui-org/button";
import { cn } from "../lib/utils";
import MenuIcon from "../icons/Menu";

function Navbar(
  { className } : React.HTMLAttributes<HTMLDivElement> 
) {
  return (
    <div className={cn("p-2 h-12 w-full", className)}>
      <Button>
        <MenuIcon />
      </Button>
    </div>
  );
}

export default Navbar;