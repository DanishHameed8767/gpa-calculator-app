import { useState } from "react";

export default function Form() {
  const [gpa, setGpa] = useState("pending");
  const [fields, setFields] = useState({
    pf: null,
    pfl: null,
    calculus: null,
    dm: null,
    aict: null,
    aictl: null,
    ap: null,
    apl: null,
  });
  const handleChangeFields = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let pfGP = calculatePfGP(fields) * 3;
    let pflGP = calculatePflGP(fields) * 1;
    let calculusGP = calculateCalculusGP(fields) * 3;
    let dmGP = calculateDMGP(fields) * 3;
    let aictGP = calculateAictGP(fields) * 2;
    let aictlGP = calculateAictlGP(fields) * 1;
    let apGP = calculateApGP(fields) * 2;
    let aplGP = calculateAplGP(fields) * 1;
    let sum =
      pfGP + pflGP + calculusGP + dmGP + aictGP + aictlGP + apGP + aplGP;
    let result = sum / 16;
    setGpa(result);
    document.getElementById("result-elem").scrollIntoView({ behavior: "smooth" });
    window.location.hash = "#result-elem";
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="pf" className="form-label">
            PF Marks
          </label>
          <input
            type="number"
            className="form-control"
            value={fields.pf}
            onChange={handleChangeFields}
            id="pf"
            name="pf"
            placeholder="Enter marks out of 100"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="calculus" className="form-label">
            Calculus Marks
          </label>
          <input
            value={fields.calculus}
            onChange={handleChangeFields}
            type="number"
            className="form-control"
            id="calculus"
            name="calculus"
            placeholder="Enter marks out of 100"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="aict" className="form-label">
            AICT Marks
          </label>
          <input
            value={fields.aict}
            type="number"
            onChange={handleChangeFields}
            className="form-control"
            id="aict"
            name="aict"
            placeholder="Enter marks out of 100"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dm" className="form-label">
            DM Marks
          </label>
          <input
            value={fields.dm}
            type="number"
            onChange={handleChangeFields}
            className="form-control"
            id="dm"
            name="dm"
            placeholder="Enter marks out of 100"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ap" className="form-label">
            Applied Physics Marks
          </label>
          <input
            value={fields.ap}
            type="number"
            className="form-control"
            onChange={handleChangeFields}
            id="ap"
            name="ap"
            placeholder="Enter marks out of 100"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apl" className="form-label">
            APL Marks
          </label>
          <input
            value={fields.apl}
            type="number"
            onChange={handleChangeFields}
            className="form-control"
            id="apl"
            name="apl"
            placeholder="Enter marks out of 100"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="aictl" className="form-label">
            AICTL Marks
          </label>
          <input
            value={fields.aictl}
            type="number"
            onChange={handleChangeFields}
            className="form-control"
            id="aictl"
            name="aictl"
            placeholder="Enter marks out of 100"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pfl" className="form-label">
            PFL Marks
          </label>
          <input
            value={fields.pfl}
            type="number"
            onChange={handleChangeFields}
            className="form-control"
            id="pfl"
            name="pfl"
            placeholder="Enter marks out of 100"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {gpa !== "pending"? <h3  className="mt-3" id="result-elem">Your estimated gpa is: {gpa}</h3>:<h3 className="mt-3" id="result-elem"></h3>}
    </>
  );
}

const calculatePfGP = (fields) => {
  let pfM = parseInt(fields.pf);
  let pf;
  if (pfM >= 85) {
    pf = 4;
  } else if (pfM >= 75 && pfM < 85) {
    pf = 3.7;
  } else if (pfM >= 65 && pfM < 75) {
    pf = 3.3;
  } else if (pfM >= 55 && pfM < 65) {
    pf = 3;
  } else if (pfM >= 50 && pfM < 55) {
    pf = 2.7;
  } else if (pfM >= 45 && pfM < 50) {
    pf = 2.3;
  } else if (pfM >= 40 && pfM < 45) {
    pf = 2;
  } else if (pfM >= 35 && pfM < 40) {
    pf = 1.7;
  } else if (pfM >= 30 && pfM < 35) {
    pf = 1.3;
  } else if (pfM >= 25 && pfM < 30) {
    pf = 1;
  } else {
    pf = 0;
  }
  return pf;
};

const calculatePflGP = (fields) => {
  let pfM = parseInt(fields.pfl);
  let pf;
  if (pfM >= 85) {
    pf = 4;
  } else if (pfM >= 75 && pfM < 85) {
    pf = 3.7;
  } else if (pfM >= 65 && pfM < 75) {
    pf = 3.3;
  } else if (pfM >= 55 && pfM < 65) {
    pf = 3;
  } else if (pfM >= 50 && pfM < 55) {
    pf = 2.7;
  } else if (pfM >= 45 && pfM < 50) {
    pf = 2.3;
  } else if (pfM >= 40 && pfM < 45) {
    pf = 2;
  } else if (pfM >= 35 && pfM < 40) {
    pf = 1.7;
  } else if (pfM >= 30 && pfM < 35) {
    pf = 1.3;
  } else if (pfM >= 25 && pfM < 30) {
    pf = 1;
  } else {
    pf = 0;
  }
  return pf;
};

const calculateCalculusGP = (fields) => {
  let pfM = parseInt(fields.calculus);
  let pf;
  if (pfM >= 85) {
    pf = 4;
  } else if (pfM >= 75 && pfM < 85) {
    pf = 3.7;
  } else if (pfM >= 65 && pfM < 75) {
    pf = 3.3;
  } else if (pfM >= 55 && pfM < 65) {
    pf = 3;
  } else if (pfM >= 50 && pfM < 55) {
    pf = 2.7;
  } else if (pfM >= 45 && pfM < 50) {
    pf = 2.3;
  } else if (pfM >= 40 && pfM < 45) {
    pf = 2;
  } else if (pfM >= 35 && pfM < 40) {
    pf = 1.7;
  } else if (pfM >= 30 && pfM < 35) {
    pf = 1.3;
  } else if (pfM >= 25 && pfM < 30) {
    pf = 1;
  } else {
    pf = 0;
  }
  return pf;
};

const calculateDMGP = (fields) => {
  let pfM = parseInt(fields.dm);
  let pf;
  if (pfM >= 80) {
    pf = 4;
  } else if (pfM >= 75 && pfM < 80) {
    pf = 3.7;
  } else if (pfM >= 70 && pfM < 75) {
    pf = 3.3;
  } else if (pfM >= 65 && pfM < 70) {
    pf = 3;
  } else if (pfM >= 60 && pfM < 65) {
    pf = 2.7;
  } else if (pfM >= 55 && pfM < 60) {
    pf = 2.3;
  } else if (pfM >= 50 && pfM < 55) {
    pf = 2;
  } else if (pfM >= 45 && pfM < 50) {
    pf = 1.7;
  } else if (pfM >= 40 && pfM < 45) {
    pf = 1.3;
  } else if (pfM >= 35 && pfM < 40) {
    pf = 1;
  } else {
    pf = 0;
  }
  return pf;
};

const calculateAictGP = (fields) => {
  let pfM = parseInt(fields.aict);
  let pf;
  if (pfM >= 85) {
    pf = 4;
  } else if (pfM >= 75 && pfM < 85) {
    pf = 3.7;
  } else if (pfM >= 65 && pfM < 75) {
    pf = 3.3;
  } else if (pfM >= 55 && pfM < 65) {
    pf = 3;
  } else if (pfM >= 50 && pfM < 55) {
    pf = 2.7;
  } else if (pfM >= 45 && pfM < 50) {
    pf = 2.3;
  } else if (pfM >= 40 && pfM < 45) {
    pf = 2;
  } else if (pfM >= 35 && pfM < 40) {
    pf = 1.7;
  } else if (pfM >= 30 && pfM < 35) {
    pf = 1.3;
  } else if (pfM >= 25 && pfM < 30) {
    pf = 1;
  } else {
    pf = 0;
  }
  return pf;
};

const calculateAictlGP = (fields) => {
  let pfM = parseInt(fields.aictl);
  let pf;
  if (pfM >= 85) {
    pf = 4;
  } else if (pfM >= 75 && pfM < 85) {
    pf = 3.7;
  } else if (pfM >= 65 && pfM < 75) {
    pf = 3.3;
  } else if (pfM >= 55 && pfM < 65) {
    pf = 3;
  } else if (pfM >= 50 && pfM < 55) {
    pf = 2.7;
  } else if (pfM >= 45 && pfM < 50) {
    pf = 2.3;
  } else if (pfM >= 40 && pfM < 45) {
    pf = 2;
  } else if (pfM >= 35 && pfM < 40) {
    pf = 1.7;
  } else if (pfM >= 30 && pfM < 35) {
    pf = 1.3;
  } else if (pfM >= 25 && pfM < 30) {
    pf = 1;
  } else {
    pf = 0;
  }
  return pf;
};

const calculateApGP = (fields) => {
  let pfM = parseInt(fields.ap);
  let pf;
  if (pfM >= 85) {
    pf = 4;
  } else if (pfM >= 75 && pfM < 85) {
    pf = 3.7;
  } else if (pfM >= 65 && pfM < 75) {
    pf = 3.3;
  } else if (pfM >= 55 && pfM < 65) {
    pf = 3;
  } else if (pfM >= 50 && pfM < 55) {
    pf = 2.7;
  } else if (pfM >= 45 && pfM < 50) {
    pf = 2.3;
  } else if (pfM >= 40 && pfM < 45) {
    pf = 2;
  } else if (pfM >= 35 && pfM < 40) {
    pf = 1.7;
  } else if (pfM >= 30 && pfM < 35) {
    pf = 1.3;
  } else if (pfM >= 25 && pfM < 30) {
    pf = 1;
  } else {
    pf = 0;
  }
  return pf;
};

const calculateAplGP = (fields) => {
  let pfM = parseInt(fields.apl);
  let pf;
  if (pfM >= 80) {
    pf = 4;
  } else if (pfM >= 75 && pfM < 80) {
    pf = 3.7;
  } else if (pfM >= 70 && pfM < 75) {
    pf = 3.3;
  } else if (pfM >= 65 && pfM < 70) {
    pf = 3;
  } else if (pfM >= 60 && pfM < 65) {
    pf = 2.7;
  } else if (pfM >= 55 && pfM < 60) {
    pf = 2.3;
  } else if (pfM >= 50 && pfM < 55) {
    pf = 2;
  } else if (pfM >= 45 && pfM < 50) {
    pf = 1.7;
  } else if (pfM >= 40 && pfM < 45) {
    pf = 1.3;
  } else if (pfM >= 35 && pfM < 40) {
    pf = 1;
  } else {
    pf = 0;
  }
  return pf;
};
