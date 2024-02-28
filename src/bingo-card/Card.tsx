import React from 'react';
import BingoCardSpace from './Space';

const BingoCard: React.FC = () => {
  const numbers: string[] = [
    'pivot',
    'zoom-out',
    'synergy',
    'streamline',
    'deliverables',
    'milestones',
    'agile',
    'scrum',
    'sprint',
    'stakeholders',
    'roadmap',
    'alignment',
    'collaboration',
    'communication',
    'efficiency',
    'prioritization',
    'risk management',
    'resource allocation',
    'scope creep',
    'task management',
    'teamwork',
    'transparency',
    'workstream',
    'workflow',
    'benchmarking',
    'continuous improvement',
    'dependencies',
    'escalation',
    'gantt chart',
    'kickoff meeting',
    'project lifecycle',
    'status report',
    'work breakdown structure',
  ];

  const shuffledNumbers: string[] = shuffle(numbers);
  const bingoCard: string[][] = [];

  for (let i = 0; i < 5; i++) {
    const row: string[] = shuffledNumbers.splice(0, 5);
    bingoCard.push(row);
  }

  return (
    <div>
      <table>
        <tbody>
          {bingoCard.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((number, columnIndex) => (
                <td key={columnIndex}>
                  <BingoCardSpace value={number.toString()} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function shuffle(array: any[]): any[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default BingoCard;