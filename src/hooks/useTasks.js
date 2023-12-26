import {useMutation, useQuery, useQueryClient} from "react-query";
import {TaskActions} from "../dataActions/Tasks";



export const useTasks = () => {
    const {data} = useQuery({
        queryFn: () => {
            return TaskActions.getValue()
        },
        queryKey: 'tasks'
    })

    return {
        data
    };
}
export const useAddNewTask = () => {
    const {data} = useTasks();

    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn:(title) => {
            if(Array.isArray(data)){
                const task = {
                    title,
                    isDone: false,
                    id: Date.now()
                };
                const newData = data.concat([task]);
                TaskActions.saveValue(newData)

            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('tasks')

        }
    })
    return{
        addNewTask: mutate
    }

}
export const useDeleteTask = () => {
    const { data } = useTasks();

    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: (taskId) => {
            if (Array.isArray(data)) {
                const newData = data.filter(task => task.id !== taskId);

                TaskActions.saveValue(newData);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        }
    });

    return {
        deleteTask: mutate
    };
}