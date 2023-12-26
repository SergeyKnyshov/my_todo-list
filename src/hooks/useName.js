import {useMutation, useQuery, useQueryClient} from "react-query";
import {NameActions} from '../dataActions/Name'

export const useName = ({onSuccessSaving}) => {
    const {data: name} = useQuery({
        queryKey: 'name-key',
        queryFn: () => {
            return NameActions.getValue()
        }
    })

    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (newName) => {
            return NameActions.setValue(newName)
        },
        onSuccess: () => {
            queryClient.invalidateQueries('name-key')
            if(onSuccessSaving()) {
                onSuccessSaving();
            }
        }
    })

    const saveName = (newName) => {
        mutate(newName);
    }

    return {
        name,
        saveName
    }
}