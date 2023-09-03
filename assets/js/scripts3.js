$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#top').fadeIn();
    } else {
      $('#top').fadeOut();
    }
  });
    
  $('#top').click(function() {
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
});

$(document).ready(function(){
  $(".featured-left").owlCarousel({
    stagePadding: 10,
    items: 5,
    loop: true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive:{
      0:{
          items:3
      },
      600:{
          items:4
      },
      1000:{
          items:5
      }
    }
  });
});

$(document).ready(function(){
  $(".featured-right").owlCarousel({
    rtl:true,
    stagePadding: 10,
    items: 5,
    loop: true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive:{
      0:{
          items:3
      },
      600:{
          items:4
      },
      1000:{
          items:5
      }
    }
  });
});


$(document).ready(function(){
  $(".card-gallery").owlCarousel({
    stagePadding: 10,
    items: 4,
    loop: true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });
});

$(document).ready(function(){
  $(".image-gallery").owlCarousel({
    items: 4,
    loop: true,
    margin:15,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });
});

$(document).ready(function() {
  $('input[name="paymentMethod"]').change(function() {
    if ($('#creditCard[value="option-1"]').is(':checked')) {
      $('#cc-name').prop('disabled', false);
      $('#cc-number').prop('disabled', false);
      $('#cc-expiration').prop('disabled', false);
      $('#cc-cvv').prop('disabled', false);
    }
    else if ($('#debitCard[value="option-1"]').is(':checked')) {
      $('#cc-name').prop('disabled', false);
      $('#cc-number').prop('disabled', false);
      $('#cc-expiration').prop('disabled', false);
      $('#cc-cvv').prop('disabled', false);
    }
    else if ($('#stripe[value="option-1"]').is(':checked')) {
      $('#cc-name').prop('disabled', false);
      $('#cc-number').prop('disabled', false);
      $('#cc-expiration').prop('disabled', false);
      $('#cc-cvv').prop('disabled', false);
    }
    else if ($('#masterCard[value="option-1"]').is(':checked')) {
      $('#cc-name').prop('disabled', false);
      $('#cc-number').prop('disabled', false);
      $('#cc-expiration').prop('disabled', false);
      $('#cc-cvv').prop('disabled', false);
    }
    else if ($('#visaCard[value="option-1"]').is(':checked')) {
      $('#cc-name').prop('disabled', false);
      $('#cc-number').prop('disabled', false);
      $('#cc-expiration').prop('disabled', false);
      $('#cc-cvv').prop('disabled', false);
    }
    else if ($('#americanExpress[value="option-1"]').is(':checked')) {
      $('#cc-name').prop('disabled', false);
      $('#cc-number').prop('disabled', false);
      $('#cc-expiration').prop('disabled', false);
      $('#cc-cvv').prop('disabled', false);
    }
    else if ($('#payPal[value="option-1"]').is(':checked')) {
      $('#cc-name').prop('disabled', false);
      $('#cc-number').prop('disabled', false);
      $('#cc-expiration').prop('disabled', false);
      $('#cc-cvv').prop('disabled', false);
    }
    else {
      $('#cc-name').prop('disabled', true);
      $('#cc-number').prop('disabled', true);
      $('#cc-expiration').prop('disabled', true);
      $('#cc-cvv').prop('disabled', true);
    }
  });
});

$(document).ready(function() {
  // Set the initial price
  var basePrice = 420.00;
  $('#price').text(basePrice.toFixed(2)+ '/-');
  
  // When the size is changed, update the price
  $('#size').change(function() {
    var size = $(this).val();
    var price = basePrice;
    
    // Update the price based on the size
    switch(size) {
      case 'small':
        price -= 195.00;
        break;
      case 'medium':
        // No price change for medium
        break;
      case 'large':
        price += 360.00;
        break;
    }
    
    // Update the price on the page
    $('#price').text(price.toFixed(2)+ '/-');
  });
});



$(document).ready(function() {
  $('.btn-increment').click(function(e) {
    e.preventDefault();
    var qtyInput = $(this).siblings('.qty');
    var qtyVal = parseInt(qtyInput.val());
    qtyInput.val(qtyVal + 1);
  });
  $('.btn-decrement').click(function(e) {
    e.preventDefault();
    var qtyInput = $(this).siblings('.qty');
    var qtyVal = parseInt(qtyInput.val());
    if (qtyVal > 1) {
      qtyInput.val(qtyVal - 1);
    }
  });
});


// Input Mask : Phone Number
function formatPhoneNumber() {
  let phoneNumber = document.getElementById("phone").value;
  phoneNumber = phoneNumber.replace(/\D/g, ''); // remove all non-numeric characters
  phoneNumber = phoneNumber.substring(0, 13); // trim to max length of 11 digits
  const countryCode = phoneNumber.substring(0, 2);
  const operator = phoneNumber.substring(2, 5);
  const prefix = phoneNumber.substring(5, 7);
  const lineNumber = phoneNumber.substring(7);
  if (phoneNumber.length > 7) {
    phoneNumber = `+${countryCode} (${operator}) ${prefix}-${lineNumber}`;
  } else if (phoneNumber.length > 5) {
    phoneNumber = `+${countryCode} (${operator}) ${prefix}`;
  } else if (phoneNumber.length > 2) {
    phoneNumber = `+${countryCode} (${operator})`;
  } else {
    phoneNumber = `+${countryCode}`;
  }
  document.getElementById("phone").value = phoneNumber;
}
