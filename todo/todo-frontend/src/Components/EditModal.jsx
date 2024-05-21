import { useState } from "react";
import { todo } from "../utils/Constants";

// eslint-disable-next-line react/prop-types
const EditModal = ({ modalStatus, setModal, editId, onUpdate }) => {
	const [editInput, setEditInput] = useState("");
	const handleUpdate = async () => {
		try {
			const response = await fetch(`${todo.base_url}/${editId}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title: editInput }),
			});
			if (!response.ok) {
				throw new Error("Failed to update task");
			}
			onUpdate(editId, editInput);
			setModal(false);
		} catch (error) {
			console.error("Error updating task:", error);
		}
	};

	return (
		<div
			className={`flex-col items-center justify-center h-screen w-screen fixed top-0 z-10 bg-gray-500 bg-opacity-75 ${
				modalStatus ? "flex" : "hidden"
			}`}
		>
			<div className="bg-white p-10 flex flex-col justify-center items-center space-y-4 rounded-lg">
				<div className="flex space-x-2 items-center justify-center">
					<p className="font-semibold">Edit Task</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-4 h-4"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
						/>
					</svg>
				</div>
				<input
					className="border-2 border-black rounded-lg p-2"
					value={editInput}
					onChange={(e) => setEditInput(e.target.value)}
				/>
				<div className="flex items-center justify-center space-x-4">
					<button
						onClick={handleUpdate}
						className="p-2 bg-blue-500 text-white font-semibold hover:opacity-80 rounded-lg"
					>
						Update
					</button>
					<button
						onClick={() => setModal(false)}
						className="p-2 bg-orange-500 text-white font-semibold hover:opacity-80 rounded-lg"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditModal;
