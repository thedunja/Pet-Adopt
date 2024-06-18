export class AdoptionList {

    count: number;
    results: Adoption[];

    constructor(obj?: any) {

        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((elem: any) => new Adoption(elem)) || [];
    }
}


export class Adoption {

    _id: number;
    petId: number;
    petName: string;
    name: string;
    contact: string;
    deleted: boolean;

    constructor(obj?: any) {

        this._id = obj && obj._id || 0;
        this.petId = obj && obj.petId || 0;
        this.petName = obj && obj.petName || "";
        this.name = obj && obj.name || "";
        this.contact = obj && obj.contact || "";
        this.deleted = obj && obj.deleted || false; //THIS IS BOOLEAN
    }
}