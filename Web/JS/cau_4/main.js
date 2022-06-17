while (true) {
    let input = prompt('Nhập email')
    const re = /^[A-Za-z0-9._%+-]+@thehindu\.co\.in$/;
    if (input.match(re)) {
        alert('Email nhập đúng định dạng')

    } else {
        alert('Email nhập sai định dạng!!! Vui lòng nhập lại!!!')

    }
}