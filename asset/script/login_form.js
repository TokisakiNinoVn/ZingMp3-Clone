const closeFormLogin = document.getElementById('close_form--login');
const closeFormLogin2 = document.getElementById('close_form--login2');


closeFormLogin2.addEventListener('click', () => {
    formLoginStatus();
})

closeFormLogin.addEventListener('click', () => {
    formLoginStatus();
})

document.querySelector('.profile').addEventListener('click', () => {
    formLoginStatus();
});


document.querySelector('.open_login_admin').addEventListener('click', () => {
    document.querySelector('.list_options').style.display = 'none';
    document.querySelector('.login_congdong').style.display = 'block';
})



//login Events
let statusAccount = false;
const accountList = [
    {
        username: 'tokisakinino',
        password: '2004'
    },
    {
        username: 'admin',
        password: 'admin'
    }
]

document.getElementById('login_btn').addEventListener('click', () => {
    let getUserName = document.querySelector('.username').value;
    let getPassword = document.querySelector('.password').value;

    let trueUsername = getUserName.trim()
    let truePassword = getPassword.trim()
    if ((trueUsername == accountList[0].username && truePassword == accountList[0].password) || 
        (trueUsername == accountList[1].username && truePassword == accountList[1].password)) {
            statusAccount = true;
            document.querySelector('.form_login').style.display = 'none';
            document.querySelector('.login--true').style.display = 'flex';
            document.querySelector('.login--false').style.display = 'none';
            document.querySelector('.back_to_opsion--li').style.display = 'none';
            document.getElementById('logout_btn').style.display = 'flex';
            document.getElementById('login_btn').style.display = 'none';
            alert('Chào mừng bạn trở lại ' + `@${getUserName}` + '!');
    } else if ((getUserName == '' || getPassword == '')) {
        alert('Vui lòng nhập đầy đủ thông tin');
    } else {
        alert('Sai tên đăng nhập hoặc mật khẩu');
    }
})

//logout Events
document.getElementById('logout_btn').addEventListener('click', () => {
    document.querySelector('.form_login').style.display = 'none';
    document.querySelector('.login--true').style.display = 'none';
    document.querySelector('.login--false').style.display = 'flex';
    document.querySelector('.back_to_opsion--li').style.display = 'block';
    document.getElementById('logout_btn').style.display = 'none';
    document.getElementById('login_btn').style.display = 'flex';
    statusAccount = false;
});


//back to option on login form
document.querySelector('.back_to_opsion').addEventListener('click', () => {
    document.querySelector('.list_options').style.display = 'block';
    document.querySelector('.login_congdong').style.display = 'none';
    document.querySelector('.username').value = '';
    document.querySelector('.password').value = '';
    statusAccount = false;
});

//forget password
document.querySelector('.forget_pw').addEventListener('click', () => {
    alert('Vui lòng điền lại tài khoản và mật khẩu mà bạn đã quên trước đó! =)');
});

// Cập nhật thời gian mỗi giây
setInterval(updateClock, 500);
updateClock();

//module function
function formLoginStatus() {
    const statusFormLogin = document.querySelector('.form_login').style.display;

    if (statusFormLogin == 'flex') {
        document.querySelector('.form_login').style.display = 'none';
    } else {
    document.querySelector('.form_login').style.display = 'flex';
    }
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedDate = `Ngày ${now.getDate()} tháng ${now.getMonth() + 1} năm ${now.getFullYear()}`;

    const formattedTime = `${hours}:${minutes}:${seconds} [${amPm}]. ${formattedDate}`;
    document.querySelector('.time_now').textContent = formattedTime;
}

