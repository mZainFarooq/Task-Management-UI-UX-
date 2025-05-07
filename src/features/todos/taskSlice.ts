import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Collaborator = {
  id: string;
  name: string;
  username: string;
  avatar: string;
};

interface TaskData {
  taskId: string;
  title: string;
  description: string;
  status: string;
  dueDate: string;
  createdAt: any;
  collaborators: Collaborator[];
  // tags: { tagName: string }[];
  // list: { listName: string }[];
}

interface TaskState {
  tasks: TaskData[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<any>) => {
      state.tasks.push(action.payload);
    },
    setTasks: (state, action: PayloadAction<any>) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, setTasks } = taskSlice.actions;
export default taskSlice.reducer;
