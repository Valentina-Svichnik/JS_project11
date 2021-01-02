export class myDet {
    id: number;
    name: string;
    status: boolean;

    constructor(id, name) {
        this.id = id;
        this.name = name;

        let random = Boolean(Math.round(Math.random()));
        
        this.status = random;
    }
}

