// menampilkan output angka di sreen
let outputscreen = document.getElementById('output-screen');
function display(num) {
  outputscreen.value += num;
}

// function untuk menghitung dan menampilkan error jika input tidak benar
function calculator() {
  try {
    outputscreen.value = eval(outputscreen.value);
  } catch (err) {
    alert('Input yang anda masukan tidak benar');
  }
}

// funtion clear screen
function reset() {
  outputscreen.value = '';
}

// function menghapus angka di screen
function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}
