import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Navbar } from "./components/utils/Navbar";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Checkbox } from "./components/ui/checkbox";
import { Label } from "./components/ui/label";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Switch } from "./components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown";

function App() {
  return (
    <div className="p-6 space-y-4">
      <Navbar></Navbar>

      <div className="space-x-4">
        <Button variant="primary" size="sm">
          Primary
        </Button>
        <Button variant="secondary" size="sm">
          Secondary
        </Button>
        <Button variant="destructive" size="sm">
          Destructive
        </Button>
        <Button variant="ghost" size="sm">
          Ghost
        </Button>
      </div>

      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your profile information.</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-foreground">
            This is the main card content.
          </p>
        </CardContent>

        <CardFooter>
          <Button variant="primary" size="sm">
            Save
          </Button>
          <Button variant="secondary" size="sm">
            Cancel
          </Button>
        </CardFooter>
      </Card>

      <div className="space-x-2">
        <Badge>Badge</Badge>
        <Badge variant={"secondary"}>Badge</Badge>
        <Badge variant={"destructive"}>Badge</Badge>
        <Badge variant={"outline"}>Badge</Badge>
      </div>

      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your profile information.</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-foreground">
            This is the main card content.
          </p>
        </CardContent>

        <Separator />
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your profile information.</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-foreground">
            This is the main card content.
          </p>
        </CardContent>
      </Card>

      <Textarea className="min-w-md" />

      <div className="flex items-center gap-2">
        <Checkbox id="terms"></Checkbox>
        <Label htmlFor="terms">Accept terms</Label>
      </div>

      <div className="flex items-center gap-2">
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center gap-2">
            <RadioGroupItem id="r1" value="default"></RadioGroupItem>
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="r2" value="comfortable"></RadioGroupItem>
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="r3" value="compact"></RadioGroupItem>
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex items-center gap-2">
        <Switch id="notifications" />
        <Label htmlFor="notification">Enable notifications</Label>
      </div>

      <Select>
        <SelectTrigger className="w-md">
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here.
              </DialogDescription>
            </DialogHeader>

            <div className="py-4">Dialog content goes here.</div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary" size={"md"}>
                  Cancel
                </Button>
              </DialogClose>

              <Button size={"md"}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">Open</Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default App;
