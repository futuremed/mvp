$(document).mousedown(function (e){

        var customOption = $(".custom-select");

        if (!customOption.is(e.target) && !customOption.is(e.target)
             && customOption.has(e.target).length === 0){
            customOption.children('.custom-option').hide();
        }
    });

    $(document).on('click', '.select-close', function(){
        var id = $(this).parents().attr("data-selected");
        var data = $('[data-selected="'+id+'"]')
        data.each(function(){
            if ($(this).hasClass("select-append")){
                $(this).remove();
            }
            else{
                setTimeout(function(){$(this).removeClass("select-disable")}.bind($(this)), 10);
                $(this).children('.select-close').remove();
            }
        })
    });
    $(document).on('click', '.custom-select', function(){
var idlst = 0;
$('.custom-option').children().each(function(){
    $(this).attr("data-selected",idlst++);
})
    $(this).children(".custom-option").css("display","flex");
});
    $(document).on('click', '.custom-option-item', function(){
        if ($(this).hasClass("select-disable")){
            return;
        }

        var newBlock = '<div data-selected="'+$(this).attr("data-selected")+'" class="select-append">'+$(this).text()+'<i class="fa fa-close select-close" aria-hidden="true"></i></div>'
    $(this).addClass("select-disable");
    $(this).append('<i class="fa fa-close select-close" aria-hidden="true"></i>');
    $(this).parents(".custom-select").append(newBlock);
    var width = 0;
$(this).parents(".custom-select").children('.select-append').each(function(){
    width += $(this).width() + 45;
})
if (width >= $(this).parents(".custom-select").width()){
    var height = $(this).parents(".custom-select").css("height");
    $(this).parents(".custom-select").css("height", parseInt(height) * 2 +"px");
}

});
$('footer').css('width', $(window).width());
$('.custom-option').hide();

$('.rating-info').click(function(){
    setTimeout(function(){

    $(this).children(".drop-down-menu").addClass("drop-down-menu-active");
    }.bind($(this)),200)
})

$(document).mousedown(function (e){
        var ratingInfo = $(".drop-down-menu");
        var customOption = $(".custom-select");

        if (!customOption.is(e.target) && !customOption.is(e.target)
             && customOption.has(e.target).length === 0){
            customOption.children('.custom-option').hide();
        }
        if (!ratingInfo.is(e.target) && ratingInfo.has(e.target).length === 0){
            ratingInfo.removeClass("drop-down-menu-active");
        }
    });

