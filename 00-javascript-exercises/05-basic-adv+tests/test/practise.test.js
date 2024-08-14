// const { diffStringsRaw } = require('jest-diff');
const { test_same_elements_both_arrays, nearest_round_number, is_increasing_digits_Sequence } = require('../01-js-basic/01-practice');
const { addPrimitiveType, isWeird, multiples, makingNewArray, getSubstring, isPalindrome, hourGlass, repetitionsOfString, addStringTogoether, inThree, oneIsLess, quadruple, biggestBlock, lowerScores } = require('../02-js-advanced/01-practice');

describe("Tesztelés két listában hány darab közös szám van", () => {
    test('Teszt két egyforma lista', () => {
        expect(test_same_elements_both_arrays([1, 2, 3, 4], [1, 2, 3, 4])).toBe(4);
    });

    test('Teszt három egyforma szám', () => {
        expect(test_same_elements_both_arrays([1, 2, 3, 4], [1, 2, 3, 5])).toBe(3);
    });

    test('Nincs egyforma szám', () => {
        expect(test_same_elements_both_arrays([1, 2, 3, 4], [11, 22, 33, 44])).toBe(0);
    });
});

describe('Tesztelés 10-es számra történő kerekítésben', () => {
    test('56-os szám kerekítése 60-ra', () => {
        expect(nearest_round_number(56)).toBe(60);
    });

    test('592-os szám kerekítése 600-ra', () => {
        expect(nearest_round_number(592)).toBe(600);
    })
})

describe('Növekvő számjegyek tesztelése', () => {
    test('Növekvő számok tesztelése', () => {
        expect(is_increasing_digits_Sequence(123)).toBe(true);
    });

    test('Van ismétlődőszám', () => {
        expect(is_increasing_digits_Sequence(1223)).toBe(false);
    })

    test('Van ismétlödő szám a végén', () => {
        expect(is_increasing_digits_Sequence(45677)).toBe(false);
    })
});

describe('Tesztelés primitívek és stringek összeadása', () => {
    list = addPrimitiveType('Welcome to Progamsters', 3, 3.14);
    test('lista első elem', () => {
        expect(list[0]).toBe('String: Welcome to Progamsters');
    });
    test('lista második elem', () => {
        expect(list[1]).toBe('Int: 3');
    });
    test('lista harmadik elem', () => {
        expect(list[2]).toBe('Double: 3.14');
    });
})

describe('Weird azaz furcsa számok tesztelése', () => {
    test('Páratlan', () => {
        expect(isWeird(33)).toBe('Weird');
    });

    test('Páros és 2 és 5 között van', () => {
        expect(isWeird(4)).toBe('Not Weird');
    });

    test('Páros és 6 és 20 között van', () => {
        expect(isWeird(20)).toBe('Weird');
    })

    test('10 nál nagyobb számok', () => {
        expect(isWeird(244)).toBe('Not Weird');
    });


});

describe('Szorzótábla tesztelése', () => {
    test('3 as szorzó tábla lista 7. elem', () => {
        list = multiples(3);
        expect(list[7]).toBe('3 x 8 = 24');
    })
});


describe('Új lista készítésének tesztelése', () => {
    test('Két lista egyenlő hosszú-e', () => {
        let myList = [4, 3, 32, 4, 55];
        let newList = makingNewArray(myList);
        expect(myList.length).toBe(newList.length);
    });

    test('5. elem megegyezzik-e az új listában', () => {
        list = makingNewArray([3, 4, 66, 7, 101, 4])
        expect(list[4]).toBe(101);
    })
});

describe('Szórészlet kivágása', () => {
    test('Szó közepéről történő kivágás:', () => {
        expect(getSubstring('Hello Mi', [3, 5])).toBe('lo');
    })
});

describe('Palindrome szavak tesztelése', () => {
    test('Palindrome szó tesztelése', () => {
        expect(isPalindrome('MadaM')).toBe('Yes');
    });

    test('Nem tükör szó tesztelése', () => {
        expect(isPalindrome('MadaaM')).toBe('No');
    })
});

describe('Homok óra legnagyobb szám keresése', () => {
    test('Példa homokóra', () => {
        let myHourGlass = [
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 41, 0],
            [0, 0, 0, 0, 0, 0]
        ];
        expect(hourGlass(myHourGlass)).toBe(42);
    })
});

describe('Szó végének ismétlése', () => {
    test('Hello', () => {
        expect(repetitionsOfString('Hello', 2)).toBe('lololo');
    });

    test('Ha üres betű is van a szó végén', () => {
        expect(repetitionsOfString('indula manudula ', 3)).toBe('la la la la ');
    });
});

describe('Stringek összevonása', () => {
    test('Hi és there szó összevonása', () => {
        expect(addStringTogoether('Hi', 'there')).toBe('tHhiere');
    })
});

describe('3 as számok vizsgálata', () => {
    test('Példa lista [3, 1, 3, 3] ', () => {
        expect(inThree([3, 1, 3, 3])).toBe('true');
    });

    test('Nincs 3 db 3-as számjegy: [4,3,5,3,4]', () => {
        expect(inThree([4, 3, 5, 3, 4])).toBe('true');
    });

    test('Csak három db 3-as számjegy van egymás mellett', () => {
        expect(inThree([3, 3, 3])).toBe('true');
    });

    test('Csak három db 3-as számjegy van egymás mellett', () => {
        expect(inThree([3, 4, 3, 4, 3])).toBe('false');
    });
});

describe('Tesztelése, hogy kevesebb 1 van, mint 4', () => {
    test('Egyenelőség esetén hamis-e', () => {
        expect(oneIsLess([2, 3, 1, 1, 4, 5, 4])).toBe('false');
    });

    test('Ha kevesebb 1-es van, min 4', () => {
        expect(oneIsLess([3, 2, 1, 4, 6, 7, 4])).toBe('true');
    });

    test('Ha több egyes van, mint 4', () => {
        expect(oneIsLess([3, 1, 1, 4, 1, 4])).toBe('false');
    });
});

describe('4 db egyforma karakter egységek számolása', () => {
    test('abcXXXXXlé', () => {
        expect(quadruple('abcXXXXXlé')).toBe(2);
    });

    test('ha a szó végére esik a 4-es tömb', () => {
        expect(quadruple('hukkkaLLLLLL')).toBe(3);
    });
});

describe('Legnagyobb blokk méretének keresése', () => {
    test('Ha egy blokk van', () => {
        expect(biggestBlock('hooray')).toBe(2);
    });

    test('Ha több blokk is van', () => {
        expect(biggestBlock('hoorayyyy')).toBe(4);
    });
});

describe('Csökkenő számsor vizsgálata', () => {
    test('Minden számjegy csökken', () => {
        expect(lowerScores([4, 3, 1])).toBe('true');
    });

    test('ha van egyenlő számjegy egymás mellett', () => {
        expect(lowerScores([5, 5, 4, 3, 1])).toBe('true');
    });

    test('szabálytalan számsor', () => {
        expect(lowerScores([5, 3, 1, 6, 7])).toBe('false');
    });

});