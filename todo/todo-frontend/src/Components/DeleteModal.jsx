import { todo } from "../utils/Constants";
// eslint-disable-next-line react/prop-types
const DeleteModal = ({ modalStatus, setModal, deleteId, onDelete }) => {
	const handleDelete = async () => {
		try {
			const response = await fetch(`${todo.base_url}/${deleteId}`, {
				method: "DELETE",
			});
			if (!response.ok) {
				throw new Error("Failed to delete task");
			}
			onDelete(deleteId);
			setModal(false);
		} catch (error) {
			console.error("Error deleting task:", error);
		}
	};

	return (
		<div
			className={`flex-col items-center justify-center h-screen w-screen fixed top-0 z-10 bg-gray-500 bg-opacity-75 transition-opacity ${
				modalStatus ? "flex" : "hidden"
			}`}
		>
			<div className="bg-white pt-10 w-full sm:w-1/2 md:w-1/2 max-w-[550px] flex flex-col justify-center items-center space-y-4 rounded-lg">
				<div className="flex flex-col items-center justify-center w-full">
					<div className="flex space-x-6">
						<div className="rounded-full bg-red-100 size-8 flex justify-center items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="#eb3f3f"
								className="w-4 h-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
								/>
							</svg>
						</div>
						<div className="mb-2">
							<p className="font-medium">Delete</p>
							<p className="text-sm text-gray-600">
								Are you sure, you want to delete ?
							</p>
						</div>
					</div>
					<div className="bg-gray-200 w-full p-4 flex justify-end space-x-4 rounded-b-lg">
						<button
							onClick={() => setModal(false)}
							className="p-2 bg-gray-400 text-white font-semibold hover:opacity-80 rounded-lg"
						>
							Cancel
						</button>
						<button
							onClick={handleDelete}
							className="p-2 bg-red-600 text-white font-semibold hover:opacity-80 rounded-lg"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteModal;
