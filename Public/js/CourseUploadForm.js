$(document).ready(function () {
    var form_count = 1;
    var  total_forms = $("fieldset").length;
    $('.form .next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                $(this).next().fadeIn();
            });
        }
        setProgressBar(++form_count);
    });
    $('.form .previous').on('click', function () {
        $(this).parents('fieldset').fadeOut(400, function () {
            $(this).prev().fadeIn();
        });
        setProgressBar(--form_count);
    })
    setProgressBar(form_count);
    function setProgressBar(curStep) {
        var percent = parseFloat(1500/ total_forms) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent)
    }
});