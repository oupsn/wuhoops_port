import Card from "../component/card";

const projects = () => {
  return (
    <div id="projects" className="h-screen bg-zinc-100">
      <div className="grid grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default projects;
