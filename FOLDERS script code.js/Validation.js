function validate(){
    let name = document.getElementById('fname').value
    let target_msg = document.getElementById('msg');
    if (name === "") {
        target_ele.textContent = 'fname should not be empty';
        return false
    }

    else if (name.length < 2) {
        target_ele.textContent = 'Short Name';
        return false;
    }
}