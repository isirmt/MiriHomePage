const url = [
    "https://miri-home-page.vercel.app/article/202201181",
    "https://miri-home-page.vercel.app/article/202201181",
    "https://miri-home-page.vercel.app/article/202201181",
    "https://miri-home-page.vercel.app/article/202201181",
    "https://miri-home-page.vercel.app/article/202201181"
];

var t_arr = ['.nt1', '.nt2', '.nt3', '.nt4', '.nt5'];
var d_arr = ['.nd1', '.nd2', '.nd3', '.nd4', '.nd5'];
var u_arr = ['.nu1', '.nu2', '.nu3', '.nu4', '.nu5'];
var i_arr = ['.ni1', '.ni2', '.ni3', '.ni4', '.ni5'];

url.forEach(function (elem, i) {
    fetch(elem).then(res => res.text()).then(text => {
        const el = new DOMParser().parseFromString(text, "text/html")
        const head_els = (el.head.children)
        Array.from(head_els).map(v => {
            const prop = v.getAttribute('property');
            if (!prop) return;

            if (prop == 'og:title'){
                $(t_arr[i]).html(v.getAttribute("content"));
            }
            if (prop == 'og:description'){
                $(d_arr[i]).html(v.getAttribute("content"));
            }
            if (prop == 'og:url'){
                $(u_arr[i]).attr('href', v.getAttribute("content"));
            }
            if (prop == 'og:image'){
                $(i_arr[i]).attr('src', v.getAttribute("content"));
            }
            console.log(prop, v.getAttribute("content"))
        })
    })
})