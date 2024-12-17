export function TasksCounter({ type = "todo", count = 0 }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`p-6 border-solid ${type === "todo" && "border-red-500"}  ${
          type === "inProgress" && "border-orange-500"
        }  ${
          type === "completed" && "border-green-500"
        } border-4 rounded-full mb-4`}
      >
        <div className="min-w-10 min-h-10 text-white text-3xl text-center flex justify-center leading-10">
          {count}
        </div>
      </div>
      <div className="text-white text-xl text-center">{type}</div>
    </div>
  );
}
