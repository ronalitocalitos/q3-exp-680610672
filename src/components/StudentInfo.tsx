import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <div className="flex-1 p-4">
      <Drawer swipeDirection="left">
        <DrawerTrigger>
          <button className="border border-blue-500 rounded-md px-2 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Nutthanon Yasawute
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
            <DrawerDescription>
              student information
            </DrawerDescription>
          </DrawerHeader>
          <div className="text-center">
            <p className="text-lg font-semibold">Nutthanon Yasawute</p>
            <p className="text-sm text-muted-foreground">Student ID: 680610672</p>
            <p className="text-sm text-muted-foreground">CPE207 - Web Application Development</p>
          </div>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
