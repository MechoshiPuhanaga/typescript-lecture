// ************** string **************
const name = 'Mechoshi';

// type is inferred so no type annotation is needed:
let surname = 'Puhanag';

surname = 'Puhanaga';

console.log(`${name} ${surname}`);

// ************** boolean **************
let isCat = true;
isCat = false;

console.log(isCat);

// ************** number **************
let favoriteNumber = 10;
favoriteNumber = 12;

console.log(favoriteNumber);

// ************** array **************
const favoriteNumbers = [10];
favoriteNumbers.push(12);

console.log(favoriteNumbers);

// ************** any **************
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const obj: any = {
  age: 7
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
console.log(obj.name);

// ************** functions **************
// return type annotation is not needed:
function printName(name: string): number {
  console.log(`Name is: ${name}`);

  return name.length;
}

printName(name);

function printFullName({
  name,
  surname
}: {
  name: string;
  surname?: string; // optional
}) {
  console.log(`${name} ${typeof surname !== 'undefined' ? surname : ''}`);
}

printFullName({ name: 'John', surname: 'Snow' });
printFullName({ name: 'John' });

// ************** union **************

const cat = {
  age: 7,
  name: 'Tom'
};

const mouse = {
  isCute: true,
  name: 'Jerry'
};

const printHero = (hero: typeof cat | typeof mouse) => {
  console.log(hero.name);
};

printHero({ name: 'Jack', age: 8 });

// ************** type aliases **************

type Cat = {
  age: number;
  name: string;
};

const tom: Cat = {
  age: 7,
  name: 'Tom'
};

const printCat = (cat: Cat) => {
  console.log(`Cat - name: ${cat.name}, age: ${cat.age}`);
};

printCat(tom);

// ************** interfaces **************

interface Animal {
  age: number;
  name: string;
}

const jerry: Animal = {
  age: 3,
  name: 'Jerry'
};

const printAnimal = (animal: Animal) => {
  console.log(`Animal - name: ${animal.name}, age: ${animal.age}`);
};

printAnimal(tom);
printAnimal(jerry);

export {};
