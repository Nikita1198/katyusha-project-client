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
            seedingRate: "Не выбрано",
            date: null,
            complexFertilizers: "",
            ammoniumNitrate: "",
            comment: "",
            nitrateNitrogen: "Не выбрано",
            ammoniumNitrateRequired: 0,
        },
        step3: {
            step1result: 0,
            step2result: 0,
            totalresult: 0
        }
    })

    plannedFirstYield = { value: "", display: false };

    constructor() {
        makeAutoObservable(this);

        reaction(
            () => [
                this.calculation.step2.seedingRate,
                this.calculation.step2.complexFertilizers,
                this.calculation.step2.ammoniumNitrate
            ],
            () => {
                this.calculateFirstYield();
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
    }

    // Методы для получения данных каждого шага
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

    getPlannedFirstYield() {
        return this.plannedFirstYield;
    }

    // Методы для изменения полей объекта calculation для step1
    updateStep1Field(field, value) {
        this.calculation.step1[field] = value;
    }

    // Методы для изменения полей объекта calculation для step2
    updateStep2Field(field, value) {
        this.calculation.step2[field] = value;
    }

    // Методы для изменения поля объекта calculation для step3
    updateStep3Field(field, value) {
        this.calculation.step3[field] = value;
    }

    updatePlannedFirstYieldValue(value) {
        this.plannedFirstYield.value = value;
    }

    updateResultStep1() {
        let { plannedYield, moisture } = this.calculation.step1;

        // Влагообеспеченность
        const moistureDeviation = (500 - moisture) / 10;
        this.calculation.step3.step1result = plannedYield - 1.5 * moistureDeviation;
    }

    // Метод проверки, что все поля в заданном шаге заполнены
    isStepComplete(step) {
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
                return false;
        }
    
        for (let key in fields) {
            const value = fields[key];
    
            // Проверяем, что строковые поля не пустые и не равны "Не выбрано"
            if (typeof value === 'string' && (value.trim() === '' || value === "Не выбрано")) return false;
    
            // Проверяем, что числовые поля не равны 0 и не NaN
            if (typeof value === 'number' && (value === 0 || isNaN(value))) return false;
    
            // Проверяем, что поля с объектами (например, даты) не null и не undefined
            if (typeof value === 'object' && (value === null || value === undefined)) return false;
        }
    
        // Все поля заполнены корректно
        return true;
    }

    // Метод расчета предварительной урожайности во втором шаге
    calculateFirstYield() {
        // Проверяем, что все необходимые поля заполнены (не равны пустой строке)
        if (this.calculation.step2.seedingRate !== "Не выбрано" &&
            this.calculation.step2.complexFertilizers !== "" &&
            this.calculation.step2.ammoniumNitrate !== "") {

            // Переменные для расчетов
            const { seedingRate, complexFertilizers, ammoniumNitrate } = this.calculation.step2;
            let plannedFirstYield = this.calculation.step3.step1result ? parseFloat(this.calculation.step3.step1result) : 80; // Исходная планируемая урожайность

            // Норма высева
            const seedingRateDeviation = seedingRate - 4.0;
            if (seedingRateDeviation > 0) {
                let tempYield = plannedFirstYield - seedingRateDeviation * 4;
                if (tempYield < plannedFirstYield) {
                    plannedFirstYield = tempYield;
                }
            }

            // Аммофос 12:52
            const baseFertilizerAmount = 230; // Базовое количество аммофоса
            const actualFertilizerAmount = parseFloat(complexFertilizers);
            const fertilizerDeviationSteps = (actualFertilizerAmount - baseFertilizerAmount) / 10; // Шаги отклонения от базового значения
            let tempYield = plannedFirstYield * (1 + 0.05 * fertilizerDeviationSteps); // Корректировка урожайности на 5% за каждый шаг

            if (tempYield < plannedFirstYield) {
                plannedFirstYield = tempYield; // Обновляем урожайность, если она уменьшилась
            }

            // Аммиачная селитра
            const ammoniumNitrateNumber = parseFloat(ammoniumNitrate);
            if (ammoniumNitrateNumber !== 80) {
                const ammoniumNitrateDeviation = (ammoniumNitrateNumber - 80) / 10;
                tempYield = plannedFirstYield + ammoniumNitrateDeviation; // Корректировка урожайности на 1 центнер за каждые 10 кг отклонения от нормы
                if (tempYield < plannedFirstYield) {
                    plannedFirstYield = tempYield;
                }
            }

            // Обновляем plannedFirstYield
            if (plannedFirstYield >= 0) { 
                this.plannedFirstYield.value = Math.round(plannedFirstYield).toString();
                this.calculation.step3.step2result = this.plannedFirstYield.value;
                this.calculation.step3.totalresult = this.plannedFirstYield.value;
                this.plannedFirstYield.display = true;
            } else {
                this.plannedFirstYield.display = false;
            }
        } else {
            // Если какие-либо из полей пустые, можно установить display в false, чтобы не показывать результат
            this.plannedFirstYield.display = false;
        }
    }

    // Метод расчета требуемого количества аммиачной селитры
    calculateRequiredAmmoniumNitrate() {
        const plannedYield = this.calculation.step3.step2result;
        const soilNitrate = this.calculation.step2.nitrateNitrogen;
        
        // Расчет необходимого количества азота для достижения планируемой урожайности
        const requiredNitrogen = plannedYield * 3; // На каждые 10 центнеров урожая требуется 30 кг азота
        
        // Вычисляем сколько азота нужно добавить, исходя из того, что уже есть в почве
        const nitrogenToAdd = requiredNitrogen - soilNitrate;
        
        // Пересчет в количество аммиачной селитры, используя содержание азота в аммиачной селитре (34.4%)
        let ammoniumNitrateRequired = nitrogenToAdd / 0.344;
        
        if(ammoniumNitrateRequired < 0) {
            ammoniumNitrateRequired = 0;
        }

        this.calculation.step2.ammoniumNitrateRequired = Math.round(ammoniumNitrateRequired).toString();
    }

    // Метод расчета урожайности
    calculateYield() {
        let { plannedYield, moisture } = this.calculation.step1;
        const { seedingRate, complexFertilizers, ammoniumNitrate } = this.calculation.step2;
        //const { nitrateNitrogen } = this.calculation.step3;

        // Влагообеспеченность
        const moistureDeviation = (500 - moisture) / 10;
        plannedYield -= 1.5 * moistureDeviation;

        // Норма высева
        const seedingRateDeviation = seedingRate - 4.0;
        if (seedingRateDeviation > 0) {
            plannedYield -= seedingRateDeviation * 4; // 2ц за каждые 0.5 млн
        }

        // Аммофос 12:52
        const fertilizerNorm = (plannedYield * 1.5) / 52; // Изменил на plannedYield, так как это значение должно быть динамическим
        const fertilizerDeviation = fertilizerNorm - complexFertilizers;
        if (fertilizerDeviation > 0) {
            plannedYield -= plannedYield * (0.14 * (fertilizerDeviation / fertilizerNorm)); // Пересчет процентного уменьшения
        }

        // Аммиачная селитра
        if (ammoniumNitrate < 80 || ammoniumNitrate > 100) {
            const ammoniumNitrateDeviation = (ammoniumNitrate - 80) / 10;
            plannedYield += ammoniumNitrateDeviation; // Добавляем или вычитаем в зависимости от отклонения
        }

        console.log(fertilizerNorm, ammoniumNitrate, plannedYield)

        // Весенняя доза азота (примерный расчет, нужны дополнительные данные)
        // Здесь можно добавить логику, если она вам известна

        return Math.round(plannedYield); // Округляем до ближайшего целого числа
    }

    // Метод сброса calculation
    resetCalculation() {
        this.calculation = {
            step1: {
                company: "",
                region: "",
                variety: "",
                field: "",
                square: 0,
                predecessor: "",
                moisture: 0,
                plannedYield: 0,
            },
            step2: {
                seedingRate: 0,
                date: null,
                complexFertilizers: 0,
                ammoniumNitrate: 0,
                comment: "",
                nitrateNitrogen: 0
            },
            step3: {
            },
        };
    }
}

const store = new Store();
export default store;
