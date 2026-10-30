function calculateTotalPrice() {
    var item1 = parseFloat(document.getElementById("item1").value) || 0;
    var item2 = parseFloat(document.getElementById("item2").value) || 0;
    var item3 = parseFloat(document.getElementById("item3").value) || 0;
    var totalPrice = item1 + item2 + item3;
    document.getElementById("totalPrice").value = "Total Price: $" + totalPrice.toFixed(2);
}