import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "./components/utils/ThemeToggle";

function App() {
  return (
    <div className="p-6 space-y-4">
      <ThemeToggle></ThemeToggle>

      <div className="space-x-4">
        <Button variant="primary" size="lg">
          Button
        </Button>
        <Button variant="secondary" size="lg">
          Button
        </Button>
        <Button variant="destructive" size="lg">
          Button
        </Button>
        <Button variant="glass" size="lg">
          Button
        </Button>
        <Button variant="glass" size="md">
          Button
        </Button>
        <Button variant="glass" size="sm">
          Button
        </Button>
      </div>

      <div className="space-x-4 space-y-4 max-w-md flex flex-cols-2">
        <Input
          placeholder="Enter input..."
          className="glass focus:ring-blue-100 focus:ring-2"
        ></Input>
      </div>

      <Card className="glass max-w-xl pb-24">
        <h2 className="text-2xl text-cream">Card Title</h2>
        <p className="text-sm text-gray-500 pt-2">Username</p>
        <div className="space-y-2">
          <Input
            placeholder="Enter input..."
            className="glass focus:ring-blue-100 focus:ring-2"
          ></Input>
        </div>
        <p className="text-sm text-gray-500 pt-2">Password</p>
        <div className="space-y-2">
          <Input
            placeholder="Enter input..."
            className="glass focus:ring-blue-100 focus:ring-2"
          ></Input>
        </div>
      </Card>

      <Label htmlFor="email">Label</Label>
      <Input id="email" className="glass max-w-md"></Input>
    </div>
  );
}

export default App;
