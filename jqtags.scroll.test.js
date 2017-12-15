define({
    name: 'jqtags.scroll.test',
    extend: "spamjs.view",
    using: ["jqtags.tab", "jqtags.scroll"]
}).as(function(test, jqtab, jqscroll) {

    return {
        _init_: function() {
            var self = this;
            this.$$.loadTemplate({
                src: this.path("scroll.html")
            });
        },
        _ready_: function() {

        }
    };
});
