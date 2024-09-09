import { Button } from "@nextui-org/button";
import { cn } from "../lib/utils";
import HomeIcon from "../icons/Home";

function SideBar(
  { className }: React.HTMLAttributes<HTMLDivElement>
) {
  return (
    <div className={cn("p-2", className)}>
      <div className="h-full flex flex-col space-y-2">
        <Button>
          <HomeIcon />
          Home
        </Button>
      </div>
    </div>
  );
}

export default SideBar;