import { Card } from "@/components/ui/card";
import Cookies from "js-cookie";
import { CreateTaskForm } from "../createTaskForm/createTaskForm.jsx";
import { Logout } from "../logout/logout.jsx";
import { UserProfile } from "../userProfile/userProfile.jsx";
import styles from "./style.module.css";

export function TaskSidebar() {
  const user = JSON.parse(Cookies.get("user"));

  return (
    <section className={`fixed right-4 top-4 ${styles.sidebarHeight}`}>
      <Card className="flex flex-col w-full h-full p-6 justify-between">
        <UserProfile firstName={user.firstName} />
        <CreateTaskForm />
        <Logout />
      </Card>
    </section>
  );
}
