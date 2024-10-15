import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Signup() {
  return (
    <section className="flex flex-row max-w-screen-xl min-h-screen w-full justify-center items-center">
      <div className="h-20 w-4/12">
        <Card>
          <CardHeader>
            <CardTitle>Signup</CardTitle>
            <CardDescription>
              Create a new account to start creating tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
