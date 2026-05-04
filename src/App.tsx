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
    </div>
  );
}

export default App;
