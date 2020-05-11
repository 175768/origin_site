$(function(){
    // #で始まるアンカーをクリックした場合に処理
    $('a').click(function() {
        console.log("clicked");
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

    $(".navbar-brand").hover(
        function() {
            $old_color = $(this).css('color');
            $(this).css('color', "red");
        },
        function() {
            $(this).css("color", $old_color);
        }
    );

    $(".nav-button").hover(
        function() {
            //背景色を反転させる。
            $old_bg_color = $(this).css('background-color');
            $(this).css('background-color', "red");
        },
        function() {
            $(this).css("background-color", $old_bg_color);
        }
    );

    $(".row div").hover(
        function() {
            $bg_color = $(this).css("background-color");
            let bg_color;
            $class = $(this).attr("class");
            if ($(this).hasClass("one")) {
                bg_color = "#3877ff";
            } else if ($(this).hasClass("two")) {
                bg_color = "#1ee66b";
            } else if ($(this).hasClass("three")) {
                bg_color = "yellow";
            } else if ($(this).hasClass("four")) {
                bg_color = "#ff3535";
            } else if ($(this).hasClass("five")) {
                bg_color = "pink";
            } else {
                bg_color = $bg_color;
            }
            $(this).css("background-color", bg_color);
        },
        function() {
            $(this).css("background-color", $bg_color);
        }
            
    );

    $(".row div").click(function() {
        $(this).children("p").toggle(300);
    });

    $(".hobby-lists li").hover(
        function() {
            $color = $(this).css("color");
            $(this).css("color", "red");
        },
        function() {
            $(this).css("color", $color);
        }
    );

    $(".animes li").click(function() {
        if ($(".anime-img").children("img,p").is(":visible")) {
            $(".anime-img").children("img,p").hide();
        }
        $class = $(this).attr("class");
        $(".hobby-img").children("."+$class).fadeIn(600);
    });

    $(".games li").click(function() {
        if ($(".game-img").children("img,p").is(":visible")) {
            $(".game-img").children("img,p").hide();
        }
        $class = $(this).attr("class");
        $(".hobby-img").children("."+$class).fadeIn(600);

        if ($(this).next("p").is(":visible")) {
            $(this).next("p").slideUp("slow");
        } else if ($(".games:not()").children("p").is(":visible")) {
            $(".games p").slideUp("slow");
            $(this).next("p").slideToggle("slow");
        } else {
            $(this).next("p").slideToggle("slow");
        }
    });

    $(".mcs li").click(function() {
        if ($(this).next("p").is(":visible")) {
            $(this).next("p").slideUp("slow");
        } else if ($(".mcs:not()").children("p").is(":visible")) {
            $(".mcs p").slideUp("slow");
            $(this).next("p").slideToggle("slow");
        } else {
            $(this).next("p").slideToggle("slow");
        }
    });

    $(".musics li").click(function() {
        if ($(this).next("p").is(":visible")) {
            $(this).next("p").slideUp("slow");
        } else if ($(".musics:not()").children("p").is(":visible")) {
            $(".musics p").slideUp("slow");
            $(this).next("p").slideToggle("slow");
        } else {
            $(this).next("p").slideToggle("slow");
        }
    });

    $('.mc-slide').slick({
        autoplay: true, //自動再生
        dots: false, //ドットのナビゲーションを表示
        infinite: true, //スライドのループ有効化
        speed: 2000, //切り替えのスピード（小さくすると速くなる）
        fade: true, //フェードの有効化
    });

    $('.music-slide').slick({
        autoplay: true, //自動再生
        dots: false, //ドットのナビゲーションを表示
        infinite: true, //スライドのループ有効化
        speed: 2000, //切り替えのスピード（小さくすると速くなる）
        fade: true, //フェードの有効化
    });

    $(".musics li").click(function() {
        //$id = $(".music-slide iframe:visible").attr("class");
        console.log($(".music-slide .hentai")).attr("display");
        console.log($(".music-slide .chanmina")).attr("display");
        console.log($(".music-slide .zorn")).attr("display");
    });
});