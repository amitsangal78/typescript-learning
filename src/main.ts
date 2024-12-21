// 1. Diff b/w implicit and explicit types

let firstName: string = 'John';
const lastName = 'Doe';

console.log('Hello, ' + firstName + ' ' + lastName);

// Generics
const addUpdatedAt = <T extends string>(value: T): T | { value: T; updatedAt: Date } => {
    if (typeof value === 'string') {
        return value;
    } else {
        return { value,
            updatedAt: new Date(),
        };
    }
};