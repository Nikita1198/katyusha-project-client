import { makeAutoObservable, observable, reaction } from "mobx";

class SunflowerStore {
  calculation = {
    step1: {
      company: "",
      region: "Не выбрано",
      hybrid: "",
      field: "",
      square: "",
      predecessor: "",
      moisture: "",
      plannedYield: "",
    },
    step2: {
      phosphorusSupply: "Не выбрано",
      complexFertilizers: "Не выбрано",
      ammoniumNitrate: "Не выбрано",
      moistureSpring: "Не выбрано",
    },
    step3: { step1result: 0, totalresult: 0 },
    invalidFields: [],
  };

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => [this.calculation.step1.moisture],
      () => {
        this.calculateFirstYield();
        this.calculateYield();
      },
    );

    reaction(
      () => [
        this.calculation.step2.phosphorusSupply,
        this.calculation.step2.complexFertilizers,
        this.calculation.step2.ammoniumNitrate,
        this.calculation.step2.moistureSpring,
      ],
      () => {
        this.calculateYield();
      },
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

  // Обновление полей шагов
  updateStep1Field(field, value) {
    this.calculation.step1[field] = value;
  }
  updateStep2Field(field, value) {
    this.calculation.step2[field] = value;
  }

  isStepComplete(step) {
    const fields = this.calculation[`step${step + 1}`];
    return Object.values(fields).every(
      (value) => value !== "" && value !== "Не выбрано" && value !== null,
    );
  }

  getEmptyFields(step) {
    // Прямое присваивание без использования switch-case
    const fields = this.calculation[`step${step + 1}`] || {};

    // Фильтрация недопустимых полей с помощью Object.entries и условий проверки
    const invalidFields = Object.entries(fields)
      .filter(
        ([key, value]) =>
          (typeof value === "string" &&
            (value.trim() === "" || value === "Не выбрано")) ||
          (typeof value === "number" && (value === 0 || isNaN(value))) ||
          (typeof value === "object" &&
            (value === null || value === undefined)),
      )
      .map(([key]) => key); // Извлекаем только ключи недопустимых полей

    // Сохраняем и возвращаем недопустимые поля
    this.calculation.invalidFields = invalidFields;
    return invalidFields;
  }

  getInvalidFields() {
    return this.calculation.invalidFields;
  }

  calculateFirstYield() {
    const moisture = this.calculation.step1.moisture;
    if (moisture !== "") {
      const optimalMoisture = 600;
      const baseYield = 40;
      const moistureDeviationEffect = 1;
      const deviationStep = 10;

      const actualMoisture = parseInt(moisture, 10);
      const moistureDeviation = Math.abs(optimalMoisture - actualMoisture);
      const yieldChange =
        Math.floor(moistureDeviation / deviationStep) * moistureDeviationEffect;

      this.calculation.step3.step1result =
        actualMoisture < optimalMoisture
          ? baseYield - yieldChange
          : baseYield + yieldChange;
    }
  }

  calculateYield() {
    if (
      this.calculation.step2.phosphorusSupply != "Не выбрано" &&
      this.calculation.step2.complexFertilizers != "Не выбрано" &&
      this.calculation.step2.moistureSpring != "Не выбрано" &&
      this.calculation.step2.ammoniumNitrate != "Не выбрано"
    ) {
      let plannedYield = this.calculation.step3.step1result;

      const {
        phosphorusSupply,
        complexFertilizers,
        moistureSpring,
        ammoniumNitrate,
      } = this.calculation.step2;

      // Содержание фосфора в почве
      const phosphorusCoefficients = {
        "10-15": 0.8,
        "15-20": 0.9,
        "20-25": 0.95,
        "25-30": 1,
        "30 и выше": 1.05,
      };

      const phosphorusSupplyAmount = phosphorusSupply;
      const phosphorusSupplyCoefficient =
        phosphorusCoefficients[phosphorusSupplyAmount];
      plannedYield *= phosphorusSupplyCoefficient;

      // Доза удобрений (фосфора) в действующем веществе
      const complexFertilizersMap = {
        0: 0.6,
        30: 0.8,
        40: 0.9,
        50: 1.0,
        60: 1.05,
        70: 1.1,
        80: 1.15,
      };

      const complexFertilizersAmount = complexFertilizers;
      const complexFertilizersCoefficient =
        complexFertilizersMap[complexFertilizersAmount];
      plannedYield *= complexFertilizersCoefficient;

      // Влагообеспеченность весна
      const moistureSpringMap = {
        200: 1.1,
        180: 1.05,
        160: 1.0,
        140: 0.85,
        120: 0.7,
        100: 0.5,
      };

      const moistureSpringAmount = moistureSpring;
      const moistureSpringСoefficient = moistureSpringMap[moistureSpring];
      plannedYield *= moistureSpringСoefficient;

      // Аммиачная селитра при/перед посевом
      const ammoniumNitrateMap = {
        0: 0,
        60: 1.03,
        80: 1.05,
        100: 1.08,
      };

      const ammoniumNitrateAmount = ammoniumNitrate;
      const ammoniumNitrateСoefficient =
        ammoniumNitrateMap[ammoniumNitrateAmount];
      if (ammoniumNitrateСoefficient != 0) {
        plannedYield *= ammoniumNitrateСoefficient;
      }

      // Максиммум обрубаем
      if (plannedYield > 120) {
        plannedYield = 120;
      }

      if (plannedYield < 0) {
        plannedYield = 0;
      }

      this.calculation.step3.totalresult = plannedYield.toFixed(1);
    }
  }

  resetCalculation() {
    this.calculation = {
      step1: {
        company: "",
        region: "Не выбрано",
        hybrid: "",
        field: "",
        square: "",
        predecessor: "",
        moisture: "",
        plannedYield: "",
      },
      step2: {
        phosphorusSupply: "Не выбрано",
        complexFertilizers: "Не выбрано",
        ammoniumNitrate: "Не выбрано",
        moistureSpring: "Не выбрано",
      },
      step3: { step1result: 0, totalresult: 0 },
      invalidFields: [],
    };
  }
}

const store = new SunflowerStore();
export default store;
