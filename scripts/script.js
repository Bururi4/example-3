let loader = $('.loader')
$('#checkout').click(function () {
    let product = $('#product');
    let name = $('#name');
    let phone = $('#phone');
    let hasError = false;
    loader.css('display', 'flex');
    $('.error-input').hide();
    product.css('border-color', 'rgb(130, 19, 40)');
    name.css('border-color', 'rgb(130, 19, 40)');
    phone.css('border-color', 'rgb(130, 19, 40)');

    if (!product.val()) {
        product.next().show();
        hasError = true;
        product.css('border-color', 'red');
    }
    if (!name.val()) {
        name.next().show();
        hasError = true;
        name.css('border-color', 'red');
    }
    if (!phone.val()) {
        phone.next().show();
        hasError = true;
        phone.css('border-color', 'red');
    }

    if (!hasError) {
        $.ajax({
            method: 'POST',
            url: 'https://testologia.site/checkout',
            data: {product: product.val(), name: name.val(), phone: phone.val()}
        })
            .done(function (msg) {
                loader.hide();
                if (msg.success) {
                    $('#order-form-info').css('display', 'none');
                    $('#order-form-feedback').css('display', 'flex');
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
            });
    }

})