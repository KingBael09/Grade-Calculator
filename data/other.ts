export type RegType = {
  name: string;
  value: number | string;
};

export const gradeValues: RegType[] = [
  { name: "A++", value: 10 },
  { name: "A+", value: 9 },
  { name: "A", value: 8 },
  { name: "B+", value: 7 },
  { name: "B", value: 6 },
  { name: "C+", value: 5 },
  { name: "C", value: 4 },
  { name: "D", value: 0 },
];
export const semValues: RegType[] = [
  { name: "I", value: 1 },
  { name: "II", value: 2 },
  { name: "III", value: 3 },
  { name: "IV", value: 4 },
  { name: "V", value: 5 },
  { name: "VI", value: 6 },
  { name: "VII", value: 7 },
  { name: "VIII", value: 8 },
];
export const branchValues: RegType[] = [
  { name: "Civil", value: "Civil" },
  { name: "Electrical", value: "Electrical" },
  { name: "Mechanical", value: "Mechanical" },
  { name: "Electroics & Telecommunication", value: "ENTC" },
  { name: "Computer Science", value: "CSE" },
  { name: "Information Technology", value: "IT" },
];
export const creditValues: RegType[] = [
  { name: "5", value: 5 },
  { name: "4", value: 4 },
  { name: "3", value: 3 },
  { name: "2", value: 2 },
  { name: "1", value: 1 },
];
