# Evaluare periodică la disciplina "Programare web 1"

## Însărcinări
### - Sarcina 1 **[2 puncte]** 

Creați un repozitoriu privat `ep-26.05.2023` pe Github. Deschideți acces pentru `sergiuchilat`.


### - Sarcina 2 **[4 puncte]**

Elaborați o funcție care primește ca parametru o propoziție și returnează această propoziție transformată - ultima literă a fiecărui cuvînt va fi majusculă. Rezultatul va fi afișat în consolă.

Exemplu: uppercaseLastLetter("astazi este joi") va returna "astazI estE joI" 

### - Sarcina 3 **[4 puncte]**

Utilizînd una sau mai multe funcții de prelucrare a masivelor(array functions) realizați următorul algoritm: la intrare avem un masiv de numere oarecare(minim 5 elemente, maxim 100 elemente). La ieșire vom obține un nou masiv în care vom avea întîi pătratele numerelor negative găsite în masiv, apoi celelalte numere în ordinea în care erau prezente în masiv.
Rezultatul va fi afișat în consolă.

Exemplu: la intrare avem masivul `[0, -5, 4, 3, -2, 8, 10]`. La ieșire vom avea `[25, 4, 0, 4, 3, 8, 10]`. Explicație: numerele -5 și -2 sunt numerele negative găsite în masiv, iar 25 și 4 sunt pătratele acestor 2 numere negative. Celelalte numere se transcriu în al doilea masiv cu păstrarea ordinii din masivul inițial.

### - Sarcina 4 **[5 puncte]**

Creați un masiv care va conține datele despre o listă de Servicii. Fiecare serviciu are următoarele cîmpuri:
- denumire
- preț
- durata(în ore)

Creați 2 metode:
- findHigherPricePerHour - care va găsi serviciul cu cel mai mare tarif pe ora

Exemplu:
La intrare:
```
[
    {
        "name": "Elaborare unei aplicații mobile",
        "price": 15.00,
        "duration": 3
    },
    {
        "name": "Elaborarea unui site web",
        "price": 6.50,
        "duration": 2
    },
    {
        "name": "Elaborarea unei aplicații desktop",
        "price": 127.00,
        "duration": 120
    }
]
```

La ieșire:
```
    {
        "name": "Elaborare unei aplicații mobile",
        "price": 15.00,
        "duration": 3,
        "hour_price": 5
    }
```


- calculateTotalCost - care va returna costul total pentru toate serviciile

Exemplu:

La intrare:
```
[
    {
        "name": "Elaborare unei aplicații mobile",
        "price": 15.00,
        "duration": 3
    },
    {
        "name": "Elaborarea unui site web",
        "price": 6.50,
        "duration": 2
    },
    {
        "name": "Elaborarea unei aplicații desktop",
        "price": 127.00,
        "duration": 120
    }
]
```

La ieșire:

`Costul total: 148.50`

Explicație:
Costul total = 15.00 + 6.50 + 127.00 = 148.50 


### - Sarcina 5 **[5 puncte]**

De creat o interfață cu 2 butoane(- și +) și un input de tip număr.
Valoarea implicită a numărului va fi "50".
La click pe butonul "-" valoarea se va micșora cu 10 iar la dublu click valoarea se va micșora cu 5.
La click pe butonul "+" valoarea se va mări cu 10 iar la dublu click valoarea se va mări cu 5.
Este necesar de adăugat următoarea restricție: valoarea în input poate fi din segmentul [0, 100].
Explicație: Dacă valoarea curentă este 5 și se face click pe butonul ”-”, atunci se va ignora acest eveniment și valoarea va rămîne 5, deoarece 5 - 10 = -5, astfel valoarea în input va deveni negativă.

## Timp pentru realizare 
90 minute

## Mențiuni
1. Rezultatele lucrării vor fi acceptate doar dacă vor fi publicate pe repozitoriul Github
2. Pentru fiecare însărcinare practică trebuie să fie creat cîte un "commit" cu mesajul "Insărcinare nr. {N}".

## Barem de notare:
```
Nota     Puncte
10       19-20
 9       16-18
 8       13-15
 7       10-12
 6        8-9
 5        6-7
 4        4-5
 3          3
 2          2
 1          1
```
