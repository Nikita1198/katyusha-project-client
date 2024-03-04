import { observable, reaction, makeAutoObservable } from 'mobx';

class Store {
    calculation = observable({
        step1: {
            company: "",
            region: "Не выбрано",
            variety: "",
            field: "",
            square: "",
            predecessor: "",
            moisture: "",
            plannedYield: ""
        },
        step2: {
            complexFertilizers: "Не выбрано",
            ammoniumNitrate: "Не выбрано",
            seedingRate: "Не выбрано",
            date: null,
            comment: "",
            plannedFirstYield: { value: "", display: false },
            nitrateNitrogen: "Не выбрано",
            ammoniumNitrateRequired: 0,
            moistureSpring: 'Не выбрано',
        },
        step3: {
            step1result: 0,
            step2result: 0,
            totalresult: 0
        },
        invalidFields: []
    })

    constructor() {
        makeAutoObservable(this);

        reaction(
            () => [
                this.calculation.step3.step1result,
                this.calculation.step2.seedingRate,
                this.calculation.step2.complexFertilizers,
                this.calculation.step2.ammoniumNitrate,
                this.calculation.step2.date,
                this.calculation.step1.moisture,
                this.calculation.step2.comment,

            ],
            () => {
                this.calculateFirstYield();
                this.calculateRequiredAmmoniumNitrate();
            }
        );

        reaction(
            () => [
                this.calculation.step2.nitrateNitrogen
            ],
            () => {
                this.calculateRequiredAmmoniumNitrate();
            }
        );

        reaction(
            () => [
                this.calculation.step2.moistureSpring
            ],
            () => {
                this.calculateYield();
            }
        );

        reaction(
            () => this.calculation.step2.plannedFirstYield.value,
            (newValue, oldValue) => {

                if (newValue !== oldValue) {
                    this.calculateRequiredAmmoniumNitrate();
                    this.calculateYield();
                }
            }
        );
    }

    getStep1() {
        return this.calculation.step1;
    }

    getStep2() {
        return this.calculation.step2;
    }

    getStep3() {
        return this.calculation.step3;
    }

    getCalculation() {
        return this.calculation;
    }

    updateStep1Field(field, value) {
        this.calculation.step1[field] = value;
    }

    updateStep2Field(field, value) {
        this.calculation.step2[field] = value;
    }

    isStepComplete(step) {
        const fields = this.calculation[`step${step + 1}`];
        return Object.values(fields).every(value => value !== "" && value !== "Не выбрано" && value !== null);
    }

    getEmptyFields(step) {
        let fields = {};
        switch (step) {
            case 0:
                fields = this.calculation.step1;
                break;
            case 1:
                fields = this.calculation.step2;
                break;
            case 2:
                fields = this.calculation.step3;
                break;
            default:
                // Возвращаем пустой массив, так как неизвестный шаг не содержит полей для проверки
                return [];
        }

        const invalidFields = [];

        for (let key in fields) {
            const value = fields[key];

            // Добавляем условия проверки и добавляем название поля в массив invalidFields, если оно не соответствует условиям
            if (typeof value === 'string' && (value.trim() === '' || value === "Не выбрано")) {
                invalidFields.push(key);
                continue;
            }

            if (typeof value === 'number' && (value === 0 || isNaN(value))) {
                invalidFields.push(key);
                continue;
            }

            if (typeof value === 'object' && (value === null || value === undefined)) {
                invalidFields.push(key);
                continue;
            }
        }

        this.calculation.invalidFields = invalidFields;

        return invalidFields;
    }

    getInvalidFields() {
        return this.calculation.invalidFields;
    }

    // Метод расчета предварительной урожайности во втором шаге
    calculateFirstYield() {
        // Проверяем, что все необходимые поля заполнены (не равны пустой строке)
        if (this.calculation.step2.seedingRate !== "Не выбрано" &&
            this.calculation.step2.complexFertilizers !== "Не выбрано" &&
            this.calculation.step2.ammoniumNitrate !== "" &&
            this.calculation.step1.moisture !== "" &&
            this.calculation.step2.comment !== "" &&
            this.calculation.step2.date !== null) {

            // Переменные для расчетов
            const { seedingRate, complexFertilizers, ammoniumNitrate } = this.calculation.step2;
            const { moisture } = this.calculation.step1;

            // Аммофос 12:52 (фосфор в действующем веществе)
            const fertilizerYieldMap = {
                0: 30, 25: 36, 35: 38, 40: 42, 45: 46, 50: 50, 55: 54, 60: 58,
                65: 62, 70: 66, 75: 70, 80: 74, 85: 78, 90: 82,
                95: 86, 100: 90,
            };

            const selectedFertilizerAmount = complexFertilizers;
            const actualFertilizerAmount = parseFloat(selectedFertilizerAmount);
            const yieldValue = fertilizerYieldMap[actualFertilizerAmount];
            let plannedFirstYield = yieldValue;

            // Аммиачная селитра
            const ammoniumNitrateNumber = parseFloat(ammoniumNitrate);
            const additionalYield = ammoniumNitrateNumber / 10;
            plannedFirstYield += additionalYield;

            // Норма высева
            const yieldCoefficients = {
                '4.5': 0.95,
                '5': 0.8,
                '5.5': 0.75,
            };

            let yieldCoefficient = (seedingRate >= 2 && seedingRate <= 4) ? 1 : (yieldCoefficients[seedingRate] || 1);
            plannedFirstYield *= yieldCoefficient;

            // Влагообеспеченность 
            const moistureLevel = parseFloat(moisture); // Преобразуем уровень влаги в число
            if (moistureLevel > 450) {
                const excessMoisture = moistureLevel - 450; // Рассчитываем избыток влаги свыше 450 мм
                const moistureAdjustment = Math.floor(excessMoisture / 10) * 1.5; // Увеличиваем урожайность на 1.5 ц/га за каждые 10 мм сверх 450
                plannedFirstYield += moistureAdjustment;
            } else if (moistureLevel < 450) {
                // Здесь можно добавить логику для уменьшения урожайности, если требуется
                // Например, если нужно уменьшать урожайность на 1.5 ц/га за каждые 10 мм ниже 450 мм
                const deficitMoisture = 450 - moistureLevel;
                const moistureDeduction = Math.floor(deficitMoisture / 10) * 1.5; // Уменьшаем урожайность на 1.5 ц/га за каждые 10 мм недостатка
                plannedFirstYield -= moistureDeduction;
            }


            // Обновляем plannedFirstYield
            if (plannedFirstYield >= 0) {
                this.calculation.step2.plannedFirstYield.value = Math.round(plannedFirstYield).toString();
                this.calculation.step3.step2result = this.calculation.step2.plannedFirstYield.value;
                this.calculation.step2.plannedFirstYield.display = true;
            } else {
                this.calculation.step2.plannedFirstYield.display = false;
            }
        } else {
            this.calculation.step2.plannedFirstYield.display = false;
            this.calculation.step2.ammoniumNitrateRequired = "";
            this.calculation.step2.nitrateNitrogen = "Не выбрано";
            this.calculation.step2.moistureSpring = "Не выбрано";
        }
    }

    // Метод расчета требуемого количества аммиачной селитры
    calculateRequiredAmmoniumNitrate() {
        if (this.calculation.step2.nitrateNitrogen !== "Не выбрано") {
            const plannedYield = this.calculation.step3.totalresult;
            const soilNitrate = this.calculation.step2.nitrateNitrogen;

            const requiredNitrogen = plannedYield * 3;

            const nitrogenToAdd = requiredNitrogen - soilNitrate;

            let ammoniumNitrateRequired = nitrogenToAdd / 0.344;

            if (ammoniumNitrateRequired < 0) {
                ammoniumNitrateRequired = 0;
            }

            this.calculation.step2.ammoniumNitrateRequired = Math.round(ammoniumNitrateRequired).toString();
        }
    }

    // Метод расчета урожайности
    calculateYield() {
        if (this.calculation.step2.moistureSpring != "Не выбрано") {

            const plannedYieldAutumn = this.calculation.step3.step2result;
            const moistureSpring = this.calculation.step2.moistureSpring;

            const moistureLevelsMap = {
                '200': 1.3, '190': 1.25, '180': 1.2, '170': 1.15,
                '160': 1.1, '150': 1.0, '140': 0.95, '130': 0.85,
                '120': 0.8, '110': 0.7, '100': 0.6, '90': 0.5, '80': 0.4,
            };

            const coefficient = moistureLevelsMap[moistureSpring];

            let updatedYield = parseFloat(plannedYieldAutumn) * coefficient;
            if (updatedYield > 120) {
                updatedYield = 120;
            }

            this.calculation.step3.totalresult = Math.round(updatedYield).toString();
        }
    }


    // Метод сброса calculation
    resetCalculation() {
        this.calculation = {
            step1: {
                company: "",
                region: "Не выбрано",
                variety: "",
                field: "",
                square: "",
                predecessor: "",
                moisture: "",
                plannedYield: ""
            },
            step2: {
                complexFertilizers: "Не выбрано",
                ammoniumNitrate: "Не выбрано",
                seedingRate: "Не выбрано",
                date: null,
                comment: "",
                plannedFirstYield: { value: "", display: false },
                nitrateNitrogen: "Не выбрано",
                ammoniumNitrateRequired: 0,
                moistureSpring: 'Не выбрано',
            },
            step3: {
                step1result: 0,
                step2result: 0,
                totalresult: 0
            },
            invalidFields: []
        };
    }

}

const store = new Store();
export default store;
