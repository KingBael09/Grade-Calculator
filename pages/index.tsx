import Head from "next/head";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { useState, useRef } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import {
  gradeValues,
  branchValues,
  creditValues,
  semValues,
  RegType,
} from "../data/other";
import data, { SemType, subjectType } from "../data/syllabus";
import SelectComponent from "./components/common/selectComponent";
import { default as Btn } from "./components/common/buttonComponent";
import Results from "./components/results";
import RefreshIcon from "@mui/icons-material/Refresh";
import Dialog from "./components/common/dialogComponent";
import Snackbar from "./components/common/snakcbarComponent";

type GradeType = {
  [key: string]: number;
};

type EventType = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

export default function Home() {
  let Reference = useRef(0);

  const [Sem, setSem] = useState<string | number>("");
  const [Branch, setBranch] = useState<string>("");
  const [Grade, setGrade] = useState<any>([]);
  const [SelectionMode, setSelectionMode] = useState(true);
  const [Result, setResult] = useState(0);

  const [Ref, setRef] = useState<subjectType>(data);
  const [modalLock, setmodalLock] = useState(false);
  const [globalWidth, setGlobalWidth] = useState<number>(0);
  const [errorTrigger, setErrorTrigger] = useState(false);

  const handleSubmit = () => {
    if (Sem !== "" && Branch !== "") {
      setSelectionMode(false);
    } else {
      setErrorTrigger(true);
    }
  };

  const calcGrade = () => {
    const currentSlot = Ref[Branch][Sem];

    const FinalGrades = Object.keys(Grade)
      .sort()
      .reduce((obj: any, key: any) => {
        obj[key] = Grade[key];
        return obj;
      }, {});

    const SortedScore: number[] = Object.values(FinalGrades);
    const SortedCredit: number[] = currentSlot.map((e: any) => {
      return e.credits;
    });

    let totalScore = 0;
    let totalCredit = 0;

    for (let i = 0; i < SortedCredit.length; i++) {
      totalScore += SortedScore[i] * SortedCredit[i];
      totalCredit += SortedCredit[i];
    }

    if (isNaN(totalScore) || typeof totalCredit !== "number") {
      setErrorTrigger(true);
    } else {
      setResult(totalScore / totalCredit);
      // if (globalWidth < 1024) {
      setmodalLock(true);
      // }
    }
  };

  const handleAdd = () => {
    Reference.current += 1;
    const id = Reference.current;
    // Making Deep Copy
    const Obj: subjectType = JSON.parse(JSON.stringify(Ref));
    let custom = Obj[Branch][Sem];
    custom.push({
      isExtra: true,
      code: "ZX00" + id,
      name: `Extra Subject ${id}`,
      credits: "",
    });
    setRef(Obj);
  };

  const handleExtraCredits = (e: SemType, evnt: EventType) => {
    // Making Deep Copy
    console.log({ e: e, evnt: evnt });
    const Obj: subjectType = JSON.parse(JSON.stringify(Ref));
    let custom = Obj[Branch][Sem];

    custom.forEach((element: SemType, index: number) => {
      console.log({ element, index });
      if (element.code === e.code) {
        custom[index].credits = evnt.target.value;
        return;
      }
    });
    setRef(Obj);
  };

  const handleDelete = (e: SemType) => {
    const Obj: subjectType = JSON.parse(JSON.stringify(Ref));
    let custom = Obj[Branch][Sem];

    custom.forEach((element: SemType, index: number) => {
      if (element.code === e.code) {
        custom.splice(index, 1);
        return;
      }
    });
    setRef(Obj);
  };

  const resetAll = () => {
    setSem("");
    setBranch("");
    setSelectionMode(true);
    setGrade([]);
    setResult(0);
    setRef(data);
  };

  const SlotSelection = () => {
    return (
      <div className={styles.slot}>
        <div className={styles.slotHeading}>
          Hello, this is a CGPA Calutalor Utility <br />
          Enter your Branch and Semester to Proceed....
        </div>
        <SelectComponent
          className={styles.select}
          value={Branch}
          label={"Branch"}
          menu={branchValues}
          onChange={(event: EventType) => {
            setBranch(event.target.value);
          }}
        />
        <SelectComponent
          className={styles.select}
          value={Sem}
          label={"Semester"}
          menu={semValues}
          onChange={(event: EventType) => {
            setSem(event.target.value);
          }}
        />
      </div>
    );
  };

  type SubjectRowProps = {
    children?: React.ReactNode;
    mapData: SemType;
    isDefault?: boolean;
  };

  const SubjectRow = (props: SubjectRowProps) => {
    const e = props.mapData;
    const isDefault = props.isDefault;
    return (
      <div className={styles.subRow}>
        <div className={styles.name}>
          <div className={styles.delete}>
            <IconButton
              onClick={() => {
                handleDelete(e);
              }}
            >
              <DeleteIcon className={styles.deleteIcon} />
            </IconButton>
          </div>
          {isDefault ? (
            <div>
              {e.name} <div className={styles.credits}>({e.credits})</div>
            </div>
          ) : (
            <TextField
              label={e.name}
              variant="standard"
              placeholder={"Name of Subject"}
              InputLabelProps={{ className: styles.text }}
              InputProps={{ className: styles.text }}
            />
          )}
        </div>
        <div className={styles.subRowOuter}>
          {props.children}
          <div>
            <SelectComponent
              className={styles.select}
              value={Grade[e.code] !== undefined ? Grade[e.code] : ""}
              label={"Grade"}
              menu={gradeValues}
              onChange={(event: EventType) => {
                setGrade({
                  ...Grade,
                  [e.code]: event.target.value,
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  const SubjectSelection = () => {
    const currentSlot = Ref[Branch][Sem];
    return (
      <div className={styles.subSelection}>
        {currentSlot.map((e: SemType) => {
          if (!e.isExtra) {
            return (
              <SubjectRow
                isDefault={true}
                mapData={e}
                key={e.code}
              ></SubjectRow>
            );
          } else {
            return (
              <SubjectRow mapData={e} key={e.code}>
                <SelectComponent
                  value={e.credits}
                  className={styles.select}
                  label={"Credits"}
                  menu={creditValues}
                  onChange={(evnt: EventType) => {
                    handleExtraCredits(e, evnt);
                  }}
                />
              </SubjectRow>
            );
          }
        })}
        <div className={styles.add}>
          <Btn className={styles.btn} onClick={handleAdd}>
            <AddIcon className={styles.addIcon} />
          </Btn>
          <Btn
            onClick={() => {
              setRef(data);
              setGrade([]);
            }}
            disabled={Ref !== data ? false : true}
            className={styles.btn}
          >
            <RefreshIcon />
          </Btn>
        </div>
      </div>
    );
  };

  const checkWidth = (e: any) => {
    const width = e.innerWidth;
    setGlobalWidth(width);
  };

  useEffect(() => {
    checkWidth(window);

    window.addEventListener("resize", (e) => {
      checkWidth(e.target);
    });
    return () => {
      window.removeEventListener("resize", (e) => {
        checkWidth(e.target);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>CGPA Calculator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Snackbar data={globalWidth} action={[errorTrigger, setErrorTrigger]} />
      <Dialog res={Result} action={[modalLock, setmodalLock]} />
      <div className={styles.container}>
        <div className={styles.selection}>
          <div className={styles.main}>
            {SelectionMode ? <SlotSelection /> : <SubjectSelection />}
          </div>
          <div className={styles.button}>
            <Btn
              disabled={Branch === "" && Sem === ""}
              className={styles.btn}
              onClick={resetAll}
            >
              Reset
            </Btn>

            {SelectionMode ? (
              <Btn className={styles.btn} onClick={handleSubmit}>
                Next
              </Btn>
            ) : (
              <Btn className={styles.btn} onClick={calcGrade}>
                Submit
              </Btn>
            )}
          </div>
        </div>
        <div className={styles.resultWrapper}>
          <Results res={Result} />
        </div>
      </div>
    </>
  );
}
