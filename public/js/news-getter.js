const url = [
    "https://miri-home-page.vercel.app/article/202201181",
    "https://miri-home-page.vercel.app/article/202201181",
    "https://miri-home-page.vercel.app/article/202201181",
    "https://miri-home-page.vercel.app/article/202201181",
    "https://miri-home-page.vercel.app/article/202201181"
];

// const url = [
//     "https://isirmt.d3bu.net/article/",
//     "https://isirmt.d3bu.net/article/readme/",
//     "https://isirmt.d3bu.net/article/",
//     "https://isirmt.d3bu.net/",
//     "https://isirmt.d3bu.net/article/versions-file/"
// ];

url.forEach(function (elem, i) {
    fetch(elem).then(res => res.text()).then(text => {
        const el = new DOMParser().parseFromString(text, "text/html")
        const head_els = (el.head.children)
        Array.from(head_els).map(v => {
            const prop = v.getAttribute('property');
            if (!prop) return;

            if (prop == 'og:title'){
                $(".nt"+[i+1]).html(v.getAttribute("content"));
            }
            if (prop == 'og:description'){
                $(".nd"+[i+1]).html(v.getAttribute("content"));
            }
            if (prop == 'og:url'){
                $(".nu"+[i+1]).attr('href', v.getAttribute("content"));
            }
            if (prop == 'og:image'){
                $(".ni"+[i+1]).attr('src', v.getAttribute("content"));
            }
        })
    })
})