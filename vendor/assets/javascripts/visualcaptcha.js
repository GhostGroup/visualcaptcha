/**
 * visualCaptchaHTML class by emotionLoop - 2013.03.28
 *
 * This file handles the JS for the main visualCaptcha class.
 *
 * This license applies to this file and others without reference to any other license.
 *
 * @author emotionLoop | http://emotionloop.com
 * @link http://visualcaptcha.net
 * @package visualCaptcha
 * @license GNU GPL v3
 * @version 4.0.3
 */
$(document).ready(function() {
	var isRetina = false;

	// Check if the device is retina-like
	if ( window.devicePixelRatio && window.devicePixelRatio > 1 ) {
		isRetina = true;
	}

	// If the device is retina-like, update the img src's and the dropzone class
	if ( isRetina ) {
		$('div.eL-captcha img').each(function(index, element) {
			if ( ! $(element).attr('src') ) return;
			
			var newImageSRC = $(element).attr('src').replace(/(.+)(\.\w{3,4})$/, "$1@2x$2");
			$.ajax({
				url: newImageSRC,
				type: "HEAD",
				success: function() {
					$(element).attr('src', newImageSRC);
				}
			});
		});

	}

  $('div.eL-captcha > div.eL-possibilities > img').on('click touchstart', function() {
    if ( $('#' + window.vCVals.n).length ) {
      $('#' + window.vCVals.n).remove();
    }
    var validElement = '<input type="hidden" name="' + window.vCVals.n + '" id="' + window.vCVals.n + '" readonly="readonly" value="' + $(this).data('value') + '">';
    $('#' + window.vCVals.f).append(validElement);
    $('.eL-possibilities img').css({'background-color': ''})
    $(this).css({ 'background-color': '#00CDBD' });
  });

});
