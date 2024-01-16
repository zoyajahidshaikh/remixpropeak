import config from '../../config/config';
import Holiday from '../../models/leave/holiday-model';

interface ValidationResult {
  success: boolean;
  message: string;
}

interface Output {
  success: boolean;
  message: string;
  day: string;
  forleaveReduction: any[]; // Update the type as needed
  totalCasualLeaves: number;
  totalSickLeaves: number;
  date: string;
  months: string[];
  saturday: number[];
}

interface NewLeaveApplication {
  workingDays: number;
}

class HolidayValidation {
  private $app: HolidayValidation = this;
  private holidayList: any[] = [];
  private output: Output = {
    success: false,
    message: '',
    day: '',
    forleaveReduction: [],
    totalCasualLeaves: 0,
    totalSickLeaves: 0,
    date: '',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    saturday: [],
  };

  public async init(inputDate: Date, totalCasualLeaves: number, totalSickLeaves: number): Promise<void> {
    this.output.totalCasualLeaves = totalCasualLeaves;
    this.output.totalSickLeaves = totalSickLeaves;

    const totalDays = new Date(inputDate.getFullYear(), inputDate.getMonth() + 1, 0).getDate();

    for (let i = 1; i <= totalDays; i++) {
      const newDate = new Date(inputDate.getFullYear(), inputDate.getMonth(), i);
      if (newDate.getDay() === 6) {
        this.output.saturday.push(newDate.getDate());
      }
    }

    await this.getHolidayList();
  }

  private async getHolidayList(): Promise<void> {
    try {
      const result = await Holiday.find();
      result.forEach((value) => {
        const holidayData = value.toObject(); // Convert Mongoose document to plain JavaScript object
        this.holidayList.push(holidayData);
        // config.holidayList.push(holidayData);
      });
    } catch (err) {
      console.error(err);
    }
  }
  

  public async checkHolidays(
    newLeaveApplication: NewLeaveApplication,
    year: number,
    month: number,
    date: number
  ): Promise<ValidationResult> {
    let validationResult: ValidationResult = { success: false, message: '' };
  
    if (newLeaveApplication.workingDays > 1) {
      for (let i = 0; i < newLeaveApplication.workingDays; i++) {
        const newDate = new Date(year, month, date);
        for (let j = 0; j < this.holidayList.length; j++) {
          validationResult = await this.checkHoliday(newLeaveApplication, newDate);
          if (validationResult.success) {
            this.output.message += validationResult.message + ' ';
          }
        }
        date -= 1;
      }
    } else {
      for (let i = 0; i < this.holidayList.length; i++) {
        const newDate = new Date(year, month, date);
        validationResult = await this.checkHoliday(newLeaveApplication, newDate);
        if (validationResult.success) {
          break;
        }
      }
    }
  
    validationResult = await this.checkForHoliday(new Date(year, month, date), this.holidayList);
    if (!validationResult.success) {
      validationResult = await this.checkForSunday(new Date(year, month, date), this.holidayList);
      if (!validationResult.success) {
        validationResult = await this.checkForSaturday(new Date(year, month, date), this.holidayList);
      }
    }
  
    return validationResult;
  }
  
  private async checkHoliday(
    newLeaveApplication: NewLeaveApplication,
    newDate: Date
  ): Promise<ValidationResult> {
    let validationResult: ValidationResult = { success: false, message: '' };
  
    for (let i = 0; i < this.holidayList.length; i++) {
      validationResult = await this.checkHolidays(newLeaveApplication, newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
      if (validationResult.success) {
        break;
      }
    }
  
    return validationResult;
  }

  private async checkForHoliday(inputDate: Date, holidayList: any[]): Promise<ValidationResult> {
    const validationResult: ValidationResult = { success: false, message: '' };

    for (const holiday of holidayList) {
      if (
        holiday.date === inputDate.getDate() &&
        holiday.month === this.output.months[inputDate.getMonth()]
      ) {
        validationResult.success = true;
        validationResult.message = `The selected date ${this.output.date} is holiday`;
        break;
      }
    }

    return validationResult;
  }

  private async checkForSunday(inputDate: Date, holidayList: any[]): Promise<ValidationResult> {
    const validationResult: ValidationResult = { success: false, message: '' };

    for (const holiday of holidayList) {
      if (holiday.day === inputDate.getDay() + 1) {
        validationResult.success = true;
        if (holiday.day === '1') {
          // isSunday = true; // Uncomment if isSunday is used elsewhere
        }
        validationResult.message = `The selected date ${this.output.date} is Sunday`;
        break;
      }
    }

    return validationResult;
  }

  private async checkForSaturday(inputDate: Date, holidayList: any[]): Promise<ValidationResult> {
    const validationResult: ValidationResult = { success: false, message: '' };

    for (const holiday of holidayList) {
      if (
        holiday.type.toLowerCase() === 'even' &&
        (this.output.saturday.indexOf(inputDate.getDate()) === 1 ||
          this.output.saturday.indexOf(inputDate.getDate()) === 3)
      ) {
        validationResult.success = true;
        validationResult.message = `The selected date ${this.output.date} is non-working Saturday`;
      } else if (
        (this.output.saturday.indexOf(inputDate.getDate()) === 0 ||
          this.output.saturday.indexOf(inputDate.getDate()) === 2)
      ) {
        validationResult.success = true;
        validationResult.message = `The selected date ${this.output.date} is working Saturday`;
      }
    }

    return validationResult;
  }
}

const holidayValidation = new HolidayValidation();
export default holidayValidation;
