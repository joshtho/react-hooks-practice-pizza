import React from "react";

function Pizza({pizza, setEditPizza}) {
  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Yes" : "No" }</td>
      <td>
        <button 
        type="button" 
        className="btn btn-primary" 
        onClick={() => setEditPizza({...pizza, 
          topping: pizza.topping,
          size: pizza.size,
          vegetarian: pizza.vegetarian,
        })}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
