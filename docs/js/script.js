        var btn1 = document.getElementById('btn-1');
        var input_name = document.getElementById('input-name');
        btn1.addEventListener('click', () => {
            var name = input_name.value;
            console.log(name);
            alert(`Hello ${name}`);
        });