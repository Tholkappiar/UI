import { todo } from "../utils/Constants";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import { useEffect, useState } from "react";

const TodoList = () => {
	const [EditModalStatus, setEditModalStatus] = useState(false);
	const [DeleteModalStatus, setDeleteModalStatus] = useState(false);
	const [taskInput, setTaskInput] = useState("");
	const [tasks, setTasks] = useState([]);
	const [Id, setId] = useState("");

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(todo.base_url, {
				method: "GET",
			});
			const data = await response.json();
			console.log(data);
			setTasks(data);
		}
		fetchData();
	}, []);

	const AddData = async () => {
		try {
			const response = await fetch(todo.base_url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title: taskInput }),
			});
			if (!response.ok) {
				throw new Error("Failed to add task");
			}
			const newData = await response.json();
			setTasks([...tasks, newData]);
			setTaskInput("");
		} catch (error) {
			console.error("Error adding task:", error);
		}
	};

	const handleDone = async (id, title, completed) => {
		try {
			const response = await fetch(`${todo.base_url}/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title: title, completed: !completed }), // Toggle the completed status
			});
			if (!response.ok) {
				throw new Error("Failed to toggle task completion");
			}
			const updatedTask = await response.json();
			const updatedTasks = tasks.map((task) =>
				task.id === updatedTask.id ? updatedTask : task
			);
			setTasks(updatedTasks);
		} catch (error) {
			console.error("Error toggling task completion:", error);
		}
	};

	const handleDelete = (id) => {
		const updatedTasks = tasks.filter((task) => task.id !== id);
		setTasks(updatedTasks);
	};

	const handleEdit = (id, newTitle) => {
		const updatedTasks = tasks.map((task) =>
			task.id === id ? { ...task, title: newTitle } : task
		);
		setTasks(updatedTasks);
	};

	return (
		<>
			<div className="container mx-auto flex flex-col justify-between items-center p-20">
				<p className="text-5xl font-semibold text-center">Todo</p>
				<div className="flex justify-center m-4 space-x-4">
					<input
						type="text"
						name="task"
						value={taskInput}
						onChange={(e) => setTaskInput(e.target.value)}
						placeholder="Task..."
						className="p-2 border-2 border-black rounded-lg shadow-lg"
					/>
					<button
						onClick={AddData}
						className="p-2 w-20 bg-blue-400 rounded-lg text-white font-semibold hover:opacity-80 shadow-lg"
					>
						Add
					</button>
				</div>
				<div className="m-10 w-full flex flex-col justify-center items-center">
					{tasks.map((task) => (
						<div key={task.id} className="flex w-2/3 justify-around m-4">
							<p
								className={`text-xl w-1/2 flex items-center justify-center ${
									task.completed ? "line-through" : ""
								}`}
							>
								{task.title}
							</p>
							<div className="w-1/2 flex justify-around items-center">
								<button
									onClick={() => {
										setEditModalStatus(true);
										setId(task.id);
									}}
									className="bg-blue-500 p-2 rounded-lg shadow-md text-white font-semibold w-20 hover:opacity-80"
								>
									Edit
								</button>
								<button
									onClick={() => {
										setDeleteModalStatus(true);
										setId(task.id);
									}}
									className="bg-red-500 p-2 rounded-lg shadow-md text-white font-semibold w-20 hover:opacity-80"
								>
									Delete
								</button>
								<button
									onClick={() =>
										handleDone(task.id, task.title, task.completed)
									}
									className="bg-green-500 p-2 rounded-lg shadow-md text-white font-semibold w-20 hover:opacity-80"
								>
									Done
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<EditModal
				modalStatus={EditModalStatus}
				setModal={setEditModalStatus}
				editId={Id}
				onUpdate={handleEdit}
			/>
			<DeleteModal
				modalStatus={DeleteModalStatus}
				setModal={setDeleteModalStatus}
				deleteId={Id}
				onDelete={handleDelete}
			/>
		</>
	);
};

export default TodoList;
