export const NameActions = {
    getValue: () => {
        return new Promise((resolve, reject) => {
            const name = localStorage.getItem('name');
            if (!name) {
                resolve('');
            }
            resolve(name);
        })
    },
    setValue: (name) => {
        return new Promise((resolve, reject) => {
            localStorage.setItem('name', name);
            resolve();
        })
    }
}
