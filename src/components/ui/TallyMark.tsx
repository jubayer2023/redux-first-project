import React from "react";

interface TallyMarksProps {
  number: number;
}

const TallyMarks: React.FC<TallyMarksProps> = ({ number }) => {
  const getTallyMarks = (num: number): string | null => {
    // Show tally marks only if the number is a multiple of 5 or exactly 5
    if (num % 5 === 0) {
      const groupsOfFive = Math.floor(num / 5);
      return "||||\\ ".repeat(groupsOfFive).trim();
    }
    return null;
  };

  const tallyMarks = getTallyMarks(number);

  return (
    <div style={{ fontSize: "24px", fontFamily: "monospace" }}>
      {tallyMarks ? tallyMarks : "Not a multiple of 5"}
    </div>
  );
};

export default TallyMarks;
