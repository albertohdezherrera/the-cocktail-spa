const misc = () => {
  const conactArrayText = (arr) => {
    const concatText = arr.length > 1 ? `${arr.slice(0, -1).join(', ')} y ${arr.slice(-1)}` : arr[0];
    return concatText;
  };

  const calculateAvgColor = (avg) => {
    let color;
    if (avg <= 5) {
      color = 'warning';
    } else if (avg > 5 && avg < 10) {
      color = 'moderate';
    } else {
      color = 'danger';
    }
    return color;
  };

  return {
    conactArrayText,
    calculateAvgColor,
  };
};

export default misc;
