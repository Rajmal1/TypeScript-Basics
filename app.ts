// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'Guilherme',
//     age: 22,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Guilherme',
    age: 22,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Cooking']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role = Role.AUTHOR) {
    console.log('is author');

}
