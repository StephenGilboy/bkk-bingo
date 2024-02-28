import React, { useState } from 'react';

const BingoCardSpace: React.FC<{value: string}> = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const spaceColor = isClicked ? 'green' : 'blue';

  return (
    <div
      style={{
        backgroundColor: spaceColor,
        width: '100px',
        height: '100px',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <span>{props.value}</span>
      </div>
  );
};

export default BingoCardSpace;