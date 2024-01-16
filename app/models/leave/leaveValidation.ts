import config from "../../config/config";

let $app: any = "";
let leavesPerMonth: any = "";
let leaves: {
  isEligible: boolean;
  balance: number;
  leavesTaken: number;
  workingDays: number;
} = {
  isEligible: false,
  balance: 0,
  leavesTaken: 0,
  workingDays: 0,
};

const leaveValidation = {
  init: function () {
    $app = this;
  },
  checkForBalance: function (
    leavesTaken: number,
    workingDays: number,
    leaveType: string,
    totalLeavesDefault: number,
    monthlyLeaves: string,
    monthStart: number
  ) {
    let totalDaysLeaves = 0;
    let currentMonth: number = new Date().getMonth();
    let totalpendingLeaves = 0;
    let monthLeaves: string[] = [];

    if (parseInt(workingDays.toString()) > 1) {
      totalDaysLeaves = parseInt(workingDays.toString());
    }

    if (monthlyLeaves !== "") {
      let length = 0;
      monthLeaves = monthlyLeaves.split(",");

      if (monthStart === 3) {
        length = config.months.indexOf(currentMonth.valueOf());
      } else {
        length = currentMonth;
      }

      for (let i = 0; i < length; i++) {
        totalpendingLeaves += parseInt(monthLeaves[i]);
      }

      leaves.balance = totalpendingLeaves - leavesTaken - totalDaysLeaves;
    } else {
      leaves.balance = totalLeavesDefault - leavesTaken - totalDaysLeaves;
    }

    leaves.isEligible = leaves.balance > 0;

    return leaves;
  },
};

export default leaveValidation;
