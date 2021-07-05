$(document).ready(function(){

    (function($) {
        "use strict";


    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value);
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                contact_name: {
                    required: true,
                    minlength: 2
                },
                contact_email: {
                    required: true,
                    email: true
                },
                contact_url: {
                    required: true
                },
                addInfos: {
                    minlength: 50
                }
            },
            messages: {
                contact_name: {
                    required: "vamos, tienes un nombre ¿no?",
                    minlength: "su nombre debe tener al menos 2 caracteres"
                },
                contact_email: {
                    required: "sin correo electrónico, sin mensaje"
                },
                addInfos: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "¿eso es todo? ¿De Verdad?"
                },
                contact_url: {
                    required: "háganos saber acerca de su sitio"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 0.15, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn();
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 0.15, function() {
                            $('#error').fadeIn();
                        })
                    }
                })
            }
        })
    })

 })(jQuery)
});
