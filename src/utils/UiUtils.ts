const handleStateField = (setFunction: Function, fieldName: string, value: any) => setFunction && setFunction((obj: any) => ({ ...obj, [fieldName]: value }))

export const handleStateDropDownList = (setFunction: Function, fieldName: string, ref: any) => handleStateField(setFunction, fieldName, ref)

export const handleStateInputText = (setFunction: Function, fieldName: string, ref: any) => handleStateField(setFunction, fieldName, ref.target.value)
export const handleStateInputNumber = (setFunction: Function, fieldName: string, ref: any) => handleStateField(setFunction, fieldName, ref.target.value)
export const handleStateInputCheckbox = (setFunction: Function, fieldName: string, ref: any) => handleStateField(setFunction, fieldName, ref.target.checked)

// module.exports = {
// 	handleStateDropDownList,
//     handleStateInputText,
//     handleStateInputNumber,
//     handleStateInputCheckbox
// };

// export const UiUtils = {
//     handleStateDropDownList,
//     handleStateInputText,
//     handleStateInputNumber,
//     handleStateInputCheckbox
// }