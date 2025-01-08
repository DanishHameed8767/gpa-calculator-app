export default function Policy() {
  return (
    <>
      <div className="container my-3">
      <h1>Grading Policy</h1>
        <p>
          The GPA Calculator follows the below grading policy for assigning
          grades based on marks. The grade scale decreases incrementally through
          intermediate grades like <b>A-, B+, B-,</b> etc., ensuring precise
          evaluation of performance.
        </p>
        <h3>Courses with a 10-Marks Grading Difference</h3>
        For the following courses, the grades decrease with a 10-marks
        difference between successive ranges:
        <ul>
          <li>Programming Fundamentals (PF)</li>
          <li>PF Lab</li>
          <li>Calculus</li>
          <li>AICT (Artificial Intelligence and Communication Technology)</li>
          <li>AICT Lab</li>
          <li>Applied Physics</li>
        </ul>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Marks Range</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>85 and above</td>
              <td>A</td>
            </tr>
            <tr>
              <td>75 to 84</td>
              <td>A-</td>
            </tr>
            <tr>
              <td>65 to 74</td>
              <td>B+</td>
            </tr>
            <tr>
              <td>55 to 64</td>
              <td>B</td>
            </tr>
            <tr>
              <td>50 to 54</td>
              <td>B-</td>
            </tr>
            <tr>
              <td>45 to 49</td>
              <td>C+</td>
            </tr>
            <tr>
              <td>40 to 44</td>
              <td>C</td>
            </tr>
            <tr>
              <td>35 to 39</td>
              <td>C-</td>
            </tr>
            <tr>
              <td>30 to 34</td>
              <td>D+</td>
            </tr>
            <tr>
              <td>25 to 29</td>
              <td>D</td>
            </tr>
          </tbody>
        </table>
        <h3>Courses with a 5-Marks Grading Difference</h3>
        <p>
          For the following courses, the grades decrease with a 5-marks
          difference between successive ranges:
        </p>
        <ul>
          <li>Discrete Mathematics (DM)</li>
          <li>Applied Physics Lab</li>
        </ul>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Marks Range</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>80 and above</td>
              <td>A</td>
            </tr>
            <tr>
              <td>75 to 79</td>
              <td>A-</td>
            </tr>
            <tr>
              <td>70 to 74</td>
              <td>B+</td>
            </tr>
            <tr>
              <td>65 to 69</td>
              <td>B</td>
            </tr>
            <tr>
              <td>60 to 64</td>
              <td>B-</td>
            </tr>
            <tr>
              <td>55 to 59</td>
              <td>C+</td>
            </tr>
            <tr>
              <td>50 to 54</td>
              <td>C</td>
            </tr>
            <tr>
              <td>45 to 49</td>
              <td>C-</td>
            </tr>
            <tr>
              <td>40 to 44</td>
              <td>D+</td>
            </tr>
            <tr>
              <td>35 to 39</td>
              <td>D</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
