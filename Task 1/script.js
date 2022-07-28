document.querySelector('#push').onclick = function() {
    if (document.querySelector('#newentry input').value.length == 0) {
        alert("Please Enter a Task!")
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newentry input').value}
                </span>
                <div class="delete">
                    <img src="delete icon.png">
                </div>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }
}