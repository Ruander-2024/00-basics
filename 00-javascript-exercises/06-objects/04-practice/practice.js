//Létrehozunk egy dog objektumot és most nem csak fieldeket adunk hozzá,
//hanem függvényeket is.
const dog = {
    name: '',
    age: '10',
    color: 'black',
    eyeColor: 'blue',
    //A setter paraméterben fogad egy értéket és azt állítja be a field értékének
    //A this kulcsszóval érjük el az objektum fieldjét 
    setName: function (name) {
        this.name = name;
    },
    //A getterrel elkérjük az objektum egy fieldjét
    getName: function () {
        return this.name;
    }

    //1. FELADAT
    //Írj a többi fieldhez is gettert és settert
};

dog.setName('Zorro');
console.log(dog.getName());

//2. FELADAT
//A getName függvény meghívásával írd ki az összes nevet a console-ra

////////////////////////////////////////////////////////////////////////////////////////////////////

//Literál esetén is adhatunk függvényeket az objektumnak
const videostore = [
    {
        title: 'Home alone',
        id: '',
        getTitle: function () {
            return this.title;
        },
        setId: function (id) {
            this.id = id;
        }
    },
    {
        title: 'The Lord of The Rings',
        id: '',
        getTitle: function () {
            return this.title;
        },
        setId: function (id) {
            this.id = id;
        }
    }
];

//3. FELADAT A getTitle() függvény hívásával írd ki az összes címet


//4. FELADAT: A setterek segítségével állítsd be mindkét objektum id-ját


//5. FELADAT: Majd írd ki az id-kat a console-ra
