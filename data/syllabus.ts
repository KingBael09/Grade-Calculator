export type subjectType = {
  [Branch: string]: BranchType;
};

export type BranchType = {
  [Sem: number | string]: SemType[];
};

export type SemType = {
  isExtra: boolean;
  code: string;
  name: string;
  credits: number | string;
};

const SubjectData: subjectType = {
  Civil: {
    1: [
      { isExtra: false, code: "CE1001", name: "Sub1_Civil_Sem1", credits: 2 },
      { isExtra: false, code: "CE1002", name: "Sub2_Civil_Sem1", credits: 2 },
      { isExtra: false, code: "CE1003", name: "Sub3_Civil_Sem1", credits: 2 },
      { isExtra: false, code: "CE1004", name: "Sub4_Civil_Sem1", credits: 2 },
    ],
    2: [
      { isExtra: false, code: "CE1001", name: "Sub1_Civil_Sem2", credits: 2 },
      { isExtra: false, code: "CE1002", name: "Sub2_Civil_Sem2", credits: 2 },
      { isExtra: false, code: "CE1003", name: "Sub3_Civil_Sem2", credits: 2 },
      { isExtra: false, code: "CE1004", name: "Sub4_Civil_Sem2", credits: 2 },
    ],
    3: [
      { isExtra: false, code: "CE2001", name: "Sub1_Civil_Sem3", credits: 2 },
      { isExtra: false, code: "CE2002", name: "Sub2_Civil_Sem3", credits: 2 },
      { isExtra: false, code: "CE2003", name: "Sub3_Civil_Sem3", credits: 2 },
      { isExtra: false, code: "CE2004", name: "Sub4_Civil_Sem3", credits: 2 },
    ],
    4: [
      { isExtra: false, code: "CE2001", name: "Sub1_Civil_Sem4", credits: 2 },
      { isExtra: false, code: "CE2002", name: "Sub2_Civil_Sem4", credits: 2 },
      { isExtra: false, code: "CE2003", name: "Sub3_Civil_Sem4", credits: 2 },
      { isExtra: false, code: "CE2004", name: "Sub4_Civil_Sem4", credits: 2 },
    ],
    5: [
      { isExtra: false, code: "CE3001", name: "Sub1_Civil_Sem5", credits: 2 },
      { isExtra: false, code: "CE3002", name: "Sub2_Civil_Sem5", credits: 2 },
      { isExtra: false, code: "CE3003", name: "Sub3_Civil_Sem5", credits: 2 },
      { isExtra: false, code: "CE3004", name: "Sub4_Civil_Sem5", credits: 2 },
    ],
    6: [
      { isExtra: false, code: "CE3001", name: "Sub1_Civil_Sem6", credits: 2 },
      { isExtra: false, code: "CE3002", name: "Sub2_Civil_Sem6", credits: 2 },
      { isExtra: false, code: "CE3003", name: "Sub3_Civil_Sem6", credits: 2 },
      { isExtra: false, code: "CE3004", name: "Sub4_Civil_Sem6", credits: 2 },
    ],
    7: [
      { isExtra: false, code: "CE4001", name: "Sub1_Civil_Sem7", credits: 2 },
      { isExtra: false, code: "CE4002", name: "Sub2_Civil_Sem7", credits: 2 },
      { isExtra: false, code: "CE4003", name: "Sub3_Civil_Sem7", credits: 2 },
      { isExtra: false, code: "CE4004", name: "Sub4_Civil_Sem7", credits: 2 },
    ],
    8: [
      { isExtra: false, code: "CE4001", name: "Sub1_Civil_Sem8", credits: 2 },
      { isExtra: false, code: "CE4002", name: "Sub2_Civil_Sem8", credits: 2 },
      { isExtra: false, code: "CE4003", name: "Sub3_Civil_Sem8", credits: 2 },
      { isExtra: false, code: "CE4004", name: "Sub4_Civil_Sem8", credits: 2 },
    ],
  },
  Electrical: {
    1: [
      {
        isExtra: false,
        code: "EE1001",
        name: "Sub1_Electrical_Sem1",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE1002",
        name: "Sub2_Electrical_Sem1",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE1003",
        name: "Sub3_Electrical_Sem1",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE1004",
        name: "Sub4_Electrical_Sem1",
        credits: 2,
      },
    ],
    2: [
      {
        isExtra: false,
        code: "EE1001",
        name: "Sub1_Electrical_Sem2",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE1002",
        name: "Sub2_Electrical_Sem2",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE1003",
        name: "Sub3_Electrical_Sem2",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE1004",
        name: "Sub4_Electrical_Sem2",
        credits: 2,
      },
    ],
    3: [
      {
        isExtra: false,
        code: "EE2001",
        name: "Sub1_Electrical_Sem3",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE2002",
        name: "Sub2_Electrical_Sem3",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE2003",
        name: "Sub3_Electrical_Sem3",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE2004",
        name: "Sub4_Electrical_Sem3",
        credits: 2,
      },
    ],
    4: [
      {
        isExtra: false,
        code: "EE2001",
        name: "Sub1_Electrical_Sem4",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE2002",
        name: "Sub2_Electrical_Sem4",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE2003",
        name: "Sub3_Electrical_Sem4",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE2004",
        name: "Sub4_Electrical_Sem4",
        credits: 2,
      },
    ],
    5: [
      {
        isExtra: false,
        code: "EE3001",
        name: "Sub1_Electrical_Sem5",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE3002",
        name: "Sub2_Electrical_Sem5",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE3003",
        name: "Sub3_Electrical_Sem5",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE3004",
        name: "Sub4_Electrical_Sem5",
        credits: 2,
      },
    ],
    6: [
      {
        isExtra: false,
        code: "EE3001",
        name: "Sub1_Electrical_Sem6",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE3002",
        name: "Sub2_Electrical_Sem6",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE3003",
        name: "Sub3_Electrical_Sem6",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE3004",
        name: "Sub4_Electrical_Sem6",
        credits: 2,
      },
    ],
    7: [
      {
        isExtra: false,
        code: "EE4001",
        name: "Sub1_Electrical_Sem7",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE4002",
        name: "Sub2_Electrical_Sem7",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE4003",
        name: "Sub3_Electrical_Sem7",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE4004",
        name: "Sub4_Electrical_Sem7",
        credits: 2,
      },
    ],
    8: [
      {
        isExtra: false,
        code: "EE4001",
        name: "Sub1_Electrical_Sem8",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE4002",
        name: "Sub2_Electrical_Sem8",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE4003",
        name: "Sub3_Electrical_Sem8",
        credits: 2,
      },
      {
        isExtra: false,
        code: "EE4004",
        name: "Sub4_Electrical_Sem8",
        credits: 2,
      },
    ],
  },
  Mechanical: {
    1: [
      {
        isExtra: false,
        code: "ME1001",
        name: "Sub1_Mechanical_Sem1",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME1002",
        name: "Sub2_Mechanical_Sem1",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME1003",
        name: "Sub3_Mechanical_Sem1",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME1004",
        name: "Sub4_Mechanical_Sem1",
        credits: 2,
      },
    ],
    2: [
      {
        isExtra: false,
        code: "ME1001",
        name: "Sub1_Mechanical_Sem2",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME1002",
        name: "Sub2_Mechanical_Sem2",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME1003",
        name: "Sub3_Mechanical_Sem2",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME1004",
        name: "Sub4_Mechanical_Sem2",
        credits: 2,
      },
    ],
    3: [
      {
        isExtra: false,
        code: "ME2001",
        name: "Sub1_Mechanical_Sem3",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME2002",
        name: "Sub2_Mechanical_Sem3",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME2003",
        name: "Sub3_Mechanical_Sem3",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME2004",
        name: "Sub4_Mechanical_Sem3",
        credits: 2,
      },
    ],
    4: [
      {
        isExtra: false,
        code: "ME2001",
        name: "Sub1_Mechanical_Sem4",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME2002",
        name: "Sub2_Mechanical_Sem4",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME2003",
        name: "Sub3_Mechanical_Sem4",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME2004",
        name: "Sub4_Mechanical_Sem4",
        credits: 2,
      },
    ],
    5: [
      {
        isExtra: false,
        code: "ME3001",
        name: "Sub1_Mechanical_Sem5",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME3002",
        name: "Sub2_Mechanical_Sem5",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME3003",
        name: "Sub3_Mechanical_Sem5",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME3004",
        name: "Sub4_Mechanical_Sem5",
        credits: 2,
      },
    ],
    6: [
      {
        isExtra: false,
        code: "ME3001",
        name: "Sub1_Mechanical_Sem6",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME3002",
        name: "Sub2_Mechanical_Sem6",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME3003",
        name: "Sub3_Mechanical_Sem6",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME3004",
        name: "Sub4_Mechanical_Sem6",
        credits: 2,
      },
    ],
    7: [
      {
        isExtra: false,
        code: "ME4001",
        name: "Sub1_Mechanical_Sem7",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME4002",
        name: "Sub2_Mechanical_Sem7",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME4003",
        name: "Sub3_Mechanical_Sem7",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME4004",
        name: "Sub4_Mechanical_Sem7",
        credits: 2,
      },
    ],
    8: [
      {
        isExtra: false,
        code: "ME4001",
        name: "Sub1_Mechanical_Sem8",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME4002",
        name: "Sub2_Mechanical_Sem8",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME4003",
        name: "Sub3_Mechanical_Sem8",
        credits: 2,
      },
      {
        isExtra: false,
        code: "ME4004",
        name: "Sub4_Mechanical_Sem8",
        credits: 2,
      },
    ],
  },
  CSE: {
    1: [
      { isExtra: false, code: "CS1001", name: "Sub1_CSE_Sem1", credits: 2 },
      { isExtra: false, code: "CS1002", name: "Sub2_CSE_Sem1", credits: 2 },
      { isExtra: false, code: "CS1003", name: "Sub3_CSE_Sem1", credits: 2 },
      { isExtra: false, code: "CS1004", name: "Sub4_CSE_Sem1", credits: 2 },
    ],
    2: [
      { isExtra: false, code: "CS1001", name: "Sub1_CSE_Sem2", credits: 2 },
      { isExtra: false, code: "CS1002", name: "Sub2_CSE_Sem2", credits: 2 },
      { isExtra: false, code: "CS1003", name: "Sub3_CSE_Sem2", credits: 2 },
      { isExtra: false, code: "CS1004", name: "Sub4_CSE_Sem2", credits: 2 },
    ],
    3: [
      { isExtra: false, code: "CS2001", name: "Sub1_CSE_Sem3", credits: 2 },
      { isExtra: false, code: "CS2002", name: "Sub2_CSE_Sem3", credits: 2 },
      { isExtra: false, code: "CS2003", name: "Sub3_CSE_Sem3", credits: 2 },
      { isExtra: false, code: "CS2004", name: "Sub4_CSE_Sem3", credits: 2 },
    ],
    4: [
      { isExtra: false, code: "CS2001", name: "Sub1_CSE_Sem4", credits: 2 },
      { isExtra: false, code: "CS2002", name: "Sub2_CSE_Sem4", credits: 2 },
      { isExtra: false, code: "CS2003", name: "Sub3_CSE_Sem4", credits: 2 },
      { isExtra: false, code: "CS2004", name: "Sub4_CSE_Sem4", credits: 2 },
    ],
    5: [
      { isExtra: false, code: "CS3001", name: "Sub1_CSE_Sem5", credits: 2 },
      { isExtra: false, code: "CS3002", name: "Sub2_CSE_Sem5", credits: 2 },
      { isExtra: false, code: "CS3003", name: "Sub3_CSE_Sem5", credits: 2 },
      { isExtra: false, code: "CS3004", name: "Sub4_CSE_Sem5", credits: 2 },
    ],
    6: [
      { isExtra: false, code: "CS3001", name: "Sub1_CSE_Sem6", credits: 2 },
      { isExtra: false, code: "CS3002", name: "Sub2_CSE_Sem6", credits: 2 },
      { isExtra: false, code: "CS3003", name: "Sub3_CSE_Sem6", credits: 2 },
      { isExtra: false, code: "CS3004", name: "Sub4_CSE_Sem6", credits: 2 },
    ],
    7: [
      { isExtra: false, code: "CS4001", name: "Sub1_CSE_Sem7", credits: 2 },
      { isExtra: false, code: "CS4002", name: "Sub2_CSE_Sem7", credits: 2 },
      { isExtra: false, code: "CS4003", name: "Sub3_CSE_Sem7", credits: 2 },
      { isExtra: false, code: "CS4004", name: "Sub4_CSE_Sem7", credits: 2 },
    ],
    8: [
      { isExtra: false, code: "CS4001", name: "Sub1_CSE_Sem8", credits: 2 },
      { isExtra: false, code: "CS4002", name: "Sub2_CSE_Sem8", credits: 2 },
      { isExtra: false, code: "CS4003", name: "Sub3_CSE_Sem8", credits: 2 },
      { isExtra: false, code: "CS4004", name: "Sub4_CSE_Sem8", credits: 2 },
    ],
  },
  IT: {
    1: [
      { isExtra: false, code: "IT1001", name: "Sub1_IT_Sem1", credits: 2 },
      { isExtra: false, code: "IT1002", name: "Sub2_IT_Sem1", credits: 2 },
      { isExtra: false, code: "IT1003", name: "Sub3_IT_Sem1", credits: 2 },
      { isExtra: false, code: "IT1004", name: "Sub4_IT_Sem1", credits: 2 },
    ],
    2: [
      { isExtra: false, code: "IT1001", name: "Sub1_IT_Sem2", credits: 2 },
      { isExtra: false, code: "IT1002", name: "Sub2_IT_Sem2", credits: 2 },
      { isExtra: false, code: "IT1003", name: "Sub3_IT_Sem2", credits: 2 },
      { isExtra: false, code: "IT1004", name: "Sub4_IT_Sem2", credits: 2 },
    ],
    3: [
      { isExtra: false, code: "IT2001", name: "Sub1_IT_Sem3", credits: 2 },
      { isExtra: false, code: "IT2002", name: "Sub2_IT_Sem3", credits: 2 },
      { isExtra: false, code: "IT2003", name: "Sub3_IT_Sem3", credits: 2 },
      { isExtra: false, code: "IT2004", name: "Sub4_IT_Sem3", credits: 2 },
    ],
    4: [
      { isExtra: false, code: "IT2001", name: "Sub1_IT_Sem4", credits: 2 },
      { isExtra: false, code: "IT2002", name: "Sub2_IT_Sem4", credits: 2 },
      { isExtra: false, code: "IT2003", name: "Sub3_IT_Sem4", credits: 2 },
      { isExtra: false, code: "IT2004", name: "Sub4_IT_Sem4", credits: 2 },
    ],
    5: [
      { isExtra: false, code: "IT3001", name: "Sub1_IT_Sem5", credits: 2 },
      { isExtra: false, code: "IT3002", name: "Sub2_IT_Sem5", credits: 2 },
      { isExtra: false, code: "IT3003", name: "Sub3_IT_Sem5", credits: 2 },
      { isExtra: false, code: "IT3004", name: "Sub4_IT_Sem5", credits: 2 },
    ],
    6: [
      { isExtra: false, code: "IT3001", name: "Sub1_IT_Sem6", credits: 2 },
      { isExtra: false, code: "IT3002", name: "Sub2_IT_Sem6", credits: 2 },
      { isExtra: false, code: "IT3003", name: "Sub3_IT_Sem6", credits: 2 },
      { isExtra: false, code: "IT3004", name: "Sub4_IT_Sem6", credits: 2 },
    ],
    7: [
      { isExtra: false, code: "IT4001", name: "Sub1_IT_Sem7", credits: 2 },
      { isExtra: false, code: "IT4002", name: "Sub2_IT_Sem7", credits: 2 },
      { isExtra: false, code: "IT4003", name: "Sub3_IT_Sem7", credits: 2 },
      { isExtra: false, code: "IT4004", name: "Sub4_IT_Sem7", credits: 2 },
    ],
    8: [
      { isExtra: false, code: "IT4001", name: "Sub1_IT_Sem8", credits: 2 },
      { isExtra: false, code: "IT4002", name: "Sub2_IT_Sem8", credits: 2 },
      { isExtra: false, code: "IT4003", name: "Sub3_IT_Sem8", credits: 2 },
      { isExtra: false, code: "IT4004", name: "Sub4_IT_Sem8", credits: 2 },
    ],
  },
};

export default SubjectData;
