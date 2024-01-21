import { makeAutoObservable } from "mobx";

class Store {
    calculation = {
        company: "",
        variety: "",
    }

    constructor() {
        makeAutoObservable(this);
    }

    setCalculation(company, variety){
        this.calculation = {
            company, variety
        }
        console.log(this.calculation)
    }
}

const store = new Store();
export default store;