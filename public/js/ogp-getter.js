$("#url").each(function (i, elem) {
    ogp_url = $(elem).attr("href");

    console.log(ogp_url);

    $(elem).parent().after("<a href=\"" + ogp_url + "\" class=\"ogp ogp" + i + "\"><div><p id=\"url\" href=\"" + ogp_url + "\">" + ogp_url + "</p></div></a>")

    fetch(ogp_url).then(res => res.text()).then(text => {
        const el = new DOMParser().parseFromString(text, "text/html")
        const head_els = (el.head.children)


        Array.from(head_els).map(v => {
            const prop = v.getAttribute('property');
            if (!prop) return;

            if (prop == 'og:title') {
                // that.ogp_title = v.getAttribute("content");
                $(".ogp" + i).find("div").append("<p id=\"title\">" + v.getAttribute("content") + "</p>");
            }
            if (prop == 'og:image') {
                // that.ogp_image = v.getAttribute("content");
                $(".ogp" + i).find("div").append("<div id=\"img\"><img src=\"" + v.getAttribute("content") + "\"></div>");
            }
        })
    })
})