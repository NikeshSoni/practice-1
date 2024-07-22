// new DataTable('#example', {
//     ajax: '../data/2500.txt',
//     initComplete: function () {
//         this.api()
//             .row(1000)
//             .scrollTo();
//     },
//     scrollCollapse: true,
//     scroller: true,
//     scrollY: 200
// });

new DataTable('#example', {
    ajax: '../data/2500.txt',
    initComplete: function () {
        this.api()
            .row(1000)
            .scrollTo();
    },
    scrollCollapse: true,
    scroller: true,
    scrollY: 200
});