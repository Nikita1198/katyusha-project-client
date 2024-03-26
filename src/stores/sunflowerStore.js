import { makeAutoObservable, observable, reaction } from "mobx";

class SunflowerStore {
  constructor() {
    this.calculationSunflower = {
      step1: {
        company: "",
        region: "Не выбрано",
        variety: "",
        field: "",
        square: "",
        predecessor: "",
        moisture: "",
        plannedYield: "",
      },
      step2: {
        complexFertilizers: "Не выбрано",
        ammoniumNitrate: "Не выбрано",
        seedingRate: "Не выбрано",
        phosphorusSupply: "Не выбрано",
        date: null,
        comment: "Не выбрано",
        plannedFirstYield: { value: "", display: false },
        nitrateNitrogen: "Не выбрано",
        ammoniumNitrateRequired: 0,
        moistureSpring: "Не выбрано",
      },
      step3: { step1result: 0, step2result: 0, totalresult: 0 },
      invalidFields: [],
    };
    makeAutoObservable(this);

    reaction(
      () => [
        this.calculationSunflower.step3.step1result,
        this.calculationSunflower.step2.seedingRate,
        this.calculationSunflower.step2.complexFertilizers,
        this.calculationSunflower.step2.ammoniumNitrate,
        this.calculationSunflower.step2.phosphorusSupply,
        this.calculationSunflower.step2.date,
        this.calculationSunflower.step1.moisture,
        this.calculationSunflower.step2.comment,
      ],
      () => {
        this.calculateFirstYield();
        this.calculateRequiredAmmoniumNitrate();
      },
    );

    reaction(
      () => [this.calculationSunflower.step2.nitrateNitrogen],
      () => {
        this.calculateRequiredAmmoniumNitrate();
      },
    );

    reaction(
      () => [this.calculationSunflower.step2.moistureSpring],
      () => {
        this.calculateYield();
      },
    );

    reaction(
      () => this.calculationSunflower.step2.plannedFirstYield.value,
      (newValue, oldValue) => {
        if (newValue !== oldValue) {
          this.calculateRequiredAmmoniumNitrate();
          this.calculateYield();
        }
      },
    );
  }

  // Получение данных по шагам
  getStep1() {
    return this.calculationSunflower.step1;
  }
  getStep2() {
    return this.calculationSunflower.step2;
  }
  getStep3() {
    return this.calculationSunflower.step3;
  }
  getCalculationSunflower() {
    return this.calculationSunflower;
  }

  // Обновление полей шагов
  updateStep1Field(field, value) {
    this.calculationSunflower.step1[field] = value;
  }
  updateStep2Field(field, value) {
    this.calculationSunflower.step2[field] = value;
  }

  isStepComplete(step) {
    const fields = this.calculationSunflower[`step${step + 1}`];
    return Object.values(fields).every(
      (value) => value !== "" && value !== "Не выбрано" && value !== null,
    );
  }

  getEmptyFields(step) {
    // Прямое присваивание без использования switch-case
    const fields = this.calculationSunflower[`step${step + 1}`] || {};

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
    this.calculationSunflower.invalidFields = invalidFields;
    return invalidFields;
  }

  getInvalidFields() {
    return this.calculationSunflower.invalidFields;
  }

  calculateFirstYield() {
    if (
      this.calculationSunflower.step2.seedingRate !== "Не выбрано" &&
      this.calculationSunflower.step2.complexFertilizers !== "Не выбрано" &&
      this.calculationSunflower.step2.comment !== "Не выбрано" &&
      this.calculationSunflower.step2.phosphorusSupply !== "Не выбрано" &&
      this.calculationSunflower.step2.ammoniumNitrate !== "Не выбрано" &&
      this.calculationSunflower.step1.moisture !== "" &&
      this.calculationSunflower.step2.comment !== "" &&
      this.calculationSunflower.step2.date !== null
    ) {
      const {
        seedingRate,
        complexFertilizers,
        ammoniumNitrate,
        phosphorusSupply,
        comment,
      } = this.calculationSunflower.step2;
      const { moisture } = this.calculationSunflower.step1;

      // Аммофос 12:52 (фосфор в действующем веществе)
      const fertilizerYieldMap = {
        0: 30,
        25: 36,
        35: 38,
        40: 42,
        45: 46,
        50: 50,
        55: 54,
        60: 58,
        65: 62,
        70: 66,
        75: 70,
        80: 74,
        85: 78,
        90: 82,
        95: 86,
        100: 90,
      };

      const selectedFertilizerAmount = complexFertilizers;
      const actualFertilizerAmount = parseFloat(selectedFertilizerAmount);
      const yieldValue = fertilizerYieldMap[actualFertilizerAmount];
      let plannedFirstYield = yieldValue;

      // Аммиачная селитра
      const ammoniumNitrateNumber = parseFloat(ammoniumNitrate);
      if (ammoniumNitrateNumber !== 0) {
        const additionalYield = ammoniumNitrateNumber / 10;
        plannedFirstYield += additionalYield;
      }

      // Норма высева
      const yieldCoefficients = {
        4.5: 0.95,
        5: 0.8,
        5.5: 0.75,
      };

      let yieldCoefficient =
        seedingRate >= 2 && seedingRate <= 4
          ? 1
          : yieldCoefficients[seedingRate] || 1;
      plannedFirstYield *= yieldCoefficient;

      // Запас фосфора в почве
      const phosphorusCoefficients = {
        "5-10": 0.7,
        "10-15": 0.8,
        "15-20": 0.9,
        "20-25": 0.95,
        "25-30": 1,
        "30-35": 1.05,
        "35 и выше": 1.1,
      };

      const phosphorusSupplyAmount = phosphorusSupply;
      const phosphorusSupplyCoefficient =
        phosphorusCoefficients[phosphorusSupplyAmount];
      plannedFirstYield *= phosphorusSupplyCoefficient;

      // Развитие с осени
      const commentsCoefficients = {
        "Всходы": 0.75,
        "2-3 листа": 0.85,
        "Начало кущения": 1.0,
        "Кущения 2-3 побега": 1.1,
      };

      const commentsValue = comment;
      const commentsSelected = commentsCoefficients[commentsValue];
      plannedFirstYield *= commentsSelected;

      // Влагообеспеченность
      const parsedMoisture = parseFloat(moisture); // Преобразуем уровень влаги в число
      const moistureLevel = Math.min(Math.max(parsedMoisture, 200), 800); // Корректируем уровень влаги в диапазоне от 200 до 800

      if (moistureLevel > 450) {
        const excessMoisture = moistureLevel - 450; // Рассчитываем избыток влаги свыше 450 мм
        const moistureAdjustment = Math.floor(excessMoisture / 10) * 1.5; // Увеличиваем урожайность на 1.5 ц/га за каждые 10 мм сверх 450
        plannedFirstYield += moistureAdjustment;
      } else if (moistureLevel < 450) {
        const deficitMoisture = 450 - moistureLevel;
        const moistureDeduction = Math.floor(deficitMoisture / 10) * 1.5; // Уменьшаем урожайность на 1.5 ц/га за каждые 10 мм недостатка
        plannedFirstYield -= moistureDeduction;
      }

      plannedFirstYield = plannedFirstYield < 0 ? 0 : plannedFirstYield;

      // Обновляем plannedFirstYield
      if (plannedFirstYield != undefined) {
        this.calculationSunflower.step2.plannedFirstYield.value =
          Math.round(plannedFirstYield).toString();
        this.calculationSunflower.step3.step2result =
          this.calculationSunflower.step2.plannedFirstYield.value;
        this.calculationSunflower.step2.plannedFirstYield.display = true;
      } else {
        this.calculationSunflower.step2.plannedFirstYield.display = false;
      }
    } else {
      this.calculationSunflower.step2.plannedFirstYield.display = false;
      this.calculationSunflower.step2.ammoniumNitrateRequired = "";
      this.calculationSunflower.step2.nitrateNitrogen = "Не выбрано";
      this.calculationSunflower.step2.moistureSpring = "Не выбрано";
    }
  }

  // Метод расчета требуемого количества аммиачной селитры
  calculateRequiredAmmoniumNitrate() {
    if (this.calculationSunflower.step2.nitrateNitrogen !== "Не выбрано") {
      const plannedYield = this.calculationSunflower.step3.totalresult;
      const soilNitrate = this.calculationSunflower.step2.nitrateNitrogen;

      const requiredNitrogen = plannedYield * 3;

      const nitrogenToAdd = requiredNitrogen - soilNitrate;

      let ammoniumNitrateRequired = nitrogenToAdd / 0.344;

      if (ammoniumNitrateRequired < 0) {
        ammoniumNitrateRequired = 0;
      }

      this.calculationSunflower.step2.ammoniumNitrateRequired = Math.round(
        ammoniumNitrateRequired,
      ).toString();
    }
  }

  // Метод расчета урожайности
  calculateYield() {
    if (this.calculationSunflower.step2.moistureSpring != "Не выбрано") {
      const plannedYieldAutumn = this.calculationSunflower.step3.step2result;
      const moistureSpring = this.calculationSunflower.step2.moistureSpring;

      const moistureLevelsMap = {
        200: 1.3,
        190: 1.25,
        180: 1.2,
        170: 1.15,
        160: 1.1,
        150: 1.0,
        140: 0.95,
        130: 0.85,
        120: 0.8,
        110: 0.7,
        100: 0.6,
        90: 0.5,
        80: 0.4,
      };

      const coefficient = moistureLevelsMap[moistureSpring];

      let updatedYield = parseFloat(plannedYieldAutumn) * coefficient;
      if (updatedYield > 120) {
        updatedYield = 120;
      }

      this.calculationSunflower.step3.totalresult =
        Math.round(updatedYield).toString();
    }
  }

  // Сброс данных расчета
  resetCalculationSunflower() {
    this.calculationSunflower = {
      step1: {
        company: "",
        region: "Не выбрано",
        variety: "",
        field: "",
        square: "",
        predecessor: "",
        moisture: "",
        plannedYield: "",
      },
      step2: {
        complexFertilizers: "Не выбрано",
        ammoniumNitrate: "Не выбрано",
        seedingRate: "Не выбрано",
        phosphorusSupply: "Не выбрано",
        date: null,
        comment: "Не выбрано",
        plannedFirstYield: { value: "", display: false },
        nitrateNitrogen: "Не выбрано",
        ammoniumNitrateRequired: 0,
        moistureSpring: "Не выбрано",
      },
      step3: { step1result: 0, step2result: 0, totalresult: 0 },
      invalidFields: [],
    };
  }
}

const store = new SunflowerStore();
export default store;
