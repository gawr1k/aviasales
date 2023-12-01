/* eslint-disable no-unused-vars */
function setSelectedOption(selectedOption) {
  return {
    type: 'SET_SELECTED_OPTION',
    payload: selectedOption,
  }
}

const removeSelectedOption = (selectedOption) => ({
  type: 'REMOVE_SELECTED_OPTION',
  payload: selectedOption,
})

const addSelectedOption = (selectedOption) => ({
  type: 'ADD_SELECTED_OPTION',
  payload: selectedOption,
})

export default function toggleSelectedOption(selectedOption) {
  return (dispatch, getState) => {
    const { selectedOption: { selectedOption: currentSelectedOption } } = getState();
    if (currentSelectedOption === selectedOption) {
      dispatch(removeSelectedOption(selectedOption))
    } else {
      dispatch(addSelectedOption(selectedOption))
    }
  }
}
