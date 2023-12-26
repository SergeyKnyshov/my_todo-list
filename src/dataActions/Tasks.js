export const TaskActions = {
    saveValue: (value) => {
        return new Promise((resolve, reject) => {
            let valueToSave = value;
            if (!value) {
                valueToSave = [];
            }
            localStorage.setItem('tasks', JSON.stringify(valueToSave));
            resolve();
        })
    },
    getValue: () => {
        return new Promise((resolve, reject) => {
            const savedValue = localStorage.getItem('tasks');
            if (!savedValue) {
                resolve([]);
                return;
            }
            resolve(JSON.parse(savedValue));
        })
    }
}