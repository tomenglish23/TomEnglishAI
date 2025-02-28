class TkrBar {
    constructor(id, dt, op, hi, lo, cl, vol) {
        this.id = id;
        this.dt = dt;
        this.op = op;
        this.hi = hi;
        this.lo = lo;
        this.cl = cl;
        this.vol = vol;
    }

    // constructor(id, op) {
    //     this.id = id;
    //     this.op = op;
    // }

    static print_hdr() {
        return "Date                 Open      High          Low         Close      Vol";
    }
    print_row() {
        return `${this.dt}  ${this.op}    ${this.hi}     ${this.lo}   ${this.cl}    ${this.vol}`;
        //return `${this.id} ${this.op}`;
    }
}

export default TkrBar;