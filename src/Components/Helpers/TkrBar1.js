class TkrBar1 {
    // constructor() {
    // }
//{'id': 13171, 'dt': '2024-12-15 19:00:00', 'op': 2.4475, 'hi': 2.4544599, 'lo': 2.4442599, 'cl': 2.45438, 'vol': 358310}, 

    #id = 0;
    #dt = '2024-12-15 19:00:00';
    #op = 1.23;
    #hi = 2.34;
    #lo = 3.45;
    #cl = 4.56;
    #vol = 110;

    get id() {
        return this.#id;
    }
    set id(x) {
        console.log("Setting id: " + x);
        this.#id = x;
    }

    get dt() {
        //console.log("Getting id");
        return this.#dt;
    }
    set dt(x) {
        this.#dt = x;
    }

    get op() {
        return this.#op;
    }
    set op(x) {
        this.#op = x;
    }

    get hi() {
        return this.#hi;
    }
    set hi(x) {
        this.#hi = x;
    }

    get lo() {
        return this.#lo;
    }
    set lo(x) {
        this.#lo = x;
    }

    get cl() {
        return this.#cl;
    }
    set cl(x) {
        this.#cl = x;
    }

    get vol() {
        return this.#vol;
    }
    set vol(x) {
        this.#vol = x;
    }

    print_hdr() {
        return "ID Date Open High Low Close Volume";
    }
    print_row() {
        return `${this.id} ${this.op} ${this.hi} ${this.lo} ${this.cl} ${this.vol} ${this.dt}`;
    }

}

export default TkrBar1;