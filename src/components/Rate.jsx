import formatCurrency from "../utils/formatCurrency.js";

export default function Rate({ isEditing, value, onValueChange }) {
  return isEditing ? (
    <td>
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>{formatCurrency(value)}</td>
  );
}
