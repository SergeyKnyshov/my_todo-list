import {CounterActions} from "../dataActions/Counter";
import {useMutation, useQuery, useQueryClient} from "react-query";

export const useCounter = () => {
    const {data} = useQuery({
        queryKey: 'counter_value',
        queryFn: CounterActions.getValue
    });
    return {
        value: data,
    }
}

export const useCounterMutation = () => {
    const {value} = useCounter()

    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (newValue) => {
            return CounterActions.saveValue(newValue);
        },
        onSuccess: () => {
            queryClient.invalidateQueries('counter_value')
        }
    });

    const onIncreaseButtonClickHandle = () => {
        mutate(value + 1)
    }

    const onDecreaseButtonClickHandle = () => {
        if (value === 0) {
            return;
        }

        mutate(value - 1)
    }

    return {
        value: value,
        onIncreaseButtonClickHandle: onIncreaseButtonClickHandle,
        onDecreaseButtonClickHandle: onDecreaseButtonClickHandle
    }
}