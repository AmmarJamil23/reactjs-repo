import Tooltip from "./features/tooltip";

export default function App() {
  return (
    <div className="p-10 space-y-10 flex gap-10">
      <Tooltip text="Above tooltip" position="top" />

      <Tooltip text="Below tooltip" position="bottom" />

      <Tooltip text="Left tooltip" position="left" />

      <Tooltip text="Right tooltip" position="right" />
    </div>
  );
}
