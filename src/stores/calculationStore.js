import { makeAutoObservable } from "mobx";
import dayjs from 'dayjs';

class Store {
    calculation = {
        step1: {
            company: "",
            region: "Не выбрано",
            variety: "",
            field: "",
            square: 0,
            predecessor: "",
            moisture: 500,
            plannedYield: 80
        },
        step2: {
            seedingRate: 4,
            date: dayjs('2022-04-17'),
            complexFertilizers: 230,
            ammoniumNitrate: 80,
            comment: ""
        },
        step3: {
            nitrateNitrogen: 80
        }
    }

    constructor() {
        makeAutoObservable(this);
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

            // Проверяем, что строковые поля не пустые
            if (typeof value === 'string' && value.trim() === '') return false;

            // Проверяем, что числовые поля не равны 0 и не NaN
            if (typeof value === 'number' && (value === 0 || isNaN(value))) return false;

            // Проверяем, что поля с объектами (например, даты) не null и не undefined
            if (typeof value === 'object' && (value === null || value === undefined)) return false;
        }


        // Все поля заполнены
        return true;
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
        
        console.log(fertilizerNorm,ammoniumNitrate,  plannedYield)

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
            },
            step3: {
                nitrateNitrogen: 0,
            },
        };
    }
}

const store = new Store();
export default store;
