!function($){function a(a,t,n){t.fadeOut(),data={action:"filter_posts",mtm_nonce:mtm_vars.mtm_nonce,taxonomy:a},$.get(mtm_vars.mtm_ajax_url,data,function(a){a&&(t.html(a),t.fadeIn().css({display:"inline-block"}),t.find(n).wrapAll('<div class="gallery-dynamic-row"></div>'),t.find("a").on("click",function(a){a.preventDefault()}),s()),$(r+" a").on("click",function(a){a.preventDefault()}),$(r).on("click",function(){i($(this))})})}function t(a,t,i){i.hasClass("load-this")&&(t.html('<img class="loader" width="40" height="40" src="/wp-content/themes/mtm-pink-spring-theme/assets/img/spin.gif">'),data={action:"single_post",mtm_nonce:mtm_vars.mtm_nonce,postid:a},$.get(mtm_vars.mtm_ajax_url,data,function(a){a&&t.html(a),$(m).on("click",function(a){n(a,$(this))})}))}function n(t,n){$(c).removeClass("showcasing"),t.preventDefault(),n.addClass("showcasing");var i=n.attr("data-id"),s=$("#work .mtm-grid--wrapper"),e=".mtm-grid--single";a(i,s,e)}function i(a){e(),l(a);var n=a.attr("data-uid"),i=$("#work .expanded-gallery-single");t(n,i,a)}function s(){u=0,f=1;var a=$(v);a.each(function(){var a=$(this);if(a.prev().length>0){if(a.offset().top!==a.prev().offset().top)return!1;u++}else u++}),a.each(function(a){var t=$(this);t.removeClass(function(a,t){return(t.match(/(^|\s)img-row-\S+/g)||[]).join(" ")}),t.addClass("img-row-"+(a%u+1))})}function e(){var a=$(v);a.parent().is(g)&&a.unwrap();for(var t=0;t<a.length;t+=u)a.slice(t,t+u).wrapAll('<div class="'+w+'"></div>');$(g).each(function(a){$(this).attr("data-row",a+1)})}function o(){var a=$(v);a.unwrap(),a.wrapAll('<div class="'+w+'"></div>')}function d(){var a=$(p);a.length>0&&a.remove()}function l(a){var t=".expanded-gallery-single",n=".gallery-full-content",i="load-this",s="showcasing",e=$(v),o=a.parent(g),d=a.data("uid"),l=$(t).data("uid"),r=o.data("row");d===l?(a.removeClass(i),a.removeClass(s),$(t).removeClass("animate-show").data("uid",0)):l>0&&d!==l&&r===D?(e.removeClass(s),$(t).addClass("animate-show").data("uid",d),e.addClass(i),a.addClass(s)):l>0&&d!==l&&r!==D?(e.removeClass(s),$(t).slideUp().data("uid",0),$(t).remove(),o.after('<div class="'+h+'" data-uid="'+d+'"></div>'),$(t).slideDown("slow").addClass("animate-show"),D=r,e.addClass(i),a.addClass(s)):($(t).remove(),o.after('<div class="'+h+'" data-uid="'+d+'"></div>'),$(t).slideDown("slow").addClass("animate-show"),D=r,e.addClass(i),a.addClass(s))}var r="#work .mtm-grid--single",c="#work .mtm-component--term-list a",m="#work .post--metadata_categories a",u,f,v=".mtm-grid--single",w="gallery-dynamic-row",h="expanded-gallery-single",g="."+w,p="."+h,C=$(v),_=$(g),k=$(p);s();var y=0;$(window).load(function(){y=$(window).width()});var x;$(window).on("resize",function(a){clearTimeout(x),x=setTimeout(function(){newWidth=$(window).width(),y!=newWidth&&(s(),d(),o(),$(v).removeClass("showcasing")),y=newWidth},300)});var D=0;$(document).ready(function(){$(c).on("click",function(a){n(a,$(this))}),$(r+" a").on("click",function(a){a.preventDefault()}),$(r).on("click",function(){$(this).addClass("load-this"),i($(this))})})}(jQuery);