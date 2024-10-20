import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function Task() {
  return (
    <Card className="w-full mb-8">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>The Title Of the Task</CardTitle>
        <Badge variant="outline">1 Jan, 2025</Badge>
      </CardHeader>
      <CardContent>
        <CardDescription>Description of the task</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex flex-row items-center">
          <Switch id="in-progress" />
          <Label className="ml-4" htmlFor="in-progress">
            In Progress
          </Label>
        </div>
        <Button>Completed</Button>
      </CardFooter>
    </Card>
  );
}
