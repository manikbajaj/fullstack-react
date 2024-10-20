import { TasksCounter } from "@/components/tasksCounter/tasksCounter.jsx";

export default function Tasks() {
  return (
    <section className="flex flex-row w-full p-4 gap-8">
      <section className="flex basis-2/3 justify-center ">
        <div className="flex flex-col w-4/5 p-4">
          <h1 className="text-white font-bold text-2xl mb-8">
            Tasks as on: Wednesday, 1 Jan 2025
          </h1>
          <div className="flex justify-around">
            <TasksCounter count={12} type="todo" />
            <TasksCounter count={4} type="inProgress" />
            <TasksCounter count={10} type="completed" />
          </div>
        </div>
      </section>
      <section className="flex basis-1/3 bg-pink-400">
        Create Task Section
      </section>
    </section>
  );
}
