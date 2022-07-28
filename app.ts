const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: 'Guilherme',
    age: 22,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Cooking']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
