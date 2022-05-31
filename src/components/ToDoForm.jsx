const ToDoForm = ({ handleChange, handleSubmit, text }) => {
  return (
    <>
      <input
        value={text}
        type="text"
        onChange={handleChange}
        placeholder="Add a new task..."
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default ToDoForm;
