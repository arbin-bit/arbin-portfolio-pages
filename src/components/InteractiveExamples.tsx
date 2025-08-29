import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Plus, Minus, RotateCcw } from "lucide-react";

export const TaskManager = () => {
  const [tasks, setTasks] = useState(["Learn JavaScript fundamentals", "Build interactive applications"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Card className="bg-gradient-card border-border shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">Task Manager</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            className="flex-1"
          />
          <Button onClick={addTask} variant="default">Add</Button>
        </div>
        <div className="space-y-2">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="text-foreground">{task}</span>
              <Button
                onClick={() => deleteTask(index)}
                variant="destructive"
                size="sm"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
    animate();
  };

  const handleDecrement = () => {
    setCount(count - 1);
    animate();
  };

  const handleReset = () => {
    setCount(0);
    animate();
  };

  const animate = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200);
  };

  return (
    <Card className="bg-gradient-card border-border shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">Counter Example</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className={`text-6xl font-bold mb-6 transition-all duration-200 ${
          isAnimating ? 'scale-125' : 'scale-100'
        } ${count > 0 ? 'text-primary' : count < 0 ? 'text-destructive' : 'text-muted-foreground'}`}>
          {count}
        </div>
        <div className="flex gap-2 justify-center">
          <Button onClick={handleDecrement} variant="outline" size="sm">
            <Minus className="w-4 h-4" />
          </Button>
          <Button onClick={handleReset} variant="secondary" size="sm">
            <RotateCcw className="w-4 h-4" />
          </Button>
          <Button onClick={handleIncrement} variant="default" size="sm">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};