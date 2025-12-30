function tampilkanWaktu() {
    const now = new Date();
    document.getElementById("waktu").innerHTML =
        now.toLocaleDateString() + " | " + now.toLocaleTimeString();
}
