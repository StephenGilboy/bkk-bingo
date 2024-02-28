import React from 'react';
import BingoCardSpace from './Space';

const BingoCard: React.FC = () => {
  const numbers: number[] = Array.from({ length: 75 }, (_, i) => i + 1);
  const shuffledNumbers: number[] = shuffle(numbers);
  const bingoCard: number[][] = [];

  for (let i = 0; i < 5; i++) {
    const row: number[] = shuffledNumbers.splice(0, 5);
    bingoCard.push(row);
  }

  return (
    <div>
      <h1>Bingo Card</h1>
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