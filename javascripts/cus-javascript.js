var $info = document.getElementById('info');
 $user = {
    firstName: "Reza",
    lastName: "Heshmati",
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}
function showText() {
    $info.innerHTML = $user.fullName();
}
