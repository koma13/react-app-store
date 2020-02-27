class Validator {

validateInputs(inputData) {
    let errorMsg = "";
    if(!inputData.name) {
      errorMsg +="Please enter name of application.\n"
    }
    if(!inputData.file) {
      errorMsg +="Please upload a file.\n"
    }

    if(errorMsg.length === 0){
      return true;
    } else {
      alert(errorMsg);
      return false;
    }
  }
}
export default Validator;