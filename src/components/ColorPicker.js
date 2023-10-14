import React, { useState } from 'react';

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'cyan', 'magenta', 'brown'];

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const handleColorClick = (color) => {
    if (selectedColor === color) {
      // If the clicked color is the currently selected color, unselect it.
      setSelectedColor(null);
    } else {
      // Otherwise, select the new color.
      setSelectedColor(color);
      setShowColorList(false); // Hide the color list when a color is selected.
    }
  };

  return (
    <div className="color-picker">
      
      {showColorList && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`color-box ${selectedColor === color ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      <div className="selected-color-container">
        {selectedColor && (
          <div className="selected-color" style={{ backgroundColor: selectedColor }}>
          </div>
        )}
      </div>
      <button onClick={() => setShowColorList(!showColorList)}>
        Pick a color
      </button>
    </div>
  );
}

export default ColorPicker;
