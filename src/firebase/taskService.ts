import toast from "react-hot-toast";
import { addTask } from "../features/todos/taskSlice";
import { db } from "./firebaseConfig";
import { doc, collection, setDoc, getDocs } from "firebase/firestore";

type Collaborator = {
  id: string;
  name: string;
  username: string;
  avatar: string;
};

type Tag = {
  tag: string;
};

type List = {
  listName: string;
};

type TaskData = {
  title: string;
  description: string;
  collaborators: Collaborator[];
  tags: Tag[];
  list: List[];
  dueDate: string;
};

export const addTaskToUser = async (
  userId: string,
  taskData: TaskData,
  dispatch: Function
) => {
  try {
    const userRef = doc(db, "users", userId);
    const tasksRef = collection(userRef, "tasks");

    const newTaskRef = doc(tasksRef);

    const newTask = {
      ...taskData,
      createdAt: new Date().toISOString(),
      taskId: newTaskRef.id,
      status: "pending",
    };

    await setDoc(newTaskRef, newTask);
    dispatch(addTask(newTask));
    console.log("Task added with ID:", newTaskRef.id);
    toast.success("Task added sucesfully");
  } catch (error) {
    toast.error("Something Wrong");
    console.error("Error adding task:", error);
  }
};

export const fetchTasks = async (userId: string) => {
  try {
    const userRef = doc(db, "users", userId);
    const tasksRef = collection(userRef, "tasks");

    const querySnapshot = await getDocs(tasksRef);

    const tasks = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("Tasks:", tasks);

    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};
