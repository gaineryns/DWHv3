import { Component } from '@angular/core';


@Component({
    templateUrl: 'dashboard.html'
})
export class dashboard {
    items;

    constructor() {
        this.initializeItems();
    }

    initializeItems() {
        this.items = [
            {
                "_id": "587b37f2e97dbff07e3a85d8",
                "reference": 0,
                "nom": "excepteur",
                "quantity": 97,
                "category": "proident",
                "picture": "http://placehold.it/32x32",
                "prix": "$1,855.84",
                "codeBarre": "587b37f21bbaa3394ab40956",
                "codeNFC": "587b37f213588e49aae1f78e",
                "loca": "587b37f2fb5a567bff7ff446",
                "fournisseur": "9e8290b1-661b-44f3-9aa1-769b9f590919"
            },
            {
                "_id": "587b37f248d222f108aa95d8",
                "reference": 1,
                "nom": "duis",
                "quantity": 66,
                "category": "consectetur",
                "picture": "http://placehold.it/32x32",
                "prix": "$2,536.40",
                "codeBarre": "587b37f23e35471795a5bb43",
                "codeNFC": "587b37f2614e6a54d90f0048",
                "loca": "587b37f208dec3d74441956e",
                "fournisseur": "d40de3d0-f3c8-4a7a-8f9c-4bae9e2e318e"
            },
            {
                "_id": "587b37f29f8a3f67d030b8d3",
                "reference": 2,
                "nom": "magna",
                "quantity": 55,
                "category": "nostrud",
                "picture": "http://placehold.it/32x32",
                "prix": "$2,347.39",
                "codeBarre": "587b37f2182d556543d48728",
                "codeNFC": "587b37f2c23a18018db2bff1",
                "loca": "587b37f2932098b5fdef2db6",
                "fournisseur": "a2b2f8bb-e391-4aa4-892e-a031db912d96"
            },
            {
                "_id": "587b37f2629b29738b49e51b",
                "reference": 3,
                "nom": "laboris",
                "quantity": 92,
                "category": "incididunt",
                "picture": "http://placehold.it/32x32",
                "prix": "$2,529.93",
                "codeBarre": "587b37f2b4f337568e452fab",
                "codeNFC": "587b37f2d60fdae7ea998641",
                "loca": "587b37f21686d0be2d306676",
                "fournisseur": "fbcac1d4-63a5-40c7-8d8a-7aaf6a694d46"
            },
            {
                "_id": "587b37f20c7aac2edb4e1d4b",
                "reference": 4,
                "nom": "do",
                "quantity": 35,
                "category": "adipisicing",
                "picture": "http://placehold.it/32x32",
                "prix": "$2,428.83",
                "codeBarre": "587b37f2e0dbb798a81f3394",
                "codeNFC": "587b37f290946f68b00d26e9",
                "loca": "587b37f20a2ff1061410a5e0",
                "fournisseur": "b7daab9d-bd43-4aa8-94b9-15f479c4bbf9"
            },
            {
                "_id": "587b37f25d82de57462a80ee",
                "reference": 5,
                "nom": "nostrud",
                "quantity": 81,
                "category": "enim",
                "picture": "http://placehold.it/32x32",
                "prix": "$2,506.89",
                "codeBarre": "587b37f265b5345537bf1bb9",
                "codeNFC": "587b37f2240d1006432dc4f1",
                "loca": "587b37f2f1a86753d03aeb52",
                "fournisseur": "544b14a4-bac3-4ed3-885a-02a8510174d8"
            },
            {
                "_id": "587b37f23a054ee8ca41cbd6",
                "reference": 6,
                "nom": "Lorem",
                "quantity": 69,
                "category": "amet",
                "picture": "http://placehold.it/32x32",
                "prix": "$3,740.89",
                "codeBarre": "587b37f2962778874bad9dd0",
                "codeNFC": "587b37f236b120606a2a154a",
                "loca": "587b37f29b0213b1fbff51f8",
                "fournisseur": "dd86f02d-1a7d-483c-ab73-508e3e7e6af4"
            },
            {
                "_id": "587b37f25b4a99cf2755066b",
                "reference": 7,
                "nom": "velit",
                "quantity": 51,
                "category": "laborum",
                "picture": "http://placehold.it/32x32",
                "prix": "$1,015.59",
                "codeBarre": "587b37f2ffe67c604cdd4b7f",
                "codeNFC": "587b37f2b6f1ce57a99ba6d5",
                "loca": "587b37f2b57afe3615336fc4",
                "fournisseur": "f1619001-45db-4059-beff-4ca1c65f1c23"
            },
            {
                "_id": "587b37f21fc0da494ee8dd23",
                "reference": 8,
                "nom": "enim",
                "quantity": 22,
                "category": "dolor",
                "picture": "http://placehold.it/32x32",
                "prix": "$2,017.43",
                "codeBarre": "587b37f23defddd0214aec70",
                "codeNFC": "587b37f2101e97defba43d14",
                "loca": "587b37f2c89faa9d57509d0a",
                "fournisseur": "a5fc9fc9-36ae-4609-9798-0d1cc0e4de64"
            },
            {
                "_id": "587b37f22e6c5e3f925148af",
                "reference": 9,
                "nom": "aliquip",
                "quantity": 26,
                "category": "duis",
                "picture": "http://placehold.it/32x32",
                "prix": "$3,740.44",
                "codeBarre": "587b37f2d70d7a79a9ca7115",
                "codeNFC": "587b37f215894c7304940889",
                "loca": "587b37f2458c8ae704054168",
                "fournisseur": "b2f168b8-b472-4f03-9152-ac6bfe932295"
            },
            {
                "_id": "587b37f2d17d9015b23cc456",
                "reference": 10,
                "nom": "sint",
                "quantity": 57,
                "category": "est",
                "picture": "http://placehold.it/32x32",
                "prix": "$1,511.61",
                "codeBarre": "587b37f230536b28b7b1ee3e",
                "codeNFC": "587b37f290fe8c50f6bd3750",
                "loca": "587b37f2f726aaa6b6f99067",
                "fournisseur": "ab3f2721-183d-4e4f-b5b2-52bc5bf45934"
            },
            {
                "_id": "587b37f2bc3a8e76bb7d63ce",
                "reference": 11,
                "nom": "pariatur",
                "quantity": 54,
                "category": "in",
                "picture": "http://placehold.it/32x32",
                "prix": "$1,075.04",
                "codeBarre": "587b37f22c2d4e8f702c4600",
                "codeNFC": "587b37f26665edfd4920ada4",
                "loca": "587b37f270bb2073f16914ef",
                "fournisseur": "19709ee9-d528-4f18-b779-ca21189ae017"
            },
            {
                "_id": "587b37f2016f782aedb41321",
                "reference": 12,
                "nom": "quis",
                "quantity": 31,
                "category": "proident",
                "picture": "http://placehold.it/32x32",
                "prix": "$1,455.73",
                "codeBarre": "587b37f2e67165d2c009d063",
                "codeNFC": "587b37f2446c4b644791c0a9",
                "loca": "587b37f2c06c514ca8d93f9f",
                "fournisseur": "e14589da-651f-49a8-b04a-8cb7fd9a90a3"
            },
            {
                "_id": "587b37f2967459f845b30dd0",
                "reference": 13,
                "nom": "sint",
                "quantity": 99,
                "category": "consequat",
                "picture": "http://placehold.it/32x32",
                "prix": "$1,022.06",
                "codeBarre": "587b37f22d7b34acf0c687f1",
                "codeNFC": "587b37f2f07e8a45082ed45c",
                "loca": "587b37f2dc329e7f9c315c6b",
                "fournisseur": "63a05f25-cb5a-4f60-b152-0c4d504e94d2"
            },
            {
                "_id": "587b37f22d1597d0ed6bfe20",
                "reference": 14,
                "nom": "eiusmod",
                "quantity": 32,
                "category": "occaecat",
                "picture": "http://placehold.it/32x32",
                "prix": "$1,591.66",
                "codeBarre": "587b37f200d064cf44987ae4",
                "codeNFC": "587b37f23418b937609d4ade",
                "loca": "587b37f2f0e40d184e488842",
                "fournisseur": "897f6935-a27e-4afe-bb23-af02f279fb57"
            },
            {
                "_id": "587b37f2c1650220dbd10bce",
                "reference": 15,
                "nom": "sit",
                "quantity": 20,
                "category": "voluptate",
                "picture": "http://placehold.it/32x32",
                "prix": "$2,138.87",
                "codeBarre": "587b37f2248360987283fd7a",
                "codeNFC": "587b37f2f55a1be768f3a2af",
                "loca": "587b37f2f95d5a9d8b234a89",
                "fournisseur": "f30120bb-72eb-480a-8ff5-23010f4e86df"
            },
            {
                "_id": "587b37f2bcbe6d525874ee8f",
                "reference": 16,
                "nom": "laborum",
                "quantity": 15,
                "category": "ut",
                "picture": "http://placehold.it/32x32",
                "prix": "$3,134.68",
                "codeBarre": "587b37f2652b114bfc1caa59",
                "codeNFC": "587b37f28b34ee174b9a5b93",
                "loca": "587b37f29bef0cb2545c218b",
                "fournisseur": "55512fcc-3095-40e0-a6fa-54030403c095"
            },
            {
                "_id": "587b37f24ea769482d8ce700",
                "reference": 17,
                "nom": "nulla",
                "quantity": 1,
                "category": "in",
                "picture": "http://placehold.it/32x32",
                "prix": "$2,457.17",
                "codeBarre": "587b37f2a09c052b2b8f5939",
                "codeNFC": "587b37f2c26a6a15b5893d33",
                "loca": "587b37f21228918e8c6ba40b",
                "fournisseur": "d8cbded0-e65b-47d0-aed4-4ca7757023b4"
            },
            {
                "_id": "587b37f27a6fcae295c94fa2",
                "reference": 18,
                "nom": "qui",
                "quantity": 47,
                "category": "aute",
                "picture": "http://placehold.it/32x32",
                "prix": "$3,729.92",
                "codeBarre": "587b37f2b2c813258d2fcaf4",
                "codeNFC": "587b37f25ef525c18661b6b7",
                "loca": "587b37f2ac9d61f329fd1225",
                "fournisseur": "4320e2cc-ae83-4c9a-9479-5604e394cdba"
            }
        ];
    }

    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the ev target
        var val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
}