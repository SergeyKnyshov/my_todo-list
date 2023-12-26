export const CounterActions = {
    saveValue: (value) => {
        return new Promise((resolve, reject) => {
            let valueToSave = value;
            if (!value) {
                valueToSave = 0;
            }
            localStorage.setItem('value', valueToSave);
            resolve();
        })
    },
    getValue: () => {
        return new Promise((resolve, reject) => {
            const savedValue = localStorage.getItem('value');
            if (!savedValue || isNaN(savedValue)) {
                return 0;
            }
            resolve(parseInt(savedValue, 10));
        })
    }
}